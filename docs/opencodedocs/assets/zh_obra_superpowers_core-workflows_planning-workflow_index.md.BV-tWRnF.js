import{_ as n,c as a,o as p,a1 as i}from"./chunks/framework.DILC4Csi.js";const k=JSON.parse('{"title":"计划工作流：Writing Plans 任务分解与实施计划编写完整指南 | Superpowers 教程","description":"学习如何使用 writing-plans 技能编写详细的实施计划，确保无上下文的工程师也能执行。本教程详细介绍 Superpowers 的计划工作流程，包括任务分解原则（2-5 分钟一个）、计划文档结构（完整代码和验证步骤）、两种执行模式（子代理驱动 vs 批量执行）的选择，以及保存计划到 docs/plans/ 并进行批判性审查的完整步骤。","frontmatter":{"title":"计划工作流：Writing Plans 任务分解与实施计划编写完整指南 | Superpowers 教程","sidebarTitle":"编码前先写计划","subtitle":"计划工作流：Writing Plans","description":"学习如何使用 writing-plans 技能编写详细的实施计划，确保无上下文的工程师也能执行。本教程详细介绍 Superpowers 的计划工作流程，包括任务分解原则（2-5 分钟一个）、计划文档结构（完整代码和验证步骤）、两种执行模式（子代理驱动 vs 批量执行）的选择，以及保存计划到 docs/plans/ 并进行批判性审查的完整步骤。","tags":["核心工作流","writing-plans","任务分解","实施计划"],"prerequisite":["core-workflows-design-workflow"],"order":110},"headers":[],"relativePath":"zh/obra/superpowers/core-workflows/planning-workflow/index.md","filePath":"zh/obra/superpowers/core-workflows/planning-workflow/index.md"}'),l={name:"zh/obra/superpowers/core-workflows/planning-workflow/index.md"};function t(e,s,o,c,h,r){return p(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="计划工作流-writing-plans" tabindex="-1">计划工作流：Writing Plans <a class="header-anchor" href="#计划工作流-writing-plans" aria-label="Permalink to &quot;计划工作流：Writing Plans&quot;">​</a></h1><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to &quot;学完你能做什么&quot;">​</a></h2><ul><li>将设计分解为 2-5 分钟一个的可执行小任务</li><li>编写包含完整代码、文件路径、验证步骤的详细计划</li><li>确保计划清晰到&quot;零上下文的工程师也能执行&quot;</li><li>选择合适的执行模式（子代理驱动 vs 批量执行）</li><li>自动生成格式化的计划文档并保存到项目</li></ul><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to &quot;你现在的困境&quot;">​</a></h2><p><strong>AI 代理经常&quot;跳过计划直接写代码&quot;</strong></p><p>你有没有遇到过这种情况？AI 理解了你的需求后，直接开始写代码，但写了一半才发现：</p><ul><li>没有测试框架</li><li>缺少必要的依赖</li><li>测试覆盖不全</li><li>提交信息混乱</li></ul><p>常见问题：</p><ul><li>❌ AI 把大功能当成一个任务，写到一半才发现太复杂</li><li>❌ 计划中只有&quot;实现功能&quot;，没有具体代码或验证步骤</li><li>❌ 任务之间依赖关系混乱，执行顺序出错</li><li>❌ 缺少审查检查点，问题积累到后期才发现</li></ul><p>这些问题的根源：<strong>AI 没有将工作分解为足够小的任务，并记录完整执行细节。</strong></p><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to &quot;什么时候用这一招&quot;">​</a></h2><p>Writing Plans 技能在以下场景自动触发：</p><table tabindex="0"><thead><tr><th>场景</th><th>示例</th></tr></thead><tbody><tr><td><strong>有规格/需求的多步任务</strong></td><td>设计文档已确认，需要实现</td></tr><tr><td><strong>功能开发</strong></td><td>&quot;实现用户认证系统&quot;（设计已完成）</td></tr><tr><td><strong>Bug 修复</strong></td><td>&quot;修复登录超时问题&quot;（根因已确定）</td></tr><tr><td><strong>重构工作</strong></td><td>&quot;重构数据访问层&quot;（目标已明确）</td></tr></tbody></table><p><strong>核心原则</strong>：设计确认后，编码前必须写计划。</p><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to &quot;核心思路&quot;">​</a></h2><p>Writing Plans 工作流的核心假设是：<strong>假设执行计划的工程师对代码库零上下文，而且品味存疑。</strong></p><p>这意味着计划必须包含：</p><ul><li>精确的文件路径（创建哪些文件、修改哪些文件）</li><li>完整的代码（不是&quot;添加验证&quot;这种模糊指令）</li><li>确切的命令和预期输出</li><li>相关文档引用（需要查阅的现有文档）</li><li>如何测试的详细步骤</li></ul><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[设计已确认] --&gt; B[分解任务]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[编写计划]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[保存文档]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E{执行模式选择}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[子代理驱动&lt;br/&gt;本会话]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; G[批量执行&lt;br/&gt;独立会话]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style A fill:#e3f2fd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style B fill:#fff3e0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style C fill:#e8f5e9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style D fill:#f3e5f5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style E fill:#ffe0b2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style F fill:#c8e6c9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style G fill:#c8e6c9</span></span></code></pre></div><h3 id="任务粒度原则" tabindex="-1">任务粒度原则 <a class="header-anchor" href="#任务粒度原则" aria-label="Permalink to &quot;任务粒度原则&quot;">​</a></h3><p><strong>每个任务 2-5 分钟完成</strong>，一个动作一个步骤：</p><table tabindex="0"><thead><tr><th>✅ 正确示例</th><th>❌ 错误示例</th></tr></thead><tbody><tr><td>&quot;写一个失败的测试&quot;</td><td>&quot;实现用户认证&quot;</td></tr><tr><td>&quot;运行测试验证失败&quot;</td><td>&quot;添加测试&quot;</td></tr><tr><td>&quot;写最小实现让测试通过&quot;</td><td>&quot;修复 bug&quot;</td></tr><tr><td>&quot;运行测试验证通过&quot;</td><td>&quot;更新文档&quot;</td></tr><tr><td>&quot;提交代码&quot;</td><td></td></tr></tbody></table><h3 id="计划文档结构" tabindex="-1">计划文档结构 <a class="header-anchor" href="#计划文档结构" aria-label="Permalink to &quot;计划文档结构&quot;">​</a></h3><p>每个计划必须包含以下头部信息：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">功能名称</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">] 实施计划</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; **给 AI 的提示：必需子技能：使用 superpowers:executing-plans 执行此计划的任务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**目标：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">一句话描述此计划构建的内容</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**架构：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [2-3 句话描述实现方法]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术栈：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">关键技术/库</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h3 id="执行模式选择" tabindex="-1">执行模式选择 <a class="header-anchor" href="#执行模式选择" aria-label="Permalink to &quot;执行模式选择&quot;">​</a></h3><p>计划完成后，AI 会提供两种执行方式：</p><table tabindex="0"><thead><tr><th>模式</th><th>描述</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>子代理驱动</strong></td><td>本会话执行，每个任务派发新子代理，任务间快速迭代</td><td>需要频繁沟通反馈</td></tr><tr><td><strong>批量执行</strong></td><td>独立会话执行，按批次完成任务，批次间报告审查</td><td>任务相对独立，可以批量处理</td></tr></tbody></table><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to &quot;跟我做&quot;">​</a></h2><h3 id="第-1-步-触发计划编写" tabindex="-1">第 1 步：触发计划编写 <a class="header-anchor" href="#第-1-步-触发计划编写" aria-label="Permalink to &quot;第 1 步：触发计划编写&quot;">​</a></h3><p><strong>为什么</strong> 设计确认后，让 AI 自动触发 writing-plans 工作流，编写详细实施计划。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户输入：</span></span>
<span class="line"><span>设计文档已经确认好了，我们开始实施吧。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 回复：</span></span>
<span class="line"><span>好的，我来编写实施计划。我正在使用 writing-plans 技能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（AI 读取设计文档）</span></span>
<span class="line"><span>（AI 分析实现步骤）</span></span>
<span class="line"><span>（AI 分解任务）</span></span></code></pre></div><p><strong>你应该看到</strong>：AI 宣布使用 writing-plans 技能，开始编写计划。</p><h3 id="第-2-步-分解任务" tabindex="-1">第 2 步：分解任务 <a class="header-anchor" href="#第-2-步-分解任务" aria-label="Permalink to &quot;第 2 步：分解任务&quot;">​</a></h3><p><strong>为什么</strong> 将大功能分解为 2-5 分钟的小任务，确保每个任务可独立完成和验证。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AI 回复：</span></span>
<span class="line"><span>我已将功能分解为 6 个任务：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**任务 1：Hook 安装脚本**（3 分钟）</span></span>
<span class="line"><span>- 创建 hook 安装脚本</span></span>
<span class="line"><span>- 添加权限设置</span></span>
<span class="line"><span>- 编写测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**任务 2：恢复模式**（4 分钟）</span></span>
<span class="line"><span>- 实现 verify 模式</span></span>
<span class="line"><span>- 实现 repair 模式</span></span>
<span class="line"><span>- 添加进度报告</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**任务 3：错误处理**（3 分钟）</span></span>
<span class="line"><span>- 添加异常捕获</span></span>
<span class="line"><span>- 实现友好错误消息</span></span>
<span class="line"><span>- 测试错误场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所有任务遵循 TDD 流程，每个任务包含完整代码和验证步骤。</span></span></code></pre></div><p><strong>你应该看到</strong>：</p><ol><li>每个任务明确时间估算（2-5 分钟）</li><li>每个任务是一个具体的动作（不是抽象功能）</li><li>任务之间的依赖关系清晰</li></ol><h3 id="第-3-步-编写任务详情" tabindex="-1">第 3 步：编写任务详情 <a class="header-anchor" href="#第-3-步-编写任务详情" aria-label="Permalink to &quot;第 3 步：编写任务详情&quot;">​</a></h3><p><strong>为什么</strong> 零上下文工程师需要精确的信息：文件路径、完整代码、验证步骤、命令输出。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AI 回复：</span></span>
<span class="line"><span>现在我编写每个任务的详细步骤。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 任务 1：Hook 安装脚本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**文件：**</span></span>
<span class="line"><span>- 创建：\`src/hooks/install-hook.js\`</span></span>
<span class="line"><span>- 修改：\`package.json:45-48\`（添加启动脚本）</span></span>
<span class="line"><span>- 测试：\`tests/hooks/test-install-hook.js\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**步骤 1：编写失败的测试**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>describe(&#39;install-hook&#39;, () =&gt; {</span></span>
<span class="line"><span>  it(&#39;should create hook directory if not exists&#39;, async () =&gt; {</span></span>
<span class="line"><span>    await installHook();</span></span>
<span class="line"><span>    expect(fs.existsSync(&#39;.superpowers/hooks&#39;)).toBe(true);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><strong>步骤 2：运行测试验证失败</strong></p><p>运行：<code>npm test -- tests/hooks/test-install-hook.js</code> 预期：FAIL，报错 &quot;install-hook is not defined&quot;</p><p><strong>步骤 3：编写最小实现</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> installHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hooksDir</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.superpowers/hooks&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hooksDir, { recursive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>步骤 4：运行测试验证通过</strong></p><p>运行：<code>npm test -- tests/hooks/test-install-hook.js</code> 预期：PASS</p><p><strong>步骤 5：提交</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/hooks/install-hook.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/hooks/test-install-hook.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: add hook installation script&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**你应该看到**：</span></span>
<span class="line"><span>1. 每个任务列出创建/修改/测试的精确文件路径</span></span>
<span class="line"><span>2. 每个步骤有完整的代码（不是&quot;添加验证&quot;这种描述）</span></span>
<span class="line"><span>3. 每个步骤有确切的命令和预期输出</span></span>
<span class="line"><span>4. TDD 循环：RED → GREEN → COMMIT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第 4 步：保存计划文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**为什么**</span></span>
<span class="line"><span>将计划保存为文档，便于执行和审查，同时作为项目知识库的一部分。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**操作示例**</span></span></code></pre></div><p>AI 回复： 计划已编写完成，正在保存到 docs/plans/。</p><p>（AI 写入 docs/plans/2026-02-01-hook-recovery-system.md）</p><p>AI 继续说： 计划已保存：docs/plans/2026-02-01-hook-recovery-system.md</p><p>我现在提交这个计划文档。</p><p>（AI 执行 git commit）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**你应该看到**：</span></span>
<span class="line"><span>1. 计划文档保存到 \`docs/plans/\` 目录</span></span>
<span class="line"><span>2. 文件名格式：\`YYYY-MM-DD-&lt;feature-name&gt;.md\`</span></span>
<span class="line"><span>3. 计划文档已提交到 git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 第 5 步：选择执行模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**为什么**</span></span>
<span class="line"><span>不同的执行模式适合不同的场景，选择正确的模式可以提高效率。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**操作示例**</span></span></code></pre></div><p>AI 回复： 计划完成并已保存到 <code>docs/plans/2026-02-01-hook-recovery-system.md</code>。</p><p>有两种执行选项：</p><p><strong>1. 子代理驱动（本会话）</strong></p><ul><li>我为每个任务派发新的子代理</li><li>任务之间进行审查</li><li>快速迭代，频繁反馈</li></ul><p><strong>2. 批量执行（独立会话）</strong></p><ul><li>在新会话中打开 worktree</li><li>按 3 个任务一批执行</li><li>批次之间进行审查</li></ul><p>你希望使用哪种方式？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**你应该看到**：AI 明确提供两种执行方式，并说明各自的优缺点。</span></span></code></pre></div><p>用户输入： 我想用子代理驱动的方式，因为我们可能需要频繁调整。</p><p>AI 回复： 好的，我将使用子代理驱动开发来执行这个计划。</p><p>我正在使用 subagent-driven-development 技能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**或者**</span></span></code></pre></div><p>用户输入： 任务相对独立，我用批量执行吧，我想在另一个终端并行处理其他事情。</p><p>AI 回复： 好的，请在 worktree 中打开新的会话，并使用 /write-plan 命令加载这个计划。</p><p>新会话会使用 executing-plans 技能，按批次执行任务并在批次之间报告。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**你应该看到**：</span></span>
<span class="line"><span>- 子代理驱动：AI 在当前会话继续执行</span></span>
<span class="line"><span>- 批量执行：AI 引导你打开新会话，在 worktree 中执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 检查点 ✅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**验证 writing-plans 工作流是否正常**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [ ] AI 在设计确认后自动编写计划</span></span>
<span class="line"><span>- [ ] 任务粒度为 2-5 分钟一个</span></span>
<span class="line"><span>- [ ] 每个任务包含精确文件路径</span></span>
<span class="line"><span>- [ ] 每个步骤有完整代码（不是模糊指令）</span></span>
<span class="line"><span>- [ ] 每个步骤有确切命令和预期输出</span></span>
<span class="line"><span>- [ ] TDD 循环：写测试 → 验证失败 → 写实现 → 验证通过 → 提交</span></span>
<span class="line"><span>- [ ] 计划文档保存到 \`docs/plans/\` 目录</span></span>
<span class="line"><span>- [ ] 计划文档已提交到 git</span></span>
<span class="line"><span>- [ ] AI 提供两种执行方式供选择</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果以上任何一项不符合预期，可能是技能加载问题，请检查[安装指南](../../start/installation/)或[故障排除](../../faq/troubleshooting/)。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 踩坑提醒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ 踩坑 1：任务太大，无法 2-5 分钟完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**症状**：计划中有&quot;实现用户认证&quot;、&quot;重构数据层&quot;这样的任务。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原因**：AI 未遵循&quot;任务粒度&quot;原则。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**解决方法**：</span></span>
<span class="line"><span>- 提醒 AI：&quot;每个任务应该在 2-5 分钟内完成&quot;</span></span>
<span class="line"><span>- 如果任务太大，要求 AI 继续分解：&quot;请将任务 1 分解为更小的步骤&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ 踩坑 2：计划中只有&quot;做 X&quot;，没有具体代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**症状**：步骤内容是&quot;添加验证逻辑&quot;、&quot;编写测试&quot;，但没有代码示例。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原因**：AI 未遵循&quot;完整代码&quot;原则。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**解决方法**：</span></span>
<span class="line"><span>- 提醒 AI：&quot;请提供完整的代码示例&quot;</span></span>
<span class="line"><span>- 强调&quot;假设工程师零上下文，需要确切的实现&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ 踩坑 3：缺少文件路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**症状**：任务中没有明确说明要创建或修改哪些文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原因**：AI 未遵循&quot;精确文件路径&quot;原则。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**解决方法**：</span></span>
<span class="line"><span>- 要求 AI 在每个任务中列出&quot;文件&quot;部分</span></span>
<span class="line"><span>- 格式：\`创建：\`、\`修改：path:line-range\`、\`测试：\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ 踩坑 4：缺少验证步骤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**症状**：代码写完后没有运行测试或验证的步骤。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原因**：AI 跳过了 TDD 验证。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**解决方法**：</span></span>
<span class="line"><span>- 提醒 AI：&quot;每个任务必须包含验证步骤&quot;</span></span>
<span class="line"><span>- 确保&quot;步骤 2：运行测试验证失败&quot;和&quot;步骤 4：运行测试验证通过&quot;都存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ 踩坑 5：未提交代码就进入下一个任务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**症状**：测试通过后直接写下一个任务的代码，没有 commit。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原因**：AI 未遵循&quot;频繁提交&quot;原则。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**解决方法**：</span></span>
<span class="line"><span>- 确保 TDD 循环的最后一步是&quot;步骤 5：提交&quot;</span></span>
<span class="line"><span>- 提交信息应该明确：\`feat: add specific feature\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ 踩坑 6：选择错误的执行模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**症状**：用批量执行处理需要频繁反馈的任务，导致返工；或用子代理驱动处理独立任务，效率低。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原因**：未根据任务特点选择合适的执行模式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**解决方法**：</span></span>
<span class="line"><span>- **需要频繁反馈** → 子代理驱动（任务间快速审查）</span></span>
<span class="line"><span>- **任务相对独立** → 批量执行（批次间报告，可以并行工作）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本课小结</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Writing Plans 是 Superpowers 核心工作流的第 3 步，它确保：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **零上下文假设**：假设工程师对代码库零上下文，记录所有必要信息</span></span>
<span class="line"><span>2. **任务粒度**：每个任务 2-5 分钟，一个动作一个步骤</span></span>
<span class="line"><span>3. **完整代码**：不使用&quot;添加验证&quot;这种模糊指令，提供确切实现</span></span>
<span class="line"><span>4. **TDD 循环**：写测试 → 验证失败 → 写实现 → 验证通过 → 提交</span></span>
<span class="line"><span>5. **计划文档化**：保存到 \`docs/plans/\`，便于执行和审查</span></span>
<span class="line"><span>6. **执行模式选择**：提供子代理驱动和批量执行两种方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**记住**：writing-plans 不是建议，而是强制工作流。AI 会在设计确认后自动触发这个技能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 下一课预告</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; 下一课我们学习 **[测试驱动开发：TDD 铁律](../tdd-workflow/)**。</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt; 计划执行过程中，你会学到：</span></span>
<span class="line"><span>&gt; - 如何遵循 RED-GREEN-REFACTOR 循环</span></span>
<span class="line"><span>&gt; - 纠正常见的 TDD 误解（如&quot;先写实现再写测试&quot;）</span></span>
<span class="line"><span>&gt; - 为什么无测试不写代码是铁律</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 附录：源码参考</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;details&gt;</span></span>
<span class="line"><span>&lt;summary&gt;&lt;strong&gt;点击展开查看源码位置&lt;/strong&gt;&lt;/summary&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; 更新时间：2026-02-01</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 功能        | 文件路径                                                                                    | 行号    |</span></span>
<span class="line"><span>| ----------- | ------------------------------------------------------------------------------------------- | ------- |</span></span>
<span class="line"><span>| Writing Plans 技能定义 | [\`skills/writing-plans/SKILL.md\`](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md) | 1-117   |</span></span>
<span class="line"><span>| /write-plan 命令定义 | [\`commands/write-plan.md\`](https://github.com/obra/superpowers/blob/main/commands/write-plan.md) | 1-7     |</span></span>
<span class="line"><span>| Executing Plans 技能定义 | [\`skills/executing-plans/SKILL.md\`](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md) | 1-85    |</span></span>
<span class="line"><span>| 子代理驱动开发技能定义 | [\`skills/subagent-driven-development/SKILL.md\`](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md) | 1-243   |</span></span>
<span class="line"><span>| 工作流概述 | [\`README.md\`](https://github.com/obra/superpowers/blob/main/README.md) | 80-96   |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**关键原则**：</span></span>
<span class="line"><span>- 零上下文假设（Zero context assumption）- 假设工程师对代码库零上下文</span></span>
<span class="line"><span>- 任务粒度（Bite-sized tasks）- 每个任务 2-5 分钟完成</span></span>
<span class="line"><span>- 完整代码（Complete code）- 提供确切实现，不是模糊指令</span></span>
<span class="line"><span>- TDD 循环（RED-GREEN-REFACTOR）- 写测试 → 验证失败 → 写实现 → 验证通过 → 提交</span></span>
<span class="line"><span>- DRY（Don&#39;t Repeat Yourself）- 避免重复代码</span></span>
<span class="line"><span>- YAGNI（You Aren&#39;t Gonna Need It）- 只做当前需要的功能</span></span>
<span class="line"><span>- 频繁提交（Frequent commits）- 每个任务完成后提交</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**关键流程**：</span></span>
<span class="line"><span>- 编写计划：读取设计文档 → 分解任务（2-5 分钟/任务）→ 编写详细步骤（完整代码 + 验证）→ 保存到 \`docs/plans/YYYY-MM-DD-&lt;feature-name&gt;.md\` → 提交到 git</span></span>
<span class="line"><span>- 执行模式选择：子代理驱动（本会话，快速迭代） vs 批量执行（独立会话，批次报告）</span></span>
<span class="line"><span>- 子代理驱动：派发实现子代理 → 规格符合性审查 → 代码质量审查 → 下一任务</span></span>
<span class="line"><span>- 批量执行：批判性审查计划 → 执行第一批（默认 3 个任务）→ 报告 → 下一批次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**执行模式对比**：</span></span>
<span class="line"><span>| 维度 | 子代理驱动 | 批量执行 |</span></span>
<span class="line"><span>| ---- | ---------- | -------- |</span></span>
<span class="line"><span>| 会话 | 本会话（无上下文切换） | 独立会话（新 worktree） |</span></span>
<span class="line"><span>| 代理 | 每个任务新子代理 | 同一代理执行一批任务 |</span></span>
<span class="line"><span>| 审查 | 每个任务后自动审查 | 批次之间报告，等待人工审查 |</span></span>
<span class="line"><span>| 迭代 | 快速（任务间无需人工干预） | 慢（批次间需人工反馈） |</span></span>
<span class="line"><span>| 适用场景 | 需要频繁调整 | 任务相对独立，可并行 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/details&gt;</span></span></code></pre></div>`,75)])])}const g=n(l,[["render",t]]);export{k as __pageData,g as default};
