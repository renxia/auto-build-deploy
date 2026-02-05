import { resolve } from 'node:path';
import * as fs from 'node:fs'

const rootDir = process.cwd();
// const isWindows = process.platform === 'win32';

export const config = {
  force: false,
  rootDir,
  cacheDir: resolve(rootDir, 'cache'),
  repo: 'https://github.com/renxia/auto-build-deploy.git', // 'git@github.com:renxia/auto-build-deploy.git',
  /** 是否为 CI 环境 */
  ci: process.env.CI_BUILD != null,
  projects: [
    {
      id: 'quant-wiki',
      desc: '中文量化百科',
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
        (repoDir: string, _id?: string) => {
          // update sitemap
          const sitemapFile = resolve(repoDir, 'dist', 'sitemap.xml');
          if (fs.existsSync(sitemapFile)) {
            const sitemap = fs.readFileSync(sitemapFile, 'utf8').replaceAll('https://quant-wiki.com', 'https://lzw.me/doc/quant-wiki');
            fs.writeFileSync(sitemapFile, sitemap);
          }
        },
      ],
      onUpdateFile: (html: string) => {
        html = html.replaceAll('https://quant-wiki.com', 'https://lzw.me/doc/quant-wiki');
        return html;
      },
    },
    // {
    //   id: 'numpy-cn',
    //   repo: 'https://github.com/teadocs/numpy-cn.git',
    //   cmds: [
    //     'pnpm update',
    //     'pnpm install',
    //     'pnpm docs:build',
    //   ],
    // }
    {
      id: 'tvm-cn',
      desc: 'TVM中文文档',
      repo: 'https://github.com/hyperai/tvm-cn.git',
      output: 'build',
      cmds: [
        'npm install',
        'npm run build',
      ],
    },
    {
      id: 'elasticsearch-cn',
      desc: 'Elasticsearch 中文文档',
      repo: 'https://github.com/dev2007/elasticsearch-doc.git',
      output: 'build',
      cmds: [
        'npm install',
        'npm run build',
      ],
    },
    {
      id: 'gemini-cli-learning',
      desc: 'Gemini CLI 中文教程',
      repo: 'https://github.com/kjdui11/gemini-cli-learning-platform.git',
      output: 'out/docs/gemini-cli-learning',
      cmds: [
        'npm install',
        'npm run build',
      ],
    },
    {
      id: 'opencodedocs',
      desc: 'OpenCode 学习文档',
      repo: 'https://github.com/vbgate/opencodedocs.git',
      output: 'out/docs/opencodedocs',
      cmds: [
        'npm install',
        // 'npm run docs:build',
        'pnpm vitepress build docs',
        'mv docs/.vitepress/dist/ dist'
      ],
    }
  ],
  /** 运行时赋值 */
  run: [] as string[]
};
