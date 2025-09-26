import { mkdirp, execSync, color, rmrf, getHeadCommitId, assign } from '@lzwme/fe-utils';
import { resolve, dirname } from 'node:path';
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { program } from 'commander';

import * as uh from './update-html.js';
import { gitCommit, getGitRemoteUrl, logger } from './utils.js';
import { log } from 'node:console';

const config = require('../abd.config.cjs');

const T = {
  initConfig(cfg = config) {
    if (cfg !== config) {
      assign(config, cfg);
    }
  },
  async start(cfg?: Partial<typeof config>) {
    if (cfg) T.initConfig(cfg);

    // const now = Date.now();
    logger.log(config.projects.length);
    mkdirp(config.cacheDir);

    // 拉取 gh-pages 分支
    const ghPagesDir = resolve(config.cacheDir, 'abd-gh-pages');
    logger.log('开始拉取 gh-pages 分支', color.gray(ghPagesDir));
    if (existsSync(ghPagesDir)) {
      execSync(`git reset --hard && git fetch && git reset remote/origin/gh-pages --hard`, 'inherit', ghPagesDir);
    } else {
      execSync(`git clone --branch gh-pages ${config.repo || getGitRemoteUrl()} ${ghPagesDir}`, 'inherit', config.cacheDir);
    }
    // 更新 readme.md
    writeFileSync(resolve(ghPagesDir, 'README.md'), readFileSync(resolve(config.rootDir, 'README.md'), 'utf8'));

    // 读取编译缓存
    const buildCacheFile = resolve(ghPagesDir, 'build-cache.json');
    const buildCache = existsSync(buildCacheFile) ? require(buildCacheFile) : {};

    for (const item of config.projects) {
      if (config.run?.length && !config.run.includes(item.id)) continue;

      const repoDir = resolve(config.cacheDir, item.id);
      logger.info('开始构建：', color.cyan(item.id), color.gray(item.repo));

      if (existsSync(repoDir)) {
        // rmrf(repoDir);
        execSync(`git reset --hard && git pull -r -n -v`, 'inherit', repoDir);
      } else {
        // 拉取代码
        execSync(`git clone --depth 1 ${item.repo} ${item.id}`, 'inherit', config.cacheDir);
      }

      // 判断是否已编译过
      const commitId = getHeadCommitId(true, repoDir);
      if (!config.force && commitId === buildCache[item.id] && existsSync(resolve(ghPagesDir, 'docs', item.id))) {
        logger.log(`已编译过：`, color.cyan(item.id), color.gray(commitId));
        continue;
      }

      const patchDir = resolve(config.rootDir, `patch/${item.id}`);
      if (existsSync(patchDir)) {
        cpSync(patchDir, repoDir, { force: true, recursive: true });
      }

      // 执行 cmds
      if (Array.isArray(item.cmds)) {
        for (const cmd of item.cmds) {
          if (!cmd) continue;
          if (typeof cmd === 'function') {
            cmd(repoDir, item.id);
          } else {
            const { stderr } = execSync(cmd, 'inherit', repoDir);

            if (stderr) {
              logger.log('err:', stderr);
              process.exit(1);
            }
          }
        }
      }

      buildCache[item.id] = commitId;
      logger.log(`构建完成！`);

      const distDir = resolve(config.cacheDir, item.id, item.output || 'dist');
      if (existsSync(distDir)) {
        const destDir = resolve(ghPagesDir, 'docs', item.id);
        logger.log(`[${item.id}]开始移动产物至 gh-pages/docs：`, distDir);
        if (existsSync(destDir)) execSync(`rm -rf ${destDir}`);
        mkdirp(dirname(destDir));
        execSync(`mv ${distDir} ${destDir}`);
        uh.updateHtml(destDir, item.onUpdateFile);
      } else {
        logger.error(`[${item.id}]不存在产物：`, distDir);
      }
    }

    writeFileSync(buildCacheFile, JSON.stringify(buildCache, null, 2));

    if (process.env.CI_BUILD) {
      logger.info('正在推送到 gh-pages 分支...');
      // 切换至 gh-pages 分支
      let r = execSync(
        'git reset --hard && git fetch --all && git checkout -b gh-pages origin/gh-pages || git checkout gh-pages',
        'pipe',
        config.rootDir
      );
      if (r.stderr) {
        logger.error(r.stderr);
        process.exit(1);
      }

      ['docs', 'build-cache.json', 'README.md'].forEach(file => {
        const ghPagesFile = resolve(ghPagesDir, file);

        if (existsSync(ghPagesFile)) {
          execSync(`rm -rf $${file}`, 'inherit', config.rootDir);
          execSync(`mv "${ghPagesFile}" ${file}`, 'inherit', config.rootDir);
        }
      });

      gitCommit({ cwd: config.rootDir, amend: true, ci: config.ci });
    }
  },
};

program.option('--run <pids...>', '仅运行指定id的项目').action((options: any) => {
  if (options.debug) logger.updateOptions({ levelType: 'debug' });
  T.start(options);
});

program.parse(process.argv);
// T.start();
