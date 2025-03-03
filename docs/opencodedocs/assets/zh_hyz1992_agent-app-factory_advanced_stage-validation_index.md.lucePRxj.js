import{_ as i,c as a,o as n,a1 as t}from"./chunks/framework.DILC4Csi.js";const g=JSON.parse('{"title":"Validation 阶段：自动化代码质量验证与问题定位 | AI App Factory 教程","description":"学习如何使用 Validation Agent 自动验证生成的代码质量，包括依赖安装检查、TypeScript 类型检查、Prisma schema 验证和测试执行检查。本教程教你解读验证报告、快速定位问题并提供修复建议，确保生成代码符合生产就绪标准。","frontmatter":{"title":"Validation 阶段：自动化代码质量验证与问题定位 | AI App Factory 教程","sidebarTitle":"5 分钟通过代码验证","subtitle":"阶段 6：Validation - 验证代码质量","description":"学习如何使用 Validation Agent 自动验证生成的代码质量，包括依赖安装检查、TypeScript 类型检查、Prisma schema 验证和测试执行检查。本教程教你解读验证报告、快速定位问题并提供修复建议，确保生成代码符合生产就绪标准。","tags":["validation","代码质量","自动化测试"],"prerequisite":["advanced-stage-code"],"order":130},"headers":[],"relativePath":"zh/hyz1992/agent-app-factory/advanced/stage-validation/index.md","filePath":"zh/hyz1992/agent-app-factory/advanced/stage-validation/index.md"}'),l={name:"zh/hyz1992/agent-app-factory/advanced/stage-validation/index.md"};function p(h,s,e,k,d,r){return n(),a("div",null,[...s[0]||(s[0]=[t(`<h1 id="阶段-6-validation-验证代码质量" tabindex="-1">阶段 6：Validation - 验证代码质量 <a class="header-anchor" href="#阶段-6-validation-验证代码质量" aria-label="Permalink to &quot;阶段 6：Validation - 验证代码质量&quot;">​</a></h1><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to &quot;学完你能做什么&quot;">​</a></h2><ul><li><strong>自动化代码验证</strong>：一键检查前后端代码的依赖安装、类型检查和基础测试</li><li><strong>解读验证报告</strong>：理解 Validation Agent 生成的详细报告和问题分类</li><li><strong>快速定位问题</strong>：根据报告中的具体位置和建议修复代码错误</li><li><strong>确保代码质量</strong>：验证生成的代码符合生产就绪标准</li></ul><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to &quot;你现在的困境&quot;">​</a></h2><p>你已经完成了 Code 阶段，生成了前后端代码，但最头疼的是：</p><ul><li><strong>代码能不能跑</strong>：依赖都装对了吗？类型检查能过吗？</li><li><strong>Prisma 对不对</strong>：schema 语法有问题吗？能生成客户端吗？</li><li><strong>测试靠谱吗</strong>：有测试吗？能通过吗？</li><li><strong>有没有坑</strong>：环境变量配置对吗？导入路径正确吗？</li></ul><p>人工逐一检查这些问题要花好长时间，而且容易遗漏。Validation 阶段就是为了解决这些问题——它自动验证代码质量，生成详细报告。</p><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to &quot;什么时候用这一招&quot;">​</a></h2><p>当你需要：</p><ul><li><strong>快速验证代码</strong>：确认生成的代码符合基本质量标准</li><li><strong>发现潜在问题</strong>：在部署前找出依赖、类型、测试等问题</li><li><strong>代码质量保证</strong>：确保前后端代码都能通过基本检查</li><li><strong>避免部署失败</strong>：提前发现问题，减少返工成本</li></ul><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to &quot;核心思路&quot;">​</a></h2><p>Validation Agent 是一个<strong>质量检查员</strong>，它的任务是验证 Code Agent 生成的代码是否符合质量标准。它的核心特点：</p><h3 id="输入输出" tabindex="-1">输入输出 <a class="header-anchor" href="#输入输出" aria-label="Permalink to &quot;输入输出&quot;">​</a></h3><table tabindex="0"><thead><tr><th>类型</th><th>内容</th></tr></thead><tbody><tr><td><strong>输入</strong></td><td><code>artifacts/backend/</code>（后端代码）、<code>artifacts/client/</code>（前端代码）</td></tr><tr><td><strong>输出</strong></td><td><code>artifacts/validation/report.md</code>（验证报告）</td></tr></tbody></table><h3 id="验证检查项" tabindex="-1">验证检查项 <a class="header-anchor" href="#验证检查项" aria-label="Permalink to &quot;验证检查项&quot;">​</a></h3><p>Validation Agent 会执行 8 大类检查：</p><table tabindex="0"><thead><tr><th>检查项</th><th>说明</th></tr></thead><tbody><tr><td><strong>文件完整性</strong></td><td>确认所有必须文件都存在</td></tr><tr><td><strong>依赖安装</strong></td><td>验证 <code>package.json</code> 依赖可正常解析</td></tr><tr><td><strong>TypeScript 编译</strong></td><td>检查代码是否通过类型检查</td></tr><tr><td><strong>Prisma Schema</strong></td><td>验证数据模型语法是否正确</td></tr><tr><td><strong>测试执行</strong></td><td>确认测试存在且能通过</td></tr><tr><td><strong>代码规范</strong></td><td>检查 lint 脚本配置</td></tr><tr><td><strong>关键模式</strong></td><td>扫描代码中的关键模式（错误处理、健康检查等）</td></tr><tr><td><strong>常见问题</strong></td><td>识别已知的错误模式</td></tr></tbody></table><h3 id="执行约束" tabindex="-1">执行约束 <a class="header-anchor" href="#执行约束" aria-label="Permalink to &quot;执行约束&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">只读模式</p><p>Validation Agent <strong>只验证不修改</strong>：</p><ul><li>禁止修改任何代码文件</li><li>禁止实际安装依赖（使用 <code>--dry-run</code>）</li><li>禁止执行有副作用的命令</li></ul></div><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to &quot;跟我做&quot;">​</a></h2><h3 id="第-1-步-进入-validation-阶段" tabindex="-1">第 1 步：进入 Validation 阶段 <a class="header-anchor" href="#第-1-步-进入-validation-阶段" aria-label="Permalink to &quot;第 1 步：进入 Validation 阶段&quot;">​</a></h3><p>假设你已经完成了 Code 阶段，现在要开始验证代码质量。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果在 pipeline 中，直接进入下一个阶段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者从某个阶段重新开始</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span></code></pre></div><p><strong>你应该看到</strong>：CLI 会显示 Validation 阶段的信息，包括输入文件和预期输出。</p><h3 id="第-2-步-ai-助手执行-validation-agent" tabindex="-1">第 2 步：AI 助手执行 Validation Agent <a class="header-anchor" href="#第-2-步-ai-助手执行-validation-agent" aria-label="Permalink to &quot;第 2 步：AI 助手执行 Validation Agent&quot;">​</a></h3><p>AI 助手会加载 <code>agents/validation.agent.md</code>，然后开始执行。</p><p>Validation Agent 的执行流程：</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[检查前后端目录] --&gt; B[文件完整性检查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[依赖安装检查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[TypeScript 编译检查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[Prisma Schema 验证]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[测试执行检查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    F --&gt; G[代码模式检查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    G --&gt; H[常见问题扫描]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    H --&gt; I[生成验证报告]</span></span></code></pre></div><p><strong>AI 助手会做什么</strong>：</p><ol><li><p><strong>检查后端目录</strong></p><ul><li>确认 <code>artifacts/backend/</code> 存在</li><li>检查必须文件：<code>package.json</code>、<code>tsconfig.json</code>、<code>.env.example</code>、<code>prisma/schema.prisma</code></li></ul></li><li><p><strong>检查前端目录</strong></p><ul><li>确认 <code>artifacts/client/</code> 存在</li><li>检查必须文件：<code>package.json</code>、<code>tsconfig.json</code>、<code>app.json</code>、<code>App.tsx</code></li></ul></li><li><p><strong>依赖安装检查</strong></p><ul><li>后端：<code>cd artifacts/backend &amp;&amp; npm install --dry-run</code></li><li>前端：<code>cd artifacts/client &amp;&amp; npm install --dry-run</code></li><li>验证依赖是否可以正常解析</li></ul></li><li><p><strong>TypeScript 编译检查</strong></p><ul><li>后端：<code>cd artifacts/backend &amp;&amp; npx tsc --noEmit</code></li><li>前端：<code>cd artifacts/client &amp;&amp; npx tsc --noEmit</code></li><li>检查代码是否通过类型检查</li></ul></li><li><p><strong>Prisma Schema 验证</strong></p><ul><li><code>cd artifacts/backend &amp;&amp; npx prisma validate</code></li><li>验证数据模型语法是否正确</li></ul></li><li><p><strong>测试执行检查</strong></p><ul><li>后端：<code>cd artifacts/backend &amp;&amp; npm test</code></li><li>前端：<code>cd artifacts/client &amp;&amp; npm test</code></li><li>确认测试存在且能通过</li></ul></li><li><p><strong>代码模式检查</strong></p><ul><li>扫描关键模式：错误处理、健康检查、SafeAreaView 等</li><li>检查依赖配置：dotenv、React Native Web 等</li></ul></li><li><p><strong>常见问题扫描</strong></p><ul><li>SQLite 使用 <code>type</code> 定义</li><li>环境变量值有引号</li><li>错误的导入路径</li><li>缺少必要的导入</li></ul></li><li><p><strong>生成验证报告</strong></p><ul><li>汇总所有检查结果</li><li>列出发现的问题</li><li>提供修复建议</li><li>保存到 <code>artifacts/validation/report.md</code></li></ul></li></ol><h3 id="第-3-步-查看验证报告" tabindex="-1">第 3 步：查看验证报告 <a class="header-anchor" href="#第-3-步-查看验证报告" aria-label="Permalink to &quot;第 3 步：查看验证报告&quot;">​</a></h3><p>Validation Agent 完成后，会生成详细的验证报告。</p><p>打开 <code>artifacts/validation/report.md</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/validation/report.md</span></span></code></pre></div><p><strong>你应该看到</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 代码验证报告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**生成时间**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2026-01-29 12:00:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**验证结果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ✅ 通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后端验证: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端验证: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总体评估: 代码质量符合 MVP 标准，可以进入 Preview 阶段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 后端验证详情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 文件完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文件 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| .env.example | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| prisma/schema.prisma | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/index.ts | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/app.ts | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 依赖安装</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 详情: 所有依赖可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 编译</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Prisma 验证</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 详情: Prisma schema 语法正确</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 测试执行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试数量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通过数量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失败数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码模式检查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 检查项 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 错误处理中间件 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 健康检查端点 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 环境变量使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Prisma Client 导入 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 测试文件存在 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| dotenv 首行导入 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 前端验证详情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 文件完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文件 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| app.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| App.tsx | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/navigation/index.tsx | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 依赖安装</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 详情: 所有依赖可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 编译</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 测试执行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试数量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通过数量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失败数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码模式检查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 检查项 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| SafeAreaView 使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Loading 组件 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Error 处理 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| API 调用封装 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| React Native Web 依赖 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| async-storage 依赖 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 发现的问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">无严重问题或警告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修复建议</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">无需修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 结论</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码质量符合 MVP 标准，建议进入 Preview 阶段。</span></span></code></pre></div><h3 id="第-4-步-处理验证失败的情况" tabindex="-1">第 4 步：处理验证失败的情况 <a class="header-anchor" href="#第-4-步-处理验证失败的情况" aria-label="Permalink to &quot;第 4 步：处理验证失败的情况&quot;">​</a></h3><p>如果验证失败，报告中会列出具体问题和修复建议。</p><p><strong>示例：部分通过的验证报告</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**验证结果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ⚠️ 部分通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 发现的问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 严重问题 (必须修复)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript 编译错误</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/controllers/items.ts:15</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误: Property &#39;title&#39; does not exist on type &#39;any&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 添加类型定义 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`const item: Item = req.body;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma schema 验证失败</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: prisma/schema.prisma:10</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误: Invalid datasource provider &#39;sqlite&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 将 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;sqlite&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;postgresql&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（生产环境）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 警告 (建议修复)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 缺少测试文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/controllers/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 为每个控制器添加测试文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 环境变量配置不完整</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: .env.example</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 添加 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`DATABASE_URL\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修复建议</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 TypeScript 错误：在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/controllers/items.ts\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中添加类型定义</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新 Prisma schema：修改数据源 provider</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加测试文件：为控制器编写测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 完善环境变量：补充 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`.env.example\`</span></span></code></pre></div><p><strong>修复步骤</strong>：</p><ol><li><p><strong>定位问题文件</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开问题文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend/src/controllers/items.ts</span></span></code></pre></div></li><li><p><strong>修复代码</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加类型定义</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.body;</span></span></code></pre></div></li><li><p><strong>更新 Prisma schema</strong></p><div class="language-prisma vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">prisma</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datasource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;postgresql&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 修改为 postgresql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DATABASE_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>重新验证</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重新运行 Validation 阶段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span></code></pre></div></li></ol><h3 id="第-5-步-确认检查点" tabindex="-1">第 5 步：确认检查点 <a class="header-anchor" href="#第-5-步-确认检查点" aria-label="Permalink to &quot;第 5 步：确认检查点&quot;">​</a></h3><p>在 AI 助手确认 Validation 阶段完成时，你会看到：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ Validation 阶段完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>生成的文件：</span></span>
<span class="line"><span>- 验证报告：artifacts/validation/report.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>验证结果：✅ 通过 / ⚠️ 部分通过 / ❌ 失败</span></span>
<span class="line"><span></span></span>
<span class="line"><span>检查点选项：</span></span>
<span class="line"><span>[1] 继续 - 进入 Preview 阶段</span></span>
<span class="line"><span>[2] 重试 - 重新验证代码</span></span>
<span class="line"><span>[3] 暂停 - 保存当前状态</span></span></code></pre></div><ul><li>如果验证通过，选择 <strong>继续</strong> 进入下一阶段</li><li>如果有问题，修复后选择 <strong>重试</strong> 重新验证</li><li>如果需要时间修复，选择 <strong>暂停</strong> 保存当前状态</li></ul><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to &quot;检查点 ✅&quot;">​</a></h2><p>完成 Validation 阶段后，你应该：</p><ul><li>[ ] 后端和前端的所有必须文件都存在</li><li>[ ] 依赖可以正常解析（<code>npm install --dry-run</code>）</li><li>[ ] TypeScript 编译无错误（<code>npx tsc --noEmit</code>）</li><li>[ ] Prisma schema 验证通过（<code>npx prisma validate</code>）</li><li>[ ] 测试文件存在且能通过（<code>npm test</code>）</li><li>[ ] 关键模式检查全部通过</li><li>[ ] 验证报告已生成（<code>artifacts/validation/report.md</code>）</li></ul><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to &quot;踩坑提醒&quot;">​</a></h2><h3 id="问题-1-依赖安装失败" tabindex="-1">问题 1：依赖安装失败 <a class="header-anchor" href="#问题-1-依赖安装失败" aria-label="Permalink to &quot;问题 1：依赖安装失败&quot;">​</a></h3><p><strong>症状</strong>：<code>npm install --dry-run</code> 报错</p><p><strong>解决方案</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查 package.json 语法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend/package.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常见问题：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 缺少引号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 依赖名称错误</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 版本格式不对</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修复后重新验证</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span></code></pre></div><h3 id="问题-2-typescript-编译错误" tabindex="-1">问题 2：TypeScript 编译错误 <a class="header-anchor" href="#问题-2-typescript-编译错误" aria-label="Permalink to &quot;问题 2：TypeScript 编译错误&quot;">​</a></h3><p><strong>症状</strong>：<code>npx tsc --noEmit</code> 报错</p><p><strong>常见错误类型</strong>：</p><table tabindex="0"><thead><tr><th>错误</th><th>原因</th><th>解决方案</th></tr></thead><tbody><tr><td><code>Property does not exist</code></td><td>类型未定义</td><td>添加类型定义</td></tr><tr><td><code>Module not found</code></td><td>导入路径错误</td><td>检查导入路径</td></tr><tr><td><code>Implicit any</code></td><td>隐式 any 类型</td><td>启用严格模式并添加类型</td></tr></tbody></table><h3 id="问题-3-prisma-schema-验证失败" tabindex="-1">问题 3：Prisma schema 验证失败 <a class="header-anchor" href="#问题-3-prisma-schema-验证失败" aria-label="Permalink to &quot;问题 3：Prisma schema 验证失败&quot;">​</a></h3><p><strong>症状</strong>：<code>npx prisma validate</code> 报错</p><p><strong>常见错误</strong>：</p><table tabindex="0"><thead><tr><th>错误</th><th>原因</th><th>解决方案</th></tr></thead><tbody><tr><td><code>Invalid datasource provider</code></td><td>provider 错误</td><td>使用 <code>postgresql</code> 或 <code>sqlite</code></td></tr><tr><td><code>Error parsing</code></td><td>语法错误</td><td>检查 model 定义</td></tr><tr><td><code>Relation error</code></td><td>关系定义错误</td><td>检查 <code>@relation</code> 字段</td></tr></tbody></table><h3 id="问题-4-测试失败" tabindex="-1">问题 4：测试失败 <a class="header-anchor" href="#问题-4-测试失败" aria-label="Permalink to &quot;问题 4：测试失败&quot;">​</a></h3><p><strong>症状</strong>：<code>npm test</code> 报错</p><p><strong>解决方案</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查测试文件是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;*.test.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查测试依赖是否安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend/package.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;devDependencies&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果缺少测试依赖，手动安装</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @testing-library/react-native</span></span></code></pre></div><h3 id="问题-5-关键模式检查失败" tabindex="-1">问题 5：关键模式检查失败 <a class="header-anchor" href="#问题-5-关键模式检查失败" aria-label="Permalink to &quot;问题 5：关键模式检查失败&quot;">​</a></h3><p><strong>症状</strong>：报告显示关键模式缺失</p><p><strong>常见缺失模式</strong>：</p><table tabindex="0"><thead><tr><th>模式</th><th>位置</th><th>修复方法</th></tr></thead><tbody><tr><td>错误处理中间件</td><td><code>src/middleware/error.ts</code></td><td>添加错误处理中间件</td></tr><tr><td>健康检查端点</td><td><code>src/routes/health.ts</code></td><td>添加 <code>/health</code> 路由</td></tr><tr><td>dotenv 首行导入</td><td><code>src/index.ts:1</code></td><td>添加 <code>import &#39;dotenv/config&#39;;</code></td></tr><tr><td>SafeAreaView</td><td><code>src/screens/Home.tsx</code></td><td>用 SafeAreaView 包裹内容</td></tr></tbody></table><h2 id="validation-agent-特殊要求" tabindex="-1">Validation Agent 特殊要求 <a class="header-anchor" href="#validation-agent-特殊要求" aria-label="Permalink to &quot;Validation Agent 特殊要求&quot;">​</a></h2><p>Validation Agent 有一些特殊的约束和要求，需要特别注意：</p><h3 id="_1-只读模式" tabindex="-1">1. 只读模式 <a class="header-anchor" href="#_1-只读模式" aria-label="Permalink to &quot;1. 只读模式&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">禁止修改代码</p><p>Validation Agent <strong>绝对禁止</strong>修改任何代码文件，只执行验证和报告生成。</p></div><h3 id="_2-dry-run-安装" tabindex="-1">2. Dry-run 安装 <a class="header-anchor" href="#_2-dry-run-安装" aria-label="Permalink to &quot;2. Dry-run 安装&quot;">​</a></h3><p>依赖安装检查使用 <code>--dry-run</code> 参数，不会实际安装依赖：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dry-run</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 只检查依赖是否可解析</span></span></code></pre></div><h3 id="_3-完整的报告" tabindex="-1">3. 完整的报告 <a class="header-anchor" href="#_3-完整的报告" aria-label="Permalink to &quot;3. 完整的报告&quot;">​</a></h3><p>Validation Agent <strong>必须</strong>生成完整的验证报告，包括：</p><table tabindex="0"><thead><tr><th>部分</th><th>内容</th></tr></thead><tbody><tr><td><strong>摘要</strong></td><td>后端/前端验证状态和总体评估</td></tr><tr><td><strong>后端详情</strong></td><td>文件完整性、依赖、编译、Prisma、测试、模式检查</td></tr><tr><td><strong>前端详情</strong></td><td>文件完整性、依赖、编译、测试、模式检查</td></tr><tr><td><strong>发现的问题</strong></td><td>严重问题和警告列表</td></tr><tr><td><strong>修复建议</strong></td><td>针对问题的具体修复步骤</td></tr><tr><td><strong>结论</strong></td><td>总体评估和下一步建议</td></tr></tbody></table><h3 id="_4-问题分级" tabindex="-1">4. 问题分级 <a class="header-anchor" href="#_4-问题分级" aria-label="Permalink to &quot;4. 问题分级&quot;">​</a></h3><p>Validation Agent 会将问题分为三级：</p><table tabindex="0"><thead><tr><th>级别</th><th>标准</th><th>处理方式</th></tr></thead><tbody><tr><td><strong>严重问题</strong></td><td>必须修复才能通过</td><td>在报告中标记为&quot;必须修复&quot;</td></tr><tr><td><strong>警告</strong></td><td>建议修复但非致命</td><td>在报告中标记为&quot;建议修复&quot;</td></tr><tr><td><strong>信息</strong></td><td>仅供参考</td><td>不影响验证结果</td></tr></tbody></table><h2 id="验证结果判定" tabindex="-1">验证结果判定 <a class="header-anchor" href="#验证结果判定" aria-label="Permalink to &quot;验证结果判定&quot;">​</a></h2><p>Validation Agent 会根据检查结果判定验证状态。</p><h3 id="通过条件-✅-通过" tabindex="-1">通过条件 (✅ 通过) <a class="header-anchor" href="#通过条件-✅-通过" aria-label="Permalink to &quot;通过条件 (✅ 通过)&quot;">​</a></h3><ul><li>所有必须文件存在</li><li>依赖安装无错误</li><li>TypeScript 编译无错误</li><li>Prisma schema 验证通过</li><li>基础测试存在且全部通过</li><li>关键模式检查全部通过</li></ul><h3 id="部分通过条件-⚠️-部分通过" tabindex="-1">部分通过条件 (⚠️ 部分通过) <a class="header-anchor" href="#部分通过条件-⚠️-部分通过" aria-label="Permalink to &quot;部分通过条件 (⚠️ 部分通过)&quot;">​</a></h3><ul><li>必须文件存在</li><li>依赖安装无错误</li><li>TypeScript 编译有警告但无错误</li><li>测试存在但部分失败（&lt; 30% 失败率）</li><li>存在非关键问题</li></ul><h3 id="失败条件-❌-失败" tabindex="-1">失败条件 (❌ 失败) <a class="header-anchor" href="#失败条件-❌-失败" aria-label="Permalink to &quot;失败条件 (❌ 失败)&quot;">​</a></h3><ul><li>必须文件缺失</li><li>依赖安装失败</li><li>TypeScript 编译有错误</li><li>Prisma schema 验证失败</li><li>测试缺失或大量失败（≥ 30% 失败率）</li></ul><h2 id="代码质量检查清单" tabindex="-1">代码质量检查清单 <a class="header-anchor" href="#代码质量检查清单" aria-label="Permalink to &quot;代码质量检查清单&quot;">​</a></h2><p>Validation Agent 会对照以下检查清单进行验证。</p><h3 id="后端必须项" tabindex="-1">后端必须项 <a class="header-anchor" href="#后端必须项" aria-label="Permalink to &quot;后端必须项&quot;">​</a></h3><ul><li>[ ] <code>package.json</code> 存在</li><li>[ ] <code>tsconfig.json</code> 存在</li><li>[ ] <code>.env.example</code> 存在</li><li>[ ] <code>prisma/schema.prisma</code> 存在</li><li>[ ] <code>src/index.ts</code> 存在</li><li>[ ] <code>src/app.ts</code> 存在</li><li>[ ] <code>src/index.ts</code> 首行导入 dotenv</li><li>[ ] dotenv 在 dependencies 中</li><li>[ ] 存在错误处理中间件</li><li>[ ] 存在健康检查端点 (<code>/health</code>)</li><li>[ ] 环境变量使用 <code>process.env</code></li><li>[ ] Prisma Client 导入正确</li><li>[ ] 存在至少一个测试文件</li><li>[ ] package.json 包含 <code>test</code> 脚本</li></ul><h3 id="前端必须项" tabindex="-1">前端必须项 <a class="header-anchor" href="#前端必须项" aria-label="Permalink to &quot;前端必须项&quot;">​</a></h3><ul><li>[ ] <code>package.json</code> 存在</li><li>[ ] <code>tsconfig.json</code> 存在</li><li>[ ] <code>app.json</code> 存在</li><li>[ ] <code>App.tsx</code> 存在</li><li>[ ] <code>src/navigation/index.tsx</code> 存在</li><li>[ ] 存在 SafeAreaView 使用</li><li>[ ] 存在 Loading 组件</li><li>[ ] 存在 Error 处理</li><li>[ ] API 调用通过封装层</li><li>[ ] 包含 React Native Web 依赖</li><li>[ ] 包含 async-storage 依赖</li><li>[ ] <code>app.json</code> 不引用不存在的图片文件</li></ul><h2 id="常见问题扫描" tabindex="-1">常见问题扫描 <a class="header-anchor" href="#常见问题扫描" aria-label="Permalink to &quot;常见问题扫描&quot;">​</a></h2><p>Validation Agent 会扫描以下已知问题模式：</p><table tabindex="0"><thead><tr><th>检查项</th><th>检测方法</th><th>修复建议</th></tr></thead><tbody><tr><td>SQLite 使用 <code>type</code> 定义</td><td>检查 schema.prisma 是否包含 <code>type Xxx</code></td><td>移除 <code>type</code> 定义</td></tr><tr><td>环境变量值有引号</td><td>检查 .env 是否包含 <code>=&quot;xxx&quot;</code> 或 <code>=&#39;xxx&#39;</code></td><td>移除引号</td></tr><tr><td>Prisma 版本是 7.x</td><td>检查 package.json 中 prisma 版本是否 ^7</td><td>改用 Prisma 5.x</td></tr><tr><td>错误的导入路径</td><td>检查 screens 中是否有 <code>from &#39;./ui/&#39;</code></td><td>改为 <code>from &#39;../components/ui/&#39;</code></td></tr><tr><td>缺少 View 导入</td><td>检查组件是否使用 View 但未导入</td><td>添加 <code>import { View } from &#39;react-native&#39;</code></td></tr><tr><td>字符串未终止</td><td>检查 .tsx 文件是否有连续的引号</td><td>添加缺失的引号</td></tr></tbody></table><h2 id="验证报告示例" tabindex="-1">验证报告示例 <a class="header-anchor" href="#验证报告示例" aria-label="Permalink to &quot;验证报告示例&quot;">​</a></h2><h3 id="通过的验证报告" tabindex="-1">通过的验证报告 <a class="header-anchor" href="#通过的验证报告" aria-label="Permalink to &quot;通过的验证报告&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 代码验证报告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**生成时间**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2026-01-29 12:00:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**验证结果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ✅ 通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后端验证: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端验证: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总体评估: 代码质量符合 MVP 标准，可以进入 Preview 阶段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 后端验证详情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 文件完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文件 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| .env.example | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| prisma/schema.prisma | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/index.ts | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/app.ts | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 依赖安装</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 详情: 所有依赖可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 编译</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Prisma 验证</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 详情: Prisma schema 语法正确</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 测试执行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试数量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通过数量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失败数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码模式检查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 检查项 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 错误处理中间件 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 健康检查端点 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 环境变量使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Prisma Client 导入 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 测试文件存在 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| dotenv 首行导入 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 前端验证详情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 文件完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 文件 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| app.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| App.tsx | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/navigation/index.tsx | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 依赖安装</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 详情: 所有依赖可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 编译</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 测试执行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 状态: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试数量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通过数量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失败数量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 代码模式检查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 检查项 | 状态 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| SafeAreaView 使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Loading 组件 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Error 处理 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| API 调用封装 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| React Native Web 依赖 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| async-storage 依赖 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 发现的问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">无严重问题或警告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修复建议</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">无需修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 结论</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码质量符合 MVP 标准，建议进入 Preview 阶段。</span></span></code></pre></div><h3 id="失败的验证报告" tabindex="-1">失败的验证报告 <a class="header-anchor" href="#失败的验证报告" aria-label="Permalink to &quot;失败的验证报告&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 代码验证报告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**生成时间**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2026-01-29 12:00:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**验证结果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ❌ 失败</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后端验证: ❌</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端验证: ⚠️</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总体评估: 后端存在严重问题，必须修复后才能继续</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 发现的问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 严重问题 (必须修复)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript 编译错误</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/controllers/items.ts:15</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误: Property &#39;title&#39; does not exist on type &#39;any&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 添加类型定义 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`const item: Item = req.body;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma schema 验证失败</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: prisma/schema.prisma:10</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误: Invalid datasource provider &#39;sqlite&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 将 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;sqlite&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;postgresql&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 缺少必须文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文件: src/middleware/error.ts</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 创建错误处理中间件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 警告 (建议修复)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端测试失败</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/screens/</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">__tests__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/HomeScreen.test.tsx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失败: 2/8 测试失败</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 修复测试用例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 缺少 Loading 组件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/components/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议: 创建 Loading 组件并正确使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修复建议</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 TypeScript 错误：在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/controllers/items.ts\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中添加类型定义</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新 Prisma schema：修改数据源 provider 为 postgresql</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 创建错误处理中间件：添加 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/middleware/error.ts\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复前端测试：检查并修复失败的测试用例</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 创建 Loading 组件：添加 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/components/Loading.tsx\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 结论</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">后端存在严重问题，必须修复后才能继续。建议：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修复 TypeScript 编译错误</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新 Prisma schema</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加缺失的文件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 重新运行 Validation 阶段</span></span></code></pre></div><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to &quot;本课小结&quot;">​</a></h2><p>Validation 阶段是流水线的质量保证环节，它确保生成的代码符合基本的质量标准。</p><p><strong>关键要点</strong>：</p><ol><li><strong>验证流程</strong>：Validation Agent 自动检查文件完整性、依赖、编译、测试等</li><li><strong>只读模式</strong>：只验证不修改，使用 <code>--dry-run</code> 避免副作用</li><li><strong>问题分级</strong>：将问题分为严重、警告、信息三级</li><li><strong>详细报告</strong>：生成包含具体位置和修复建议的验证报告</li><li><strong>结果判定</strong>：根据检查结果判定通过/部分通过/失败</li></ol><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to &quot;下一课预告&quot;">​</a></h2><blockquote><p>下一课我们学习 <strong><a href="./../stage-preview/">Preview 阶段</a></strong>。</p><p>你会学到：</p><ul><li>如何生成运行说明文档</li><li>快速启动指南</li><li>部署配置（Docker、CI/CD）</li></ul></blockquote><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to &quot;附录：源码参考&quot;">​</a></h2><details><summary><strong>点击展开查看源码位置</strong></summary><blockquote><p>更新时间：2026-01-29</p></blockquote><table tabindex="0"><thead><tr><th>功能</th><th>文件路径</th><th>行号</th></tr></thead><tbody><tr><td>Validation Agent 定义</td><td><a href="https://github.com/hyz1992/agent-app-factory/blob/main/agents/validation.agent.md" target="_blank" rel="noreferrer"><code>agents/validation.agent.md</code></a></td><td>1-320</td></tr><tr><td>流水线定义</td><td><a href="https://github.com/hyz1992/agent-app-factory/blob/main/pipeline.yaml" target="_blank" rel="noreferrer"><code>pipeline.yaml</code></a></td><td>79-96</td></tr></tbody></table><p><strong>关键约束</strong>：</p><ul><li>禁止修改任何代码文件（<code>validation.agent.md:293</code>）</li><li>禁止实际安装依赖，使用 <code>--dry-run</code>（<code>validation.agent.md:294</code>）</li><li>必须生成完整的验证报告（<code>validation.agent.md:296</code>）</li><li>必须提供具体的修复建议（<code>validation.agent.md:298</code>）</li></ul><p><strong>验证检查项</strong>：</p><ul><li>文件完整性检查（<code>validation.agent.md:24-42</code>）</li><li>依赖安装检查（<code>validation.agent.md:43-53</code>）</li><li>TypeScript 编译检查（<code>validation.agent.md:55-65</code>）</li><li>Prisma Schema 验证（<code>validation.agent.md:67-73</code>）</li><li>测试执行检查（<code>validation.agent.md:75-85</code>）</li><li>代码规范检查（<code>validation.agent.md:87-97</code>）</li><li>关键模式检查（<code>validation.agent.md:99-122</code>）</li><li>常见问题扫描（<code>validation.agent.md:124-136</code>）</li></ul><p><strong>验证结果判定</strong>：</p><ul><li>通过条件（<code>validation.agent.md:268-274</code>）</li><li>部分通过条件（<code>validation.agent.md:276-281</code>）</li><li>失败条件（<code>validation.agent.md:283-288</code>）</li></ul><p><strong>执行流程</strong>：</p><ul><li>操作步骤（<code>validation.agent.md:303-313</code>）</li><li>输出格式（<code>validation.agent.md:139-262</code>）</li></ul></details>`,114)])])}const c=i(l,[["render",p]]);export{g as __pageData,c as default};
