const { resolve } = require('node:path');

const rootDir = __dirname;
const config = {
  rootDir,
  baseDir: resolve(rootDir, 'cache'),
  projects: [
    {
      id: 'quant-wiki',
      repo: 'https://github.com/LLMQuant/quant-wiki.git',
      // 如果是字符串，则作为命令执行，如果是函数，则作为 node.js 脚本执行
      cmds: [
        // 'python -m venv .venv',
        // 'source .venv/bin/activate',
        'pip install -r requirements.txt',
        // todo: 修改部分文件
        'mkdocs build',
        'rm -rf ../docs/quant-wiki',
        'mv site dist', // 约定所有输出目录都为 dist
        // todo: 批量替换
        // () => {},
      ],
    },
  ],
};

module.exports = config;
