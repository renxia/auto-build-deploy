import{_ as a,c as n,o as p,a1 as l}from"./chunks/framework.DILC4Csi.js";const g=JSON.parse('{"title":"设计工作流：Brainstorming 需求澄清与设计探索 | Superpowers 教程","description":"学习如何在编码前使用 brainstorming 技能进行需求澄清和设计探索。本教程详细介绍 Superpowers 的设计工作流程，包括理解项目上下文、一次一个问题地细化需求、探索 2-3 种实现方案及权衡、分段验证设计文档的完整步骤，以及自动生成格式化设计文档的方法，确保 AI 代理准确理解你的需求并避免编码返工。","frontmatter":{"title":"设计工作流：Brainstorming 需求澄清与设计探索 | Superpowers 教程","sidebarTitle":"编码前先设计","subtitle":"设计工作流：Brainstorming","description":"学习如何在编码前使用 brainstorming 技能进行需求澄清和设计探索。本教程详细介绍 Superpowers 的设计工作流程，包括理解项目上下文、一次一个问题地细化需求、探索 2-3 种实现方案及权衡、分段验证设计文档的完整步骤，以及自动生成格式化设计文档的方法，确保 AI 代理准确理解你的需求并避免编码返工。","tags":["核心工作流","brainstorming","设计","需求澄清"],"prerequisite":["start-using-skills"],"order":100},"headers":[],"relativePath":"zh/obra/superpowers/core-workflows/design-workflow/index.md","filePath":"zh/obra/superpowers/core-workflows/design-workflow/index.md"}'),i={name:"zh/obra/superpowers/core-workflows/design-workflow/index.md"};function t(e,s,o,r,c,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="设计工作流-brainstorming" tabindex="-1">设计工作流：Brainstorming <a class="header-anchor" href="#设计工作流-brainstorming" aria-label="Permalink to &quot;设计工作流：Brainstorming&quot;">​</a></h1><h2 id="学完你能做什么" tabindex="-1">学完你能做什么 <a class="header-anchor" href="#学完你能做什么" aria-label="Permalink to &quot;学完你能做什么&quot;">​</a></h2><ul><li>在编码前与 AI 代理进行结构化的设计对话</li><li>通过一次一个问题的方式，让 AI 准确理解你的需求</li><li>评估 2-3 种不同实现方案的权衡</li><li>分段审查设计文档，确保每个部分都符合预期</li><li>自动生成格式化的设计文档并保存到项目</li></ul><h2 id="你现在的困境" tabindex="-1">你现在的困境 <a class="header-anchor" href="#你现在的困境" aria-label="Permalink to &quot;你现在的困境&quot;">​</a></h2><p><strong>AI 代理经常&quot;想当然&quot;</strong></p><p>你有没有遇到过这种情况？你对 AI 说&quot;帮我加个用户登录功能&quot;，它马上就开始写代码，但最后实现的东西跟你想要的不一样。</p><p>常见问题：</p><ul><li>❌ AI 跳过了需求澄清，直接写代码</li><li>❌ 没有讨论替代方案，只给出了&quot;最常见&quot;的实现</li><li>❌ 实现后发现遗漏了关键需求</li><li>❌ 代码写了一半才发现思路不对</li></ul><p>这些问题的根源：<strong>AI 在编码前没有充分探索和验证设计</strong>。</p><h2 id="什么时候用这一招" tabindex="-1">什么时候用这一招 <a class="header-anchor" href="#什么时候用这一招" aria-label="Permalink to &quot;什么时候用这一招&quot;">​</a></h2><p>Brainstorming 技能会在以下场景自动触发：</p><table tabindex="0"><thead><tr><th>场景</th><th>示例</th></tr></thead><tbody><tr><td><strong>创建新功能</strong></td><td>&quot;帮我加个用户评论功能&quot;</td></tr><tr><td><strong>构建组件</strong></td><td>&quot;我需要一个可复用的表格组件&quot;</td></tr><tr><td><strong>添加功能</strong></td><td>&quot;在现有页面上加搜索过滤&quot;</td></tr><tr><td><strong>修改行为</strong></td><td>&quot;改变这个按钮的交互逻辑&quot;</td></tr></tbody></table><p><strong>核心原则</strong>：任何创意工作开始前，必须先 brainstorming。</p><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to &quot;核心思路&quot;">​</a></h2><p>Brainstorming 工作流分为三个阶段：</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[理解想法] --&gt; B[探索方案]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[展示设计]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[保存文档]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style A fill:#e3f2fd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style B fill:#fff3e0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style C fill:#e8f5e9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style D fill:#f3e5f5</span></span></code></pre></div><h3 id="阶段-1-理解想法" tabindex="-1">阶段 1：理解想法 <a class="header-anchor" href="#阶段-1-理解想法" aria-label="Permalink to &quot;阶段 1：理解想法&quot;">​</a></h3><p>AI 会先检查当前项目状态（文件、文档、最近提交），然后<strong>一次一个问题</strong>地询问，细化你的想法。</p><p><strong>提问原则</strong>：</p><ul><li>✅ 一次一个问题（避免信息过载）</li><li>✅ 多选题优先（更容易回答）</li><li>✅ 关注：目的、约束、成功标准</li></ul><h3 id="阶段-2-探索方案" tabindex="-1">阶段 2：探索方案 <a class="header-anchor" href="#阶段-2-探索方案" aria-label="Permalink to &quot;阶段 2：探索方案&quot;">​</a></h3><p>AI 会提出 2-3 种不同的实现方案，并给出权衡分析。</p><p><strong>呈现方式</strong>：</p><ul><li>先推荐最合适的方案，并说明理由</li><li>列出其他方案的优缺点</li><li>保持对话式风格，不是技术报告</li></ul><h3 id="阶段-3-展示设计" tabindex="-1">阶段 3：展示设计 <a class="header-anchor" href="#阶段-3-展示设计" aria-label="Permalink to &quot;阶段 3：展示设计&quot;">​</a></h3><p>一旦 AI 认为理解了你的需求，就会分段展示设计：</p><p><strong>分段规则</strong>：</p><ul><li>每段 200-300 词（避免信息过载）</li><li>每段后询问&quot;这部分看起来对吗？&quot;</li><li>涵盖：架构、组件、数据流、错误处理、测试</li><li>如果有不合理的地方，可以随时回退澄清</li></ul><h3 id="阶段-4-保存文档" tabindex="-1">阶段 4：保存文档 <a class="header-anchor" href="#阶段-4-保存文档" aria-label="Permalink to &quot;阶段 4：保存文档&quot;">​</a></h3><p>设计确认后，AI 会：</p><ol><li>将设计写入 <code>docs/plans/YYYY-MM-DD-&lt;topic&gt;-design.md</code></li><li>使用清晰的写作风格（如果有 <code>elements-of-style</code> 技能）</li><li>提交设计文档到 git</li></ol><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to &quot;跟我做&quot;">​</a></h2><h3 id="第-1-步-提出想法" tabindex="-1">第 1 步：提出想法 <a class="header-anchor" href="#第-1-步-提出想法" aria-label="Permalink to &quot;第 1 步：提出想法&quot;">​</a></h3><p><strong>为什么</strong> 让 AI 知道你想做什么，触发 brainstorming 工作流。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户输入：</span></span>
<span class="line"><span>我想给这个项目加一个用户认证功能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 回复：</span></span>
<span class="line"><span>让我先了解一下项目现状...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（AI 检查项目文件、现有代码、文档）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 继续说：</span></span>
<span class="line"><span>好的，我看到这是一个 Web 应用。让我问几个问题来细化需求：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>第一个问题：你期望的用户认证方式是什么？</span></span>
<span class="line"><span>A. 邮箱+密码登录</span></span>
<span class="line"><span>B. 第三方登录（Google/GitHub）</span></span>
<span class="line"><span>C. 手机号验证码登录</span></span></code></pre></div><p><strong>你应该看到</strong>：AI 先检查项目上下文，然后提出第一个问题。</p><h3 id="第-2-步-回答问题-循环" tabindex="-1">第 2 步：回答问题（循环） <a class="header-anchor" href="#第-2-步-回答问题-循环" aria-label="Permalink to &quot;第 2 步：回答问题（循环）&quot;">​</a></h3><p><strong>为什么</strong> 通过多次迭代，让 AI 精准理解你的需求。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户输入：</span></span>
<span class="line"><span>我选择 A，但同时也想支持 B。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 回复：</span></span>
<span class="line"><span>明白了，主认证方式是邮箱+密码，同时支持 Google 和 GitHub 第三方登录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>下一个问题：你需要支持&quot;记住我&quot;功能吗？</span></span>
<span class="line"><span>A. 是，用户可以保持登录状态 7 天</span></span>
<span class="line"><span>B. 否，每次关闭浏览器都需要重新登录</span></span></code></pre></div><p><strong>你应该看到</strong>：AI 根据你的回答，继续提出下一个细化问题。</p><h3 id="第-3-步-探索方案" tabindex="-1">第 3 步：探索方案 <a class="header-anchor" href="#第-3-步-探索方案" aria-label="Permalink to &quot;第 3 步：探索方案&quot;">​</a></h3><p><strong>为什么</strong> 在 AI 完全理解需求后，它会提出不同的实现方案供你选择。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AI 回复：</span></span>
<span class="line"><span>很好，我已经理解了你的需求。让我分析几种实现方案：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**方案 1：自建认证系统**（推荐）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优点：</span></span>
<span class="line"><span>- 完全控制数据和行为</span></span>
<span class="line"><span>- 无外部依赖</span></span>
<span class="line"><span>- 未来可以灵活扩展</span></span>
<span class="line"><span></span></span>
<span class="line"><span>缺点：</span></span>
<span class="line"><span>- 需要处理密码存储、令牌管理、安全细节</span></span>
<span class="line"><span>- 开发工作量较大</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**方案 2：使用 Auth0 类服务**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>优点：</span></span>
<span class="line"><span>- 开箱即用，快速实现</span></span>
<span class="line"><span>- 自动处理安全细节</span></span>
<span class="line"><span>- 支持多种第三方登录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>缺点：</span></span>
<span class="line"><span>- 需要付费（免费额度有限）</span></span>
<span class="line"><span>- 数据托管在第三方</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我推荐方案 1，因为你的项目已经有自己的数据库架构，</span></span>
<span class="line"><span>而且长期来看自建系统更灵活。你觉得呢？</span></span></code></pre></div><p><strong>你应该看到</strong>：AI 推荐 2-3 种方案，给出权衡分析，并表达倾向性建议。</p><h3 id="第-4-步-分段审查设计" tabindex="-1">第 4 步：分段审查设计 <a class="header-anchor" href="#第-4-步-分段审查设计" aria-label="Permalink to &quot;第 4 步：分段审查设计&quot;">​</a></h3><p><strong>为什么</strong> 分段展示设计让你可以逐步验证，避免信息过载。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户输入：</span></span>
<span class="line"><span>好的，那就用方案 1。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 回复：</span></span>
<span class="line"><span>好的，我来展示详细设计。我分成几个部分讲。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**第 1 部分：架构设计**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>认证系统将采用 JWT（JSON Web Token）架构。前端登录成功后，</span></span>
<span class="line"><span>后端返回包含用户信息和签名的 JWT，前端存储在 localStorage 中。</span></span>
<span class="line"><span>后续请求在 Authorization header 中附带此 token，后端验证签名后提取用户信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Token 设置为 1 小时过期，刷新令牌设置为 7 天。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这部分看起来对吗？</span></span></code></pre></div><p><strong>你应该看到</strong>：AI 展示设计的第一部分（架构），并询问是否正确。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户输入：</span></span>
<span class="line"><span>这部分可以。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 回复：</span></span>
<span class="line"><span>**第 2 部分：数据库设计**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要以下表：</span></span>
<span class="line"><span>- users：存储用户基本信息（id, email, password_hash, created_at）</span></span>
<span class="line"><span>- refresh_tokens：存储刷新令牌（id, user_id, token_hash, expires_at）</span></span>
<span class="line"><span>- social_accounts：存储第三方账号关联（id, user_id, provider, provider_id）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>密码使用 bcrypt 加密，cost factor 为 10。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这部分看起来对吗？</span></span></code></pre></div><p><strong>你应该看到</strong>：AI 继续展示设计的下一部分（数据库），每部分后都询问是否正确。</p><h3 id="第-5-步-保存设计文档" tabindex="-1">第 5 步：保存设计文档 <a class="header-anchor" href="#第-5-步-保存设计文档" aria-label="Permalink to &quot;第 5 步：保存设计文档&quot;">​</a></h3><p><strong>为什么</strong> 将确认的设计保存为文档，便于后续实施和审查。</p><p><strong>操作示例</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户输入：</span></span>
<span class="line"><span>看起来都没问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 回复：</span></span>
<span class="line"><span>太好了！我现在把设计文档保存下来。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（AI 写入 docs/plans/2026-02-01-user-authentication-design.md）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 继续说：</span></span>
<span class="line"><span>设计文档已保存：docs/plans/2026-02-01-user-authentication-design.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我已经把设计文档提交到 git。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>准备好设置实施环境了吗？</span></span></code></pre></div><p><strong>你应该看到</strong>：</p><ol><li>设计文档已保存到 <code>docs/plans/</code> 目录</li><li>文件已提交到 git</li><li>AI 询问是否进入下一阶段（设置环境）</li></ol><h2 id="检查点-✅" tabindex="-1">检查点 ✅ <a class="header-anchor" href="#检查点-✅" aria-label="Permalink to &quot;检查点 ✅&quot;">​</a></h2><p><strong>验证 brainstorming 工作流是否正常</strong></p><ul><li>[ ] AI 在编码前主动询问问题</li><li>[ ] 一次只问一个问题</li><li>[ ] 提供多选题选项（适用时）</li><li>[ ] 提出 2-3 种实现方案及权衡</li><li>[ ] 分段展示设计，每段后询问确认</li><li>[ ] 设计文档保存到 <code>docs/plans/</code> 目录</li><li>[ ] 设计文档已提交到 git</li></ul><p>如果以上任何一项不符合预期，可能是技能加载问题，请检查<a href="./../../start/installation/">安装指南</a>或<a href="./../../faq/troubleshooting/">故障排除</a>。</p><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to &quot;踩坑提醒&quot;">​</a></h2><h3 id="❌-踩坑-1-跳过问题直接写代码" tabindex="-1">❌ 踩坑 1：跳过问题直接写代码 <a class="header-anchor" href="#❌-踩坑-1-跳过问题直接写代码" aria-label="Permalink to &quot;❌ 踩坑 1：跳过问题直接写代码&quot;">​</a></h3><p><strong>症状</strong>：你刚提了需求，AI 马上开始写代码，没有提问。</p><p><strong>原因</strong>：brainstorming 技能未正确加载或触发。</p><p><strong>解决方法</strong>：</p><ol><li>检查技能是否安装：查看 <code>skills/brainstorming/SKILL.md</code> 是否存在</li><li>确认技能路径正确：不同平台的技能发现机制不同</li><li>手动触发：使用 <code>/brainstorm</code> 命令强制调用</li></ol><h3 id="❌-踩坑-2-一次问太多问题" tabindex="-1">❌ 踩坑 2：一次问太多问题 <a class="header-anchor" href="#❌-踩坑-2-一次问太多问题" aria-label="Permalink to &quot;❌ 踩坑 2：一次问太多问题&quot;">​</a></h3><p><strong>症状</strong>：AI 在一个消息中问了 3-5 个问题，信息过载。</p><p><strong>原因</strong>：AI 未遵循&quot;一次一个问题&quot;原则。</p><p><strong>解决方法</strong>：</p><ul><li>提醒 AI：&quot;一次只问一个问题&quot;</li><li>如果问题太多，先回答前几个，让 AI 继续</li></ul><h3 id="❌-踩坑-3-设计文档未保存" tabindex="-1">❌ 踩坑 3：设计文档未保存 <a class="header-anchor" href="#❌-踩坑-3-设计文档未保存" aria-label="Permalink to &quot;❌ 踩坑 3：设计文档未保存&quot;">​</a></h3><p><strong>症状</strong>：设计确认后，没有生成 <code>docs/plans/</code> 下的文件。</p><p><strong>原因</strong>：AI 跳过了&quot;保存文档&quot;步骤。</p><p><strong>解决方法</strong>：</p><ul><li>明确要求：&quot;请把设计文档保存到 docs/plans/ 目录&quot;</li><li>检查 <code>docs/plans/</code> 目录是否存在，不存在则手动创建</li></ul><h3 id="❌-踩坑-4-设计过于复杂" tabindex="-1">❌ 踩坑 4：设计过于复杂 <a class="header-anchor" href="#❌-踩坑-4-设计过于复杂" aria-label="Permalink to &quot;❌ 踩坑 4：设计过于复杂&quot;">​</a></h3><p><strong>症状</strong>：设计文档中包含了很多&quot;未来可能需要&quot;的功能。</p><p><strong>原因</strong>：AI 未遵循 YAGNI 原则。</p><p><strong>解决方法</strong>：</p><ul><li>提醒 AI：&quot;保持简单，只做当前需要的功能&quot;</li><li>在 brainstorming 过程中明确说明&quot;暂不需要&quot;</li></ul><h2 id="本课小结" tabindex="-1">本课小结 <a class="header-anchor" href="#本课小结" aria-label="Permalink to &quot;本课小结&quot;">​</a></h2><p>Brainstorming 是 Superpowers 的核心工作流之一，它确保：</p><ol><li><strong>编码前先设计</strong>：不跳过需求澄清和方案探索</li><li><strong>一次一个问题</strong>：避免信息过载，逐步细化需求</li><li><strong>探索替代方案</strong>：提出 2-3 种方案及权衡，做出明智选择</li><li><strong>分段验证</strong>：分 200-300 词的小段展示设计，逐步确认</li><li><strong>文档化</strong>：将确认的设计保存为文档，便于后续实施</li></ol><p><strong>记住</strong>：brainstorming 不是建议，而是强制工作流。AI 会在任何创意工作开始前自动触发这个技能。</p><h2 id="下一课预告" tabindex="-1">下一课预告 <a class="header-anchor" href="#下一课预告" aria-label="Permalink to &quot;下一课预告&quot;">​</a></h2><blockquote><p>下一课我们学习 <strong><a href="./../planning-workflow/">计划工作流：Writing Plans</a></strong>。</p><p>设计确认后，你会学到：</p><ul><li>如何将设计分解为可执行的小任务</li><li>每个任务如何包含完整代码和验证步骤</li><li>确保计划清晰到&quot;无上下文的工程师也能执行&quot;</li></ul></blockquote><hr><h2 id="附录-源码参考" tabindex="-1">附录：源码参考 <a class="header-anchor" href="#附录-源码参考" aria-label="Permalink to &quot;附录：源码参考&quot;">​</a></h2><details><summary><strong>点击展开查看源码位置</strong></summary><blockquote><p>更新时间：2026-02-01</p></blockquote><table tabindex="0"><thead><tr><th>功能</th><th>文件路径</th><th>行号</th></tr></thead><tbody><tr><td>Brainstorming 技能定义</td><td><a href="https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md" target="_blank" rel="noreferrer"><code>skills/brainstorming/SKILL.md</code></a></td><td>1-55</td></tr><tr><td>/brainstorm 命令定义</td><td><a href="https://github.com/obra/superpowers/blob/main/commands/brainstorm.md" target="_blank" rel="noreferrer"><code>commands/brainstorm.md</code></a></td><td>1-7</td></tr><tr><td>工作流概述</td><td><a href="https://github.com/obra/superpowers/blob/main/README.md" target="_blank" rel="noreferrer"><code>README.md</code></a></td><td>80-96</td></tr></tbody></table><p><strong>关键原则</strong>：</p><ul><li>一次一个问题（One question at a time）- 避免信息过载</li><li>多选题优先（Multiple choice preferred）- 更容易回答</li><li>YAGNI（You Aren&#39;t Gonna Need It）- 移除不必要功能</li><li>探索替代方案（Explore alternatives）- 提出 2-3 种方法</li><li>增量验证（Incremental validation）- 分段展示设计</li><li>灵活调整（Be flexible）- 可随时回退澄清</li></ul><p><strong>关键流程</strong>：</p><ul><li>理解想法：检查项目上下文 → 一次一个问题地询问</li><li>探索方案：提出 2-3 种方法及权衡 → 推荐并说明理由</li><li>展示设计：分段展示（200-300 词）→ 每段后确认</li><li>保存文档：写入 <code>docs/plans/YYYY-MM-DD-&lt;topic&gt;-design.md</code> → 提交到 git</li></ul></details>`,94)])])}const u=a(i,[["render",t]]);export{g as __pageData,u as default};
