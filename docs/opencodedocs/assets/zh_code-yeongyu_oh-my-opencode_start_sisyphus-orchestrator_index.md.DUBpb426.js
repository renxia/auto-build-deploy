import{_ as n,c as a,o as p,a1 as l}from"./chunks/framework.DILC4Csi.js";const u=JSON.parse('{"title":"Sisyphus: 多代理协同 | oh-my-opencode","description":"学习 Sisyphus 编排器的工作原理和任务委托机制。掌握多 AI 代理协同的最佳实践，提升开发效率。","frontmatter":{"title":"Sisyphus: 多代理协同 | oh-my-opencode","sidebarTitle":"多代理协同开发","subtitle":"Sisyphus: 多代理协同 | oh-my-opencode","description":"学习 Sisyphus 编排器的工作原理和任务委托机制。掌握多 AI 代理协同的最佳实践，提升开发效率。","tags":["orchestration","sisyphus","agent"],"prerequisite":["start-installation"],"order":20},"headers":[],"relativePath":"zh/code-yeongyu/oh-my-opencode/start/sisyphus-orchestrator/index.md","filePath":"zh/code-yeongyu/oh-my-opencode/start/sisyphus-orchestrator/index.md"}'),i={name:"zh/code-yeongyu/oh-my-opencode/start/sisyphus-orchestrator/index.md"};function e(t,s,c,o,h,r){return p(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="主编排器-像资深工程师一样思考和执行" tabindex="-1">主编排器：像资深工程师一样思考和执行 <a class="header-anchor" href="#主编排器-像资深工程师一样思考和执行" aria-label="Permalink to &quot;主编排器：像资深工程师一样思考和执行&quot;">​</a></h1><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to &quot;学完你能做什么&quot;">​</a></h2><ul><li>理解 Sisyphus 如何像真实开发团队一样协调工作</li><li>掌握任务委托的最佳实践，让不同专家代理协同完成复杂任务</li><li>学会通过并行后台任务大幅提升开发效率</li><li>知道什么时候该让代理自己干，什么时候该委托给专家</li></ul><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to &quot;你现在的困境&quot;">​</a></h2><p>你可能遇到过这些问题：</p><ul><li>AI 代理&quot;半途而废&quot;，写着写着就忘了目标</li><li>同一个文件改来改去，每次都要重新读一遍上下文</li><li>想让 AI 干很多件事，但只能一个一个排队等</li><li>代理写了代码，但你自己还得去验证对不对、有没有破坏其他功能</li></ul><p><strong>根本原因</strong>：你让一个&quot;万能助手&quot;干所有活，但专家才懂专业事。</p><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to &quot;什么时候用这一招&quot;">​</a></h2><p>Sisyphus 是你的主编排器，适合这些场景：</p><table tabindex="0"><thead><tr><th>场景</th><th>是否适合</th><th>替代方案</th></tr></thead><tbody><tr><td>复杂功能开发（3+ 步骤）</td><td>✅ 强烈推荐</td><td>Prometheus + Atlas（需要详细规划）</td></tr><tr><td>快速修复已知 Bug</td><td>✅ 合适</td><td>直接让 Sisyphus 做</td></tr><tr><td>需要调研多个仓库/文档</td><td>✅ 强烈推荐</td><td>使用 Sisyphus 并行委托</td></tr><tr><td>单文件简单修改</td><td>✅ 可以</td><td>直接编辑（更简单）</td></tr><tr><td>需要详细项目规划</td><td>⚠️ 不推荐</td><td>先用 Prometheus 生成计划</td></tr></tbody></table><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to &quot;核心思路&quot;">​</a></h2><p><strong>Sisyphus</strong> 是主编排器代理，像真实开发团队一样协调多个 AI 专家。它通过职责分离和并行委托机制，让专业子代理各自发挥所长，实现高效协作。</p><p>Sisyphus 不是&quot;更聪明的 AI&quot;，它是一个<strong>编排系统</strong>。</p><h3 id="职责分离" tabindex="-1">职责分离 <a class="header-anchor" href="#职责分离" aria-label="Permalink to &quot;职责分离&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    User[👤 你] --&gt; Sisyphus[⚡ Sisyphus&lt;br/&gt;主编排器]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Explore[🔍 Explore&lt;br/&gt;代码库搜索]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Librarian[📚 Librarian&lt;br/&gt;文档研究]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Oracle[🧠 Oracle&lt;br/&gt;架构咨询]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Junior[🪨 Sisyphus-Junior&lt;br/&gt;任务执行]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Explore -.并行.-&gt; Sisyphus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Librarian -.并行.-&gt; Sisyphus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Oracle -.-&gt; Sisyphus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Junior -.-&gt; Sisyphus</span></span></code></pre></div><p><strong>Sisyphus 不写代码</strong>，它负责：</p><ol><li><strong>理解你的真实需求</strong>（不只听表面意思）</li><li><strong>判断谁最擅长这件事</strong>（不是什么都自己干）</li><li><strong>并行委托任务</strong>（让多个专家同时工作）</li><li><strong>验证结果</strong>（绝不轻信&quot;我完成了&quot;）</li></ol><h3 id="为什么叫-sisyphus" tabindex="-1">为什么叫 Sisyphus？ <a class="header-anchor" href="#为什么叫-sisyphus" aria-label="Permalink to &quot;为什么叫 Sisyphus？&quot;">​</a></h3><p>希腊神话中的 Sisyphus 被惩罚永无止境地推石头上山。</p><p>这个系统的设计哲学：<strong>代理必须推完石头（完成所有 TODO）才能停下</strong>。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>这不是惩罚，是质量保证机制。你不会希望 AI 半途而废留下烂摊子。</p></div><h3 id="_32k-thinking-budget" tabindex="-1">32k Thinking Budget <a class="header-anchor" href="#_32k-thinking-budget" aria-label="Permalink to &quot;32k Thinking Budget&quot;">​</a></h3><p>Sisyphus 使用 <strong>Claude Opus 4.5 + 32k thinking budget</strong>。</p><p>这有什么用？</p><table tabindex="0"><thead><tr><th>低预算（无 thinking）</th><th>32k thinking budget</th></tr></thead><tbody><tr><td>直接开始写代码</td><td>先深度分析需求、评估复杂度、拆解任务</td></tr><tr><td>容易遗漏边界情况</td><td>提前发现潜在问题和风险</td></tr><tr><td>写到一半发现不对路</td><td>一开始就选择最优方案</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>强烈推荐给 Sisyphus 配置 <strong>Opus 4.5</strong> 模型。用其他模型体验会显著下降。</p></div><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to &quot;跟我做&quot;">​</a></h2><h3 id="第-1-步-创建一个测试项目" tabindex="-1">第 1 步：创建一个测试项目 <a class="header-anchor" href="#第-1-步-创建一个测试项目" aria-label="Permalink to &quot;第 1 步：创建一个测试项目&quot;">​</a></h3><p><strong>为什么</strong> 你需要一个可运行的项目来观察 Sisyphus 的行为。 mkdir my-app &amp;&amp; cd my-app npm create next-app@latest . -- --typescript --tailwind --eslint --no-src-dir npm install</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**你应该看到**：项目初始化完成，可运行 \`npm run dev\` 启动。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第 2 步：给 Sisyphus 一个复杂任务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 OpenCode 中打开项目，输入：</span></span></code></pre></div><p>添加用户登录功能，包括：</p><ul><li>邮箱密码登录</li><li>JWT token 存储</li><li>受保护的路由</li><li>登录状态检查</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>观察 Sisyphus 的反应。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**你应该看到**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Sisyphus 不会直接开始写代码</span></span>
<span class="line"><span>2. 它先创建 TODO 列表（详细拆解任务）</span></span>
<span class="line"><span>3. 评估代码库模式（检查配置、文件结构）</span></span>
<span class="line"><span>4. 可能会问你几个澄清问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**检查点 ✅**：查看 OpenCode 的 TODO 面板，应该看到类似：</span></span></code></pre></div><p>□ 安装必要的依赖（bcrypt, jsonwebtoken） □ 创建用户模型和类型定义 □ 实现登录 API 端点 □ 创建 JWT 签名和验证工具 □ 添加受保护路由中间件 □ 实现前端登录表单 □ 添加登录状态管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 第 3 步：观察并行委托（关键时刻）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sisyphus 在实现过程中，可能会：</span></span></code></pre></div><p>[Background Task Started]</p><ul><li>Task ID: bg_abc123</li><li>Agent: explore</li><li>Prompt: &quot;Find existing auth patterns in this codebase...&quot;</li></ul><p>[Background Task Started]</p><ul><li>Task ID: bg_def456</li><li>Agent: librarian</li><li>Prompt: &quot;Research JWT best practices for Next.js...&quot;</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**这是关键**：Sisyphus **没有等待**这些任务完成，它继续工作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当你需要结果时，它会调用 \`background_output(task_id=&quot;...&quot;)\` 获取。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**为什么这样快？**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 串行方式（传统） | 并行方式（Sisyphus） |</span></span>
<span class="line"><span>|--- | ---|</span></span>
<span class="line"><span>| 代码库搜索（2 分钟） | ⏳ 代码库搜索（2 分钟） |</span></span>
<span class="line"><span>| 等待... | ⏳ 文档研究（2 分钟，同时进行） |</span></span>
<span class="line"><span>| 文档研究（2 分钟） | 开始实现（总耗时 2 分钟） |</span></span>
<span class="line"><span>| 开始实现（2 分钟） |  |</span></span>
<span class="line"><span>| **总耗时 6 分钟** | **总耗时 4 分钟（省 33%）** |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第 4 步：验证机制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当 Sisyphus 声称&quot;任务完成&quot;时，它会：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 运行 \`lsp_diagnostics\` 检查错误</span></span>
<span class="line"><span>2. 运行 \`npm run build\` 确保构建通过</span></span>
<span class="line"><span>3. 如果有测试，运行测试套件</span></span>
<span class="line"><span>4. 标记 TODO 为 \`completed\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**检查点 ✅**：查看终端输出，应该看到类似：</span></span></code></pre></div><p>✓ Running diagnostics on changed files... ✓ No errors found ✓ Build passed (exit code 0) ✓ All tests passed</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>如果任何验证失败，Sisyphus 会立即修复，从不留下烂摊子。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第 5 步：踩坑提醒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### ❌ 错误做法：打断 Sisyphus 的 TODO 追踪</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你看到 Sisyphus 在做任务，你急着催：</span></span></code></pre></div><p>快点写代码！别做计划了！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**问题**：Sisyphus 会跳过 TODO，直接写代码，但可能遗漏边界情况。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**正确做法**：</span></span></code></pre></div><p>等 Sisyphus 完成规划。如果觉得规划不对，提具体的改进建议： &quot;TODO 第 3 步应该先考虑数据库迁移方案。&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### ❌ 错误做法：不让 Sisyphus 委托</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你在配置中禁用了所有专家代理，只留 Sisyphus。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**问题**：Sisyphus 会尝试自己干所有活，但可能不够专业。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**正确做法**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>保持默认配置，让 Sisyphus 自动委托给专家：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 任务 | Sisyphus 自己做 | 委托给专家 |</span></span>
<span class="line"><span>|--- | --- | ---|</span></span>
<span class="line"><span>| 单文件简单修改 | ✅ 可以 | 不需要 |</span></span>
<span class="line"><span>| 代码库搜索 | ⚠️ 慢 | ✅ Explore（更快） |</span></span>
<span class="line"><span>| 文档研究 | ⚠️ 可能不准确 | ✅ Librarian（更专业） |</span></span>
<span class="line"><span>| 架构决策 | ❌ 不建议 | ✅ Oracle（更权威） |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本课小结</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sisyphus 的威力不在于&quot;更聪明&quot;，而在于：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **职责分离**：主编排器 + 专业团队，不是单打独斗</span></span>
<span class="line"><span>2. **深度思考**：32k thinking budget 确保不遗漏细节</span></span>
<span class="line"><span>3. **并行执行**：后台任务让多个专家同时工作</span></span>
<span class="line"><span>4. **强制验证**：没有证据 = 任务未完成</span></span>
<span class="line"><span>5. **TODO 追踪**：半途而废是不允许的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**核心原则**：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: tip</span></span>
<span class="line"><span>**默认委托**：除非任务极其简单（单文件、已知位置），否则优先考虑委托给专家或使用 Category+Skill。</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 下一课预告</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; 下一课我们学习 **[Ultrawork 模式](../ultrawork-mode/)**，一键激活全部功能，让 Sisyphus 全力以赴完成复杂任务。</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt; 你会学到：</span></span>
<span class="line"><span>&gt; - 如何用 \`ultrawork\` 关键词快速启动任务</span></span>
<span class="line"><span>&gt; - Ultrawork 模式激活了哪些额外能力</span></span>
<span class="line"><span>&gt; - 什么时候该用 Ultrawork，什么时候该用 Prometheus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 附录：源码参考</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;details&gt;</span></span>
<span class="line"><span>&lt;summary&gt;&lt;strong&gt;点击展开查看源码位置&lt;/strong&gt;&lt;/summary&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; 更新时间：2026-01-26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 功能 | 文件路径 | 行号 |</span></span>
<span class="line"><span>|--- | --- | ---|</span></span>
<span class="line"><span>| Sisyphus 代理工厂 | [\`src/agents/sisyphus.ts\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/sisyphus.ts) | 419-450 |</span></span>
<span class="line"><span>| Sisyphus 核心提示词 | [\`src/agents/sisyphus.ts\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/sisyphus.ts) | 17-416 |</span></span>
<span class="line"><span>| 代理元数据和模型配置 | [\`src/agents/AGENTS.md\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/AGENTS.md) | 24-36 |</span></span>
<span class="line"><span>| 工具权限限制 | [\`src/agents/AGENTS.md\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/AGENTS.md) | 44-51 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**关键配置**：</span></span>
<span class="line"><span>- **Thinking Budget**：32k tokens（仅 Anthropic 模型）</span></span>
<span class="line"><span>- **Temperature**：0.1（代码代理固定低温度）</span></span>
<span class="line"><span>- **Max Tokens**：64000</span></span>
<span class="line"><span>- **推荐模型**：anthropic/claude-opus-4-5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**核心工作流程**（来自源码）：</span></span>
<span class="line"><span>- **Phase 0**: Intent Gate（意图分类，第 53-103 行）</span></span>
<span class="line"><span>- **Phase 1**: Codebase Assessment（代码库评估，第 107-130 行）</span></span>
<span class="line"><span>- **Phase 2A**: Exploration &amp; Research（探索研究，第 132-172 行）</span></span>
<span class="line"><span>- **Phase 2B**: Implementation（实现，第 176-263 行）</span></span>
<span class="line"><span>- **Phase 2C**: Failure Recovery（失败恢复，第 266-283 行）</span></span>
<span class="line"><span>- **Phase 3**: Completion（完成，第 286-302 行）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**关键约束**：</span></span>
<span class="line"><span>- **非平凡任务必须创建 TODO**（第 311 行）</span></span>
<span class="line"><span>- **后台任务必须并行**（第 144-162 行）</span></span>
<span class="line"><span>- **必须验证结果**（第 254-262 行）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/details&gt;</span></span></code></pre></div>`,46)])])}const g=n(i,[["render",e]]);export{u as __pageData,g as default};
