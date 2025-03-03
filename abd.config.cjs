const fs = require('node:fs');
const { resolve } = require('node:path');

const rootDir = __dirname;
const isWindows = process.platform === 'win32';
const config = {
  rootDir,
  cacheDir: resolve(rootDir, 'cache'),
  repo: 'https://github.com/renxia/auto-build-deploy.git', // 'git@github.com:renxia/auto-build-deploy.git',
  projects: [
    {
      id: 'quant-wiki',
      repo: 'https://github.com/LLMQuant/quant-wiki.git',
      // 如果是字符串，则作为命令执行，如果是函数，则作为 node.js 脚本执行
      cmds: [
        // !isWindows ? 'python -m venv .venv' : '',
        // !isWindows ? 'source .venv/bin/activate' : '',
        'pip install -r requirements.txt',
        // todo: 修改部分文件
        'mkdocs build',
        'rm -rf ../docs/quant-wiki',
        'mv site dist', // 约定所有输出目录都为 dist
        // todo: 批量替换
        (repoDir) => {
          // update sitemap
          const sitemapFile = resolve(repoDir, 'dist', 'sitemap.xml');
          if (fs.existsSync(sitemapFile)) {
            const sitemap = fs.readFileSync(sitemapFile, 'utf8').replaceAll('https://quant-wiki.com', 'https://lzw.me/doc/quant-wiki');
            fs.writeFileSync(sitemapFile, sitemap);
          }
        },
      ],
      onUpdateFile: html => {
        html = html.replaceAll('https://quant-wiki.com', 'https://lzw.me/doc/quant-wiki');
        return html;
      },
    },
  ],
};

module.exports = config;
