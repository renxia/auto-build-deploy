import { mkdirp, execSync, color, rmrf, getHeadCommitId, assign } from '@lzwme/fe-utils';
import { resolve, dirname } from 'node:path';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { program } from 'commander';

import * as uh from './update-html.js';
import { gitCommit, getGitRemoteUrl, logger } from './utils.js';

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
    execSync(`git clone --branch gh-pages ${config.repo || getGitRemoteUrl()} ${ghPagesDir}`, 'inherit', config.cacheDir);
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
        rmrf(repoDir);
        execSync(`git reset --hard && git pull -r -n -v`, 'inherit', repoDir);
      } else {
        // 拉取代码
        execSync(`git clone --depth 1 ${item.repo} ${item.id}`, 'inherit', config.cacheDir);
      }

      // 判断是否已编译过
      const cid = getHeadCommitId(true, repoDir);
      if (cid === buildCache[item.id]) {
        logger.log(`已编译过：`, color.cyan(item.id), color.gray(cid));
        continue;
      }

      // 执行 cmds
      if (Array.isArray(item.cmds)) {
        for (const cmd of item.cmds) {
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

      buildCache[item.id] = cid;
      logger.log(`构建完成！`);
    }

    if (process.env.CI_BUILD) {
      for (const item of config.projects) {
        const distDir = resolve(config.cacheDir, item.id, 'dist');
        if (existsSync(distDir)) {
          const destDir = resolve(ghPagesDir, 'docs', item.id);
          logger.log(`[${item.id}]存在产物：`, distDir);
          if (existsSync(destDir)) execSync(`rm -rf ${destDir}`);
          mkdirp(dirname(destDir));
          execSync(`mv ${distDir} ${destDir}`);
          uh.updateHtml(destDir, item.onUpdateFile);
        }
      }

      writeFileSync(buildCacheFile, JSON.stringify(buildCache, null, 2));

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
