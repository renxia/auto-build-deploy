const { mkdirp, execSync, color, rmrf } = require('@lzwme/fe-utils');
const config = require('../abd.config.cjs');
const { resolve } = require('node:path');
const { existsSync } = require('node:fs');

const T = {
  async start() {
    const now = Date.now();
    console.log(config);
    mkdirp(config.baseDir);

    // todo: 读取编译缓存

    for (const item of config.projects) {
      const repoDir = resolve(config.baseDir, item.id);
      console.info('开始构建：', item.id, color.gray(item.repo));

      // if (existsSync(repoDir)) rmrf(repoDir);
      // 拉取代码
      execSync(`git clone --depth 1 ${item.repo} ${item.id}`, 'inherit', config.baseDir);

      // todo: 判断是否已编译过

      // 执行 cmds
      if (Array.isArray(item.cmds)) {
        for (const cmd of item.cmds) {
          if (typeof cmd === 'function') {} else {
            const { stderr } = execSync(cmd, 'inherit', repoDir);

            if (stderr) {
              console.log('err:', stderr);
              process.exit(1);
            }
          }
        }
      }

      console.log(`构建完成！`);
    }

    if (process.env.CI_BUILD) {
      // 切换至 gh-pages 分支
      let r = execSync('git fetch --all && git checkout -b gh-pages origin/gh-pages || git checkout gh-pages', 'pipe', config.rootDir);
      if (r.stderr) process.exit(1);

      for (const item of config.projects) {
        const distDir = resolve(config.baseDir, item.id, dist);
        if (existsSync(distDir)) {
          const destDir = resolve(config.baseDir, 'docs', item.id);
          console.log(`[${config.id}]存在产物：`, distDir);
          execSync(`rm -rf ${destDir}`);
          execSync(`mv ${distDir} ${destDir}`);

          // todo: 设置编译缓存
        }
      }

      // todo: 保存编译缓存
    }
  },
};

T.start();
