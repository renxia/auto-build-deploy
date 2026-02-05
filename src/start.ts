import { mkdirp, execSync as feExecSync, color, getHeadCommitId, assign, rmrf } from '@lzwme/fe-utils';
import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { program } from 'commander';

import * as uh from './update-html.js';
import { gitCommit, getGitRemoteUrl, logger } from './utils.js';
import { config } from '../abd.config.js';

const T = {
  initConfig(cfg: Partial<typeof config>) {
    process.env.NODE_OPTIONS = '--max-old-space-size=8192';

    if (cfg !== config) assign(config, cfg);
  },
  updateReadme() {
    const readmeFile = resolve(config.rootDir, 'README.md');
    const docs = config.projects.map(item => {
      return [
        `- \`${item.id}\`${item.desc ? `: ${item.desc}` : ''}`,
        `  - [https://lzw.me/docs/${item.id}](https://lzw.me/docs/${item.id})`,
        `  - [gh-pages](https://renxia.github.io/auto-build-deploy/docs/${item.id}/)`,
      ].join('\n');
    }).join('\n');

    const rawContent = readFileSync(readmeFile, 'utf-8')
    const content = rawContent.replace(/<!--docs-list-->[\s\S]*<!--\/docs-list-->/, `<!--docs-list-->\n${docs}\n<!--/docs-list-->`);
    if (rawContent !== content) writeFileSync(readmeFile, content);
    else logger.info('README.md is up to date');
  },
  async start(cfg?: Partial<typeof config>) {
    if (cfg) T.initConfig(cfg);

    // const now = Date.now();
    logger.log('projects:', config.projects.length);
    mkdirp(config.cacheDir);

    // 拉取 gh-pages 分支
    const ghPagesCacheDir = resolve(config.cacheDir, 'abd-gh-pages');
    logger.log('开始拉取 gh-pages 分支', color.gray(ghPagesCacheDir));
    if (existsSync(ghPagesCacheDir)) {
      feExecSync(`git reset --hard && git fetch && git reset remote/origin/gh-pages --hard`, 'inherit', ghPagesCacheDir);
    } else {
      feExecSync(`git clone --branch gh-pages ${config.repo || getGitRemoteUrl()} ${ghPagesCacheDir}`, 'inherit', config.cacheDir);
    }
    // 更新 readme.md
    writeFileSync(resolve(ghPagesCacheDir, 'README.md'), readFileSync(resolve(config.rootDir, 'README.md'), 'utf8'));

    // 清理文件
    ['docs/docs', 'README.MD'].forEach(fileName => {
      if (existsSync(resolve(ghPagesCacheDir, fileName))) rmrf(resolve(ghPagesCacheDir, fileName));
    });

    // 读取编译缓存
    const buildCacheFile = resolve(ghPagesCacheDir, 'build-cache.json');
    const buildCache = existsSync(buildCacheFile) ? require(buildCacheFile) : {};
    const buildProject = async (item: typeof config.projects[0]) => {
      if (config.run?.length && !config.run.includes(item.id)) return;

      const repoDir = resolve(config.cacheDir, item.id);
      logger.info('开始构建：', color.cyan(item.id), color.gray(item.repo), color.gray(repoDir));

      if (existsSync(repoDir)) {
        // rmrf(repoDir);
        feExecSync(`git reset --hard && git pull -r -n -v`, 'inherit', repoDir);
      } else {
        // 拉取代码
        feExecSync(`git clone --depth 1 ${item.repo} ${item.id}`, 'inherit', config.cacheDir);
      }

      // 判断是否已编译过
      const commitId = getHeadCommitId(true, repoDir);
      if (!config.force && commitId === buildCache[item.id] && existsSync(resolve(ghPagesCacheDir, 'docs', item.id))) {
        logger.log(`已编译过：`, color.cyan(item.id), color.gray(commitId));
        return;
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
            await cmd(repoDir, item.id);
          } else {
            const { stderr } = feExecSync(cmd, 'inherit', repoDir);

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
        const destDir = resolve(ghPagesCacheDir, 'docs', item.id);
        logger.log(`[${item.id}]开始移动产物至 gh-pages/docs：${color.gray(distDir)} -> ${color.gray(destDir)}`);
        if (existsSync(destDir)) execSync(`rm -rf ${destDir}`);
        mkdirp(dirname(destDir));
        execSync(`mv "${distDir}" "${destDir}"`);
        uh.updateHtml(destDir, item.onUpdateFile);
      } else {
        logger.error(`[${item.id}]不存在产物：`, distDir);
      }
    }

    for (const item of config.projects) {
      try {
        buildProject(item);
      } catch (error) {
        logger.error((error));

      }
    }

    writeFileSync(buildCacheFile, JSON.stringify(buildCache, null, 2));

    if (config.ci) {
      logger.info('正在推送到 gh-pages 分支...');
      // 切换至 gh-pages 分支
      let r = feExecSync(
        'git reset --hard && git fetch --all && git checkout -b gh-pages origin/gh-pages || git checkout gh-pages',
        'pipe',
        config.rootDir
      );
      if (r.stderr) {
        logger.error(r.stderr);
        process.exit(1);
      }

      feExecSync('ls -la', 'inherit', resolve(ghPagesCacheDir, 'docs'));

      ['docs', 'build-cache.json', 'README.md'].forEach(file => {
        const ghPagesFile = resolve(ghPagesCacheDir, file);

        if (existsSync(ghPagesFile)) {
          execSync(`rm -rf "${file}"`, { stdio: 'inherit', cwd: config.rootDir });
          execSync(`mv "${ghPagesFile}" "${file}"`, { stdio: 'inherit', cwd: config.rootDir });
        }
      });

      gitCommit({ cwd: config.rootDir, amend: true, ci: config.ci });
    }
  },
};

program
  .option('--run <pids...>', '仅运行指定id的项目')
  .option('--ci', 'CI模式')
  .option('-u, --update-readme', '更新 README.md 文件')
  .action((options: any) => {
    if (options.updateReadme) return T.updateReadme();
    if (options.debug) logger.updateOptions({ levelType: 'debug' });
    T.start(options);
  });

program.parse(process.argv);
// T.start();
