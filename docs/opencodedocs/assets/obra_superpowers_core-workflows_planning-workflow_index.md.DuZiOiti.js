import{_ as n,c as a,o as e,a1 as t}from"./chunks/framework.DILC4Csi.js";const u=JSON.parse('{"title":"Planning Workflow: Writing Plans Complete Guide | Superpowers Tutorial","description":"Learn how to use writing-plans skill to create detailed implementation plans that zero-context engineers can execute. Covers task breakdown principles (2-5 minutes per task), plan document structure (complete code and validation steps), choosing execution modes (subagent-driven vs batch execution), and saving plans to docs/plans/ with critical review.","frontmatter":{"title":"Planning Workflow: Writing Plans Complete Guide | Superpowers Tutorial","sidebarTitle":"Write Plans Before Coding","subtitle":"Planning Workflow: Writing Plans","description":"Learn how to use writing-plans skill to create detailed implementation plans that zero-context engineers can execute. Covers task breakdown principles (2-5 minutes per task), plan document structure (complete code and validation steps), choosing execution modes (subagent-driven vs batch execution), and saving plans to docs/plans/ with critical review.","tags":["Core Workflows","writing-plans","task breakdown","implementation plan"],"prerequisite":["/obra/superpowers/core-workflows/design-workflow/"],"order":110},"headers":[],"relativePath":"obra/superpowers/core-workflows/planning-workflow/index.md","filePath":"obra/superpowers/core-workflows/planning-workflow/index.md"}'),i={name:"obra/superpowers/core-workflows/planning-workflow/index.md"};function p(l,s,o,r,c,d){return e(),a("div",null,[...s[0]||(s[0]=[t(`<h1 id="planning-workflow-writing-plans" tabindex="-1">Planning Workflow: Writing Plans <a class="header-anchor" href="#planning-workflow-writing-plans" aria-label="Permalink to &quot;Planning Workflow: Writing Plans&quot;">​</a></h1><h2 id="what-you-ll-learn" tabindex="-1">What You&#39;ll Learn <a class="header-anchor" href="#what-you-ll-learn" aria-label="Permalink to &quot;What You&#39;ll Learn&quot;">​</a></h2><ul><li>Break down designs into executable small tasks (2-5 minutes each)</li><li>Write detailed plans with complete code, file paths, and validation steps</li><li>Ensure plans are clear enough for &quot;zero-context engineers to execute&quot;</li><li>Choose appropriate execution mode (subagent-driven vs batch execution)</li><li>Automatically generate formatted plan documents and save them to your project</li></ul><h2 id="your-current-situation" tabindex="-1">Your Current Situation <a class="header-anchor" href="#your-current-situation" aria-label="Permalink to &quot;Your Current Situation&quot;">​</a></h2><p><strong>AI agents often &quot;skip planning and write code directly&quot;</strong></p><p>Have you encountered this? After the AI understands your requirements, it starts writing code immediately, but halfway through it realizes:</p><ul><li>No testing framework</li><li>Missing necessary dependencies</li><li>Incomplete test coverage</li><li>Confusing commit messages</li></ul><p>Common issues:</p><ul><li>❌ AI treats large features as a single task, discovering too late that it&#39;s too complex</li><li>❌ Plans only say &quot;implement feature&quot; without specific code or validation steps</li><li>❌ Dependencies between tasks are confused, leading to wrong execution order</li><li>❌ Missing review checkpoints, problems only discovered late</li></ul><p>Root cause of these issues: <strong>The AI hasn&#39;t broken the work down into small enough tasks and recorded complete execution details.</strong></p><h2 id="when-to-use-this-approach" tabindex="-1">When to Use This Approach <a class="header-anchor" href="#when-to-use-this-approach" aria-label="Permalink to &quot;When to Use This Approach&quot;">​</a></h2><p>The Writing Plans skill is automatically triggered in the following scenarios:</p><table tabindex="0"><thead><tr><th>Scenario</th><th>Example</th></tr></thead><tbody><tr><td><strong>Multi-step tasks with specs/requirements</strong></td><td>Design document confirmed, needs implementation</td></tr><tr><td><strong>Feature development</strong></td><td>&quot;Implement user authentication system&quot; (design completed)</td></tr><tr><td><strong>Bug fixes</strong></td><td>&quot;Fix login timeout issue&quot; (root cause identified)</td></tr><tr><td><strong>Refactoring work</strong></td><td>&quot;Refactor data access layer&quot; (goals clarified)</td></tr></tbody></table><p><strong>Core principle</strong>: After design is confirmed, you must write a plan before coding.</p><h2 id="core-concepts" tabindex="-1">Core Concepts <a class="header-anchor" href="#core-concepts" aria-label="Permalink to &quot;Core Concepts&quot;">​</a></h2><p>The core assumption of the Writing Plans workflow is: <strong>Assume the engineer executing the plan has zero context of the codebase and questionable taste.</strong></p><p>This means the plan must include:</p><ul><li>Precise file paths (which files to create, which to modify)</li><li>Complete code (not vague instructions like &quot;add validation&quot;)</li><li>Exact commands and expected outputs</li><li>Relevant documentation references (existing docs to consult)</li><li>Detailed steps on how to test</li></ul><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[Design confirmed] --&gt; B[Break down tasks]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[Write plan]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[Save document]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E{Execution mode selection}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[Subagent-driven&lt;br/&gt;This session]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; G[Batch execution&lt;br/&gt;Independent session]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style A fill:#e3f2fd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style B fill:#fff3e0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style C fill:#e8f5e9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style D fill:#f3e5f5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style E fill:#ffe0b2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style F fill:#c8e6c9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style G fill:#c8e6c9</span></span></code></pre></div><h3 id="task-granularity-principle" tabindex="-1">Task Granularity Principle <a class="header-anchor" href="#task-granularity-principle" aria-label="Permalink to &quot;Task Granularity Principle&quot;">​</a></h3><p><strong>Each task completed in 2-5 minutes</strong>, one action per step:</p><table tabindex="0"><thead><tr><th>✅ Correct Examples</th><th>❌ Incorrect Examples</th></tr></thead><tbody><tr><td>&quot;Write a failing test&quot;</td><td>&quot;Implement user authentication&quot;</td></tr><tr><td>&quot;Run test to verify failure&quot;</td><td>&quot;Add tests&quot;</td></tr><tr><td>&quot;Write minimal implementation to pass test&quot;</td><td>&quot;Fix bug&quot;</td></tr><tr><td>&quot;Run test to verify pass&quot;</td><td>&quot;Update documentation&quot;</td></tr><tr><td>&quot;Commit code&quot;</td><td></td></tr></tbody></table><h3 id="plan-document-structure" tabindex="-1">Plan Document Structure <a class="header-anchor" href="#plan-document-structure" aria-label="Permalink to &quot;Plan Document Structure&quot;">​</a></h3><p>Each plan must include the following header information:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># [Feature Name] Implementation Plan</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; **AI prompt: Required sub-skill: Use superpowers:executing-plans to execute tasks in this plan</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Goal:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [One-sentence description of what this plan builds]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Architecture:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [2-3 sentences describing implementation approach]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Tech Stack:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Key technologies/libraries]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h3 id="execution-mode-selection" tabindex="-1">Execution Mode Selection <a class="header-anchor" href="#execution-mode-selection" aria-label="Permalink to &quot;Execution Mode Selection&quot;">​</a></h3><p>After the plan is complete, the AI will offer two execution methods:</p><table tabindex="0"><thead><tr><th>Mode</th><th>Description</th><th>Applicable Scenarios</th></tr></thead><tbody><tr><td><strong>Subagent-driven</strong></td><td>Execute in this session, dispatch new subagent for each task, iterate quickly between tasks</td><td>Needs frequent communication and feedback</td></tr><tr><td><strong>Batch execution</strong></td><td>Execute in independent session, complete tasks in batches, report and review between batches</td><td>Tasks are relatively independent and can be batched</td></tr></tbody></table><h2 id="follow-along" tabindex="-1">Follow Along <a class="header-anchor" href="#follow-along" aria-label="Permalink to &quot;Follow Along&quot;">​</a></h2><h3 id="step-1-trigger-plan-writing" tabindex="-1">Step 1: Trigger Plan Writing <a class="header-anchor" href="#step-1-trigger-plan-writing" aria-label="Permalink to &quot;Step 1: Trigger Plan Writing&quot;">​</a></h3><p><strong>Why</strong> After the design is confirmed, have the AI automatically trigger the writing-plans workflow to write a detailed implementation plan.</p><p><strong>Example</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>User input:</span></span>
<span class="line"><span>The design document has been confirmed, let&#39;s start implementation.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI response:</span></span>
<span class="line"><span>Good, I&#39;ll write the implementation plan. I&#39;m using the writing-plans skill.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(AI reads design document)</span></span>
<span class="line"><span>(AI analyzes implementation steps)</span></span>
<span class="line"><span>(AI breaks down tasks)</span></span></code></pre></div><p><strong>You should see</strong>: The AI announces it&#39;s using the writing-plans skill and begins writing the plan.</p><h3 id="step-2-break-down-tasks" tabindex="-1">Step 2: Break Down Tasks <a class="header-anchor" href="#step-2-break-down-tasks" aria-label="Permalink to &quot;Step 2: Break Down Tasks&quot;">​</a></h3><p><strong>Why</strong> Break large features into 2-5 minute small tasks to ensure each task can be completed and validated independently.</p><p><strong>Example</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AI response:</span></span>
<span class="line"><span>I&#39;ve broken down the feature into 6 tasks:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Task 1: Hook Installation Script** (3 minutes)</span></span>
<span class="line"><span>- Create hook installation script</span></span>
<span class="line"><span>- Add permission settings</span></span>
<span class="line"><span>- Write tests</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Task 2: Recovery Mode** (4 minutes)</span></span>
<span class="line"><span>- Implement verify mode</span></span>
<span class="line"><span>- Implement repair mode</span></span>
<span class="line"><span>- Add progress reporting</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Task 3: Error Handling** (3 minutes)</span></span>
<span class="line"><span>- Add exception catching</span></span>
<span class="line"><span>- Implement friendly error messages</span></span>
<span class="line"><span>- Test error scenarios</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>All tasks follow TDD workflow, each task contains complete code and validation steps.</span></span></code></pre></div><p><strong>You should see</strong>:</p><ol><li>Each task has a clear time estimate (2-5 minutes)</li><li>Each task is a specific action (not an abstract feature)</li><li>Dependencies between tasks are clear</li></ol><h3 id="step-3-write-task-details" tabindex="-1">Step 3: Write Task Details <a class="header-anchor" href="#step-3-write-task-details" aria-label="Permalink to &quot;Step 3: Write Task Details&quot;">​</a></h3><p><strong>Why</strong> Zero-context engineers need precise information: file paths, complete code, validation steps, command outputs.</p><p><strong>Example</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AI response:</span></span>
<span class="line"><span>Now I&#39;ll write detailed steps for each task.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Task 1: Hook Installation Script</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Files:**</span></span>
<span class="line"><span>- Create: \`src/hooks/install-hook.js\`</span></span>
<span class="line"><span>- Modify: \`package.json:45-48\` (add startup script)</span></span>
<span class="line"><span>- Test: \`tests/hooks/test-install-hook.js\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Step 1: Write failing test**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>describe(&#39;install-hook&#39;, () =&gt; {</span></span>
<span class="line"><span>  it(&#39;should create hook directory if not exists&#39;, async () =&gt; {</span></span>
<span class="line"><span>    await installHook();</span></span>
<span class="line"><span>    expect(fs.existsSync(&#39;.superpowers/hooks&#39;)).toBe(true);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><strong>Step 2: Run test to verify failure</strong></p><p>Run: <code>npm test -- tests/hooks/test-install-hook.js</code> Expected: FAIL, error &quot;install-hook is not defined&quot;</p><p><strong>Step 3: Write minimal implementation</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs/promises&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> installHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hooksDir</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.superpowers/hooks&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hooksDir, { recursive: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>Step 4: Run test to verify pass</strong></p><p>Run: <code>npm test -- tests/hooks/test-install-hook.js</code> Expected: PASS</p><p><strong>Step 5: Commit</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/hooks/install-hook.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/hooks/test-install-hook.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: add hook installation script&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**You should see**:</span></span>
<span class="line"><span>1. Each task lists precise file paths to create/modify/test</span></span>
<span class="line"><span>2. Each step has complete code (not descriptions like &quot;add validation&quot;)</span></span>
<span class="line"><span>3. Each step has exact commands and expected outputs</span></span>
<span class="line"><span>4. TDD cycle: RED → GREEN → COMMIT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Step 4: Save Plan Document</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Why**</span></span>
<span class="line"><span>Save the plan as a document for easy execution and review, and as part of the project knowledge base.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Example**</span></span></code></pre></div><p>AI response: Plan writing complete, saving to docs/plans/.</p><p>(AI writes to docs/plans/2026-02-01-hook-recovery-system.md)</p><p>AI continues: Plan saved: docs/plans/2026-02-01-hook-recovery-system.md</p><p>I&#39;ll commit this plan document now.</p><p>(AI executes git commit)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**You should see**:</span></span>
<span class="line"><span>1. Plan document saved to \`docs/plans/\` directory</span></span>
<span class="line"><span>2. File name format: \`YYYY-MM-DD-&lt;feature-name&gt;.md\`</span></span>
<span class="line"><span>3. Plan document committed to git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Step 5: Choose Execution Mode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Why**</span></span>
<span class="line"><span>Different execution modes suit different scenarios. Choosing the right mode improves efficiency.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Example**</span></span></code></pre></div><p>AI response: Plan completed and saved to <code>docs/plans/2026-02-01-hook-recovery-system.md</code>.</p><p>There are two execution options:</p><p><strong>1. Subagent-driven (this session)</strong></p><ul><li>I&#39;ll dispatch a new subagent for each task</li><li>Review between tasks</li><li>Fast iteration, frequent feedback</li></ul><p><strong>2. Batch execution (independent session)</strong></p><ul><li>Open worktree in new session</li><li>Execute 3 tasks per batch</li><li>Review between batches</li></ul><p>Which method would you like to use?</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**You should see**: The AI clearly provides two execution methods and explains their pros and cons.</span></span></code></pre></div><p>User input: I want to use subagent-driven because we might need frequent adjustments.</p><p>AI response: Good, I&#39;ll use subagent-driven development to execute this plan.</p><p>I&#39;m using the subagent-driven-development skill.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**Or**</span></span></code></pre></div><p>User input: Tasks are relatively independent, I&#39;ll use batch execution so I can handle other things in another terminal in parallel.</p><p>AI response: Good, please open a new session in the worktree and use the /write-plan command to load this plan.</p><p>The new session will use the executing-plans skill, execute tasks in batches and report between batches.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**You should see**:</span></span>
<span class="line"><span>- Subagent-driven: AI continues execution in the current session</span></span>
<span class="line"><span>- Batch execution: AI guides you to open a new session and execute in a worktree</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Checkpoint ✅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Verify that writing-plans workflow is working correctly**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [ ] AI automatically writes plans after design is confirmed</span></span>
<span class="line"><span>- [ ] Task granularity is 2-5 minutes per task</span></span>
<span class="line"><span>- [ ] Each task includes precise file paths</span></span>
<span class="line"><span>- [ ] Each step has complete code (not vague instructions)</span></span>
<span class="line"><span>- [ ] Each step has exact commands and expected outputs</span></span>
<span class="line"><span>- [ ] TDD cycle: write test → verify failure → write implementation → verify pass → commit</span></span>
<span class="line"><span>- [ ] Plan document saved to \`docs/plans/\` directory</span></span>
<span class="line"><span>- [ ] Plan document committed to git</span></span>
<span class="line"><span>- [ ] AI offers two execution methods to choose from</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If any of the above don&#39;t meet expectations, it may be a skill loading issue. Please check the [Installation Guide](../../start/installation/) or [Troubleshooting](../../faq/troubleshooting/).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Common Pitfalls</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ Pitfall 1: Tasks too large, cannot be completed in 2-5 minutes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Symptoms**: Plans include tasks like &quot;implement user authentication&quot;, &quot;refactor data layer&quot;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Cause**: The AI didn&#39;t follow the &quot;task granularity&quot; principle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Solution**:</span></span>
<span class="line"><span>- Remind the AI: &quot;Each task should be completed within 2-5 minutes&quot;</span></span>
<span class="line"><span>- If a task is too large, ask the AI to continue breaking it down: &quot;Please break down task 1 into smaller steps&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ Pitfall 2: Plans only say &quot;do X&quot; without specific code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Symptoms**: Step content is &quot;add validation logic&quot;, &quot;write tests&quot;, but no code examples.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Cause**: The AI didn&#39;t follow the &quot;complete code&quot; principle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Solution**:</span></span>
<span class="line"><span>- Remind the AI: &quot;Please provide complete code examples&quot;</span></span>
<span class="line"><span>- Emphasize &quot;Assume the engineer has zero context, needs exact implementation&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ Pitfall 3: Missing file paths</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Symptoms**: Tasks don&#39;t clearly specify which files to create or modify.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Cause**: The AI didn&#39;t follow the &quot;precise file paths&quot; principle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Solution**:</span></span>
<span class="line"><span>- Ask the AI to list a &quot;Files&quot; section in each task</span></span>
<span class="line"><span>- Format: \`Create:\`, \`Modify:path:line-range\`, \`Test:\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ Pitfall 4: Missing validation steps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Symptoms**: No steps to run tests or validation after writing code.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Cause**: The AI skipped TDD validation.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Solution**:</span></span>
<span class="line"><span>- Remind the AI: &quot;Each task must include validation steps&quot;</span></span>
<span class="line"><span>- Ensure &quot;Step 2: Run test to verify failure&quot; and &quot;Step 4: Run test to verify pass&quot; both exist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ Pitfall 5: Entering next task without committing code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Symptoms**: After tests pass, immediately write code for the next task without committing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Cause**: The AI didn&#39;t follow the &quot;frequent commits&quot; principle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Solution**:</span></span>
<span class="line"><span>- Ensure the last step of the TDD cycle is &quot;Step 5: Commit&quot;</span></span>
<span class="line"><span>- Commit messages should be clear: \`feat: add specific feature\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### ❌ Pitfall 6: Choosing the wrong execution mode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Symptoms**: Using batch execution for tasks needing frequent feedback, causing rework; or using subagent-driven for independent tasks, inefficient.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Cause**: Not choosing the appropriate execution mode based on task characteristics.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Solution**:</span></span>
<span class="line"><span>- **Need frequent feedback** → Subagent-driven (quick review between tasks)</span></span>
<span class="line"><span>- **Tasks relatively independent** → Batch execution (report between batches, can work in parallel)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Summary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Writing Plans is step 3 of the Superpowers core workflow. It ensures:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **Zero-context assumption**: Assume engineers have zero context of the codebase, record all necessary information</span></span>
<span class="line"><span>2. **Task granularity**: Each task 2-5 minutes, one action per step</span></span>
<span class="line"><span>3. **Complete code**: Don&#39;t use vague instructions like &quot;add validation&quot;, provide exact implementation</span></span>
<span class="line"><span>4. **TDD cycle**: Write test → verify failure → write implementation → verify pass → commit</span></span>
<span class="line"><span>5. **Plan documentation**: Save to \`docs/plans/\` for easy execution and review</span></span>
<span class="line"><span>6. **Execution mode selection**: Provide both subagent-driven and batch execution options</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Remember**: writing-plans is not a suggestion, but a mandatory workflow. The AI will automatically trigger this skill after design is confirmed.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Coming Up Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; In the next lesson, we&#39;ll learn **[Test-Driven Development: TDD Iron Law](../tdd-workflow/)**.</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt; During plan execution, you&#39;ll learn:</span></span>
<span class="line"><span>&gt; - How to follow the RED-GREEN-REFACTOR cycle</span></span>
<span class="line"><span>&gt; - Correct common TDD misconceptions (e.g., &quot;write implementation first, then tests&quot;)</span></span>
<span class="line"><span>&gt; - Why &quot;no code without tests&quot; is an iron rule</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Appendix: Source Code Reference</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;details&gt;</span></span>
<span class="line"><span>&lt;summary&gt;&lt;strong&gt;Click to expand source code locations&lt;/strong&gt;&lt;/summary&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; Updated: 2026-02-01</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| Feature | File Path | Lines |</span></span>
<span class="line"><span>| ----------- | ------------------------------------------------------------------------------------------- | ------- |</span></span>
<span class="line"><span>| Writing Plans Skill Definition | [\`skills/writing-plans/SKILL.md\`](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md) | 1-117   |</span></span>
<span class="line"><span>| /write-plan Command Definition | [\`commands/write-plan.md\`](https://github.com/obra/superpowers/blob/main/commands/write-plan.md) | 1-7     |</span></span>
<span class="line"><span>| Executing Plans Skill Definition | [\`skills/executing-plans/SKILL.md\`](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md) | 1-85    |</span></span>
<span class="line"><span>| Subagent-driven Development Skill Definition | [\`skills/subagent-driven-development/SKILL.md\`](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md) | 1-243   |</span></span>
<span class="line"><span>| Workflow Overview | [\`README.md\`](https://github.com/obra/superpowers/blob/main/README.md) | 80-96   |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Key Principles**:</span></span>
<span class="line"><span>- Zero context assumption - Assume engineers have zero context of the codebase</span></span>
<span class="line"><span>- Bite-sized tasks - Each task completed in 2-5 minutes</span></span>
<span class="line"><span>- Complete code - Provide exact implementation, not vague instructions</span></span>
<span class="line"><span>- TDD cycle (RED-GREEN-REFACTOR) - Write test → verify failure → write implementation → verify pass → commit</span></span>
<span class="line"><span>- DRY (Don&#39;t Repeat Yourself) - Avoid duplicate code</span></span>
<span class="line"><span>- YAGNI (You Aren&#39;t Gonna Need It) - Only do features needed right now</span></span>
<span class="line"><span>- Frequent commits - Commit after each task completion</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Key Processes**:</span></span>
<span class="line"><span>- Writing plan: Read design document → Break down tasks (2-5 minutes/task) → Write detailed steps (complete code + validation) → Save to \`docs/plans/YYYY-MM-DD-&lt;feature-name&gt;.md\` → Commit to git</span></span>
<span class="line"><span>- Execution mode selection: Subagent-driven (this session, fast iteration) vs Batch execution (independent session, batch reports)</span></span>
<span class="line"><span>- Subagent-driven: Dispatch implementation subagent → Specification compliance review → Code quality review → Next task</span></span>
<span class="line"><span>- Batch execution: Critically review plan → Execute first batch (default 3 tasks) → Report → Next batch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Execution Mode Comparison**:</span></span>
<span class="line"><span>| Dimension | Subagent-driven | Batch Execution |</span></span>
<span class="line"><span>| ---- | ---------- | -------- |</span></span>
<span class="line"><span>| Session | This session (no context switching) | Independent session (new worktree) |</span></span>
<span class="line"><span>| Agent | New subagent per task | Same agent executes a batch of tasks |</span></span>
<span class="line"><span>| Review | Auto review after each task | Report between batches, wait for human review |</span></span>
<span class="line"><span>| Iteration | Fast (no human intervention between tasks) | Slow (human feedback needed between batches) |</span></span>
<span class="line"><span>| Applicable scenarios | Need frequent adjustments | Tasks relatively independent, can parallelize |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/details&gt;</span></span></code></pre></div>`,75)])])}const k=n(i,[["render",p]]);export{u as __pageData,k as default};
