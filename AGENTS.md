# AGENTS.md

This file provides guidance to AI Coding Tool when working with code in this repository.

## Project Overview

This is an automated documentation build and deployment tool. It clones configured documentation repositories, applies local patches, builds them, and deploys to GitHub Pages.

Currently managed docs:

- `quant-wiki`
- `tvm-cn`
- `elasticsearch-cn`
- `gemini-cli-learning`

## Commands

```bash
# Full build for all projects
npm start

# Build specific project(s) only
npm start -- --run <project-id> [...]

# CI mode - commits and pushes to gh-pages branch
npm start -- --ci

# Update README.md project list
npm start -- --update-readme

# Clean build artifacts
npm run clean
```

## 代码架构

### 核心流程

构建流程由 `src/start.ts` 主导，按以下顺序执行：

1. **初始化环境** - 确保 `cache/` 目录存在，拉取/更新 `gh-pages` 分支到 `cache/abd-gh-pages/`
2. **遍历项目配置** - 读取 `abd.config.cjs` 中的 `projects` 数组，对每个项目执行：
   - 克隆或拉取代码到 `cache/<project-id>/`
   - 检查构建缓存：通过 Git HEAD commit ID 判断是否需要重新构建
   - 应用本地补丁：将 `patch/<project-id>/` 下的文件复制到项目目录
   - 执行构建命令：依次运行 `cmds` 数组中的命令或函数
   - 移动构建产物：将 `output` 目录（默认 `dist`）移动到 `cache/abd-gh-pages/docs/<project-id>/`
   - 处理 HTML 文件：注入统计脚本、执行自定义替换
3. **提交部署**（CI 模式）- 将 `docs/`、`build-cache.json`、`README.md` 推送到 gh-pages 分支

### 配置系统 (`abd.config.cjs`)

配置文件位于项目根目录，导出配置对象：

```javascript
{
  rootDir: string,      // 项目根目录
  cacheDir: string,     // 缓存目录（默认 cache/）
  repo: string,         // 本仓库地址
  ci: boolean,          // 是否为 CI 环境
  projects: [{
    id: string,         // 项目唯一标识
    desc: string,       // 项目描述
    repo: string,       // 源码仓库地址
    output: string,     // 构建输出目录（默认 dist）
    cmds: (string | Function)[], // 构建命令数组
    onUpdateFile: (html: string) => string // HTML 处理回调
  }]
}
```

`cmds` 支持两种类型：
- **字符串**：作为 shell 命令执行，支持 `pip install`、`npm run build` 等
- **函数**：接收 `repoDir` 和 `item.id` 参数，用于执行 Node.js 脚本逻辑（如修改 sitemap.xml）

### 补丁机制 (`patch/`)

`patch/<project-id>/` 目录用于存放覆盖文件。构建前，该目录内容会被递归复制到对应项目的源码目录，实现无需修改上游仓库的定制化：

- `patch/tvm-cn/docusaurus.config.ts` - 覆盖 TVM 中文文档的 Docusaurus 配置
- `patch/elasticsearch-cn/docusaurus.config.js` - 覆盖 Elasticsearch 文档配置
- `patch/gemini-cli-learning/next.config.ts` - 覆盖 Next.js 配置文件

### HTML 后处理 (`src/update-html.ts`)

构建完成后，所有 HTML 文件会经过以下处理：

1. **注入统计脚本** - 在 `</body>` 标签前插入 `https://lzw.me/x/lib/utils/h5-common.min.js` 脚本
2. **自定义替换** - 执行项目配置中 `onUpdateFile` 回调（如替换域名、修改链接等）
3. **版本更新** - 自动替换旧版本脚本链接

### 构建缓存

使用 `build-cache.json`（存储于 gh-pages 分支）记录每个项目最后一次成功构建的 Git commit ID。若上游仓库未更新且本地已存在构建产物，则跳过该项目的构建步骤，显著提升 CI 执行效率。

### 模块职责

- **`src/start.ts`** - 主入口，编排整个构建流程，处理命令行参数（`--run`、`--ci`、`--update-readme`）
- **`src/utils.ts`** - Git 操作辅助函数（提交、获取远程地址）、日志实例
- **`src/update-html.ts`** - HTML 文件递归处理，注入脚本和自定义替换

## Tech Stack

- TypeScript with `tsx` runtime (no separate build step)
- `@lzwme/fe-utils` - file ops, exec, logging utilities
- `commander` - CLI argument parsing
- `console-log-colors` - terminal output
