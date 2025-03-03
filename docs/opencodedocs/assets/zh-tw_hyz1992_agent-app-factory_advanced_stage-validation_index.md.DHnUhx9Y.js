import{_ as i,c as a,o as n,a1 as t}from"./chunks/framework.DILC4Csi.js";const g=JSON.parse('{"title":"Validation 階段：自動化程式碼品質驗證與問題定位 | AI App Factory 教程","description":"學習如何使用 Validation Agent 自動驗證生成的程式碼品質，包括相依性安裝檢查、TypeScript 類型檢查、Prisma schema 驗證和測試執行檢查。本教程教你解讀驗證報告、快速定位問題並提供修復建議，確保生成程式碼符合生產就緒標準。","frontmatter":{"title":"Validation 階段：自動化程式碼品質驗證與問題定位 | AI App Factory 教程","sidebarTitle":"5 分鐘透過程式碼驗證","subtitle":"階段 6：Validation - 驗證程式碼品質","description":"學習如何使用 Validation Agent 自動驗證生成的程式碼品質，包括相依性安裝檢查、TypeScript 類型檢查、Prisma schema 驗證和測試執行檢查。本教程教你解讀驗證報告、快速定位問題並提供修復建議，確保生成程式碼符合生產就緒標準。","tags":["validation","程式碼品質","自動化測試"],"prerequisite":["advanced-stage-code"],"order":130},"headers":[],"relativePath":"zh-tw/hyz1992/agent-app-factory/advanced/stage-validation/index.md","filePath":"zh-tw/hyz1992/agent-app-factory/advanced/stage-validation/index.md"}'),l={name:"zh-tw/hyz1992/agent-app-factory/advanced/stage-validation/index.md"};function p(h,s,e,k,d,r){return n(),a("div",null,[...s[0]||(s[0]=[t(`<h1 id="階段-6-validation-驗證程式碼品質" tabindex="-1">階段 6：Validation - 驗證程式碼品質 <a class="header-anchor" href="#階段-6-validation-驗證程式碼品質" aria-label="Permalink to &quot;階段 6：Validation - 驗證程式碼品質&quot;">​</a></h1><h2 id="學完你能做什麼" tabindex="-1">學完你能做什麼 <a class="header-anchor" href="#學完你能做什麼" aria-label="Permalink to &quot;學完你能做什麼&quot;">​</a></h2><ul><li><strong>自動化程式碼驗證</strong>：一鍵檢查前後端程式碼的相依性安裝、類型檢查和基礎測試</li><li><strong>解讀驗證報告</strong>：理解 Validation Agent 生成的詳細報告和問題分類</li><li><strong>快速定位問題</strong>：根據報告中的具體位置和建議修復程式碼錯誤</li><li><strong>確保程式碼品質</strong>：驗證生成的程式碼符合生產就緒標準</li></ul><h2 id="你現在的困境" tabindex="-1">你現在的困境 <a class="header-anchor" href="#你現在的困境" aria-label="Permalink to &quot;你現在的困境&quot;">​</a></h2><p>你已經完成了 Code 階段，生成了前後端程式碼，但最頭疼的是：</p><ul><li><strong>程式碼能不能跑</strong>：相依性都裝對了嗎？類型檢查能過嗎？</li><li><strong>Prisma 對不對</strong>：schema 語法有問題嗎？能生成客戶端嗎？</li><li><strong>測試靠譜嗎</strong>：有測試嗎？能通過嗎？</li><li><strong>有沒有坑</strong>：環境變數配置對嗎？匯入路徑正確嗎？</li></ul><p>人工逐一檢查這些問題要花好長時間，而且容易遺漏。Validation 階段就是為了解決這些問題——它自動驗證程式碼品質，生成詳細報告。</p><h2 id="什麼時候用這一招" tabindex="-1">什麼時候用這一招 <a class="header-anchor" href="#什麼時候用這一招" aria-label="Permalink to &quot;什麼時候用這一招&quot;">​</a></h2><p>當你需要：</p><ul><li><strong>快速驗證程式碼</strong>：確認生成的程式碼符合基本品質標準</li><li><strong>發現潛在問題</strong>：在部署前找出相依性、類型、測試等問題</li><li><strong>程式碼品質保證</strong>：確保前後端程式碼都能通過基本檢查</li><li><strong>避免部署失敗</strong>：提前發現問題，減少返工成本</li></ul><h2 id="核心思路" tabindex="-1">核心思路 <a class="header-anchor" href="#核心思路" aria-label="Permalink to &quot;核心思路&quot;">​</a></h2><p>Validation Agent 是一個<strong>品質檢查員</strong>，它的任務是驗證 Code Agent 生成的程式碼是否符合品質標準。它的核心特點：</p><h3 id="輸入輸出" tabindex="-1">輸入輸出 <a class="header-anchor" href="#輸入輸出" aria-label="Permalink to &quot;輸入輸出&quot;">​</a></h3><table tabindex="0"><thead><tr><th>類型</th><th>內容</th></tr></thead><tbody><tr><td><strong>輸入</strong></td><td><code>artifacts/backend/</code>（後端程式碼）、<code>artifacts/client/</code>（前端程式碼）</td></tr><tr><td><strong>輸出</strong></td><td><code>artifacts/validation/report.md</code>（驗證報告）</td></tr></tbody></table><h3 id="驗證檢查項" tabindex="-1">驗證檢查項 <a class="header-anchor" href="#驗證檢查項" aria-label="Permalink to &quot;驗證檢查項&quot;">​</a></h3><p>Validation Agent 會執行 8 大類檢查：</p><table tabindex="0"><thead><tr><th>檢查項</th><th>說明</th></tr></thead><tbody><tr><td><strong>檔案完整性</strong></td><td>確認所有必須檔案都存在</td></tr><tr><td><strong>相依性安裝</strong></td><td>驗證 <code>package.json</code> 相依性可正常解析</td></tr><tr><td><strong>TypeScript 編譯</strong></td><td>檢查程式碼是否通過類型檢查</td></tr><tr><td><strong>Prisma Schema</strong></td><td>驗證資料模型語法是否正確</td></tr><tr><td><strong>測試執行</strong></td><td>確認測試存在且能通過</td></tr><tr><td><strong>程式碼規範</strong></td><td>檢查 lint 腳本配置</td></tr><tr><td><strong>關鍵模式</strong></td><td>掃描程式碼中的關鍵模式（錯誤處理、健康檢查等）</td></tr><tr><td><strong>常見問題</strong></td><td>識別已知的錯誤模式</td></tr></tbody></table><h3 id="執行約束" tabindex="-1">執行約束 <a class="header-anchor" href="#執行約束" aria-label="Permalink to &quot;執行約束&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">唯讀模式</p><p>Validation Agent <strong>只驗證不修改</strong>：</p><ul><li>禁止修改任何程式碼檔案</li><li>禁止實際安裝相依性（使用 <code>--dry-run</code>）</li><li>禁止執行有副作用的命令</li></ul></div><h2 id="跟我做" tabindex="-1">跟我做 <a class="header-anchor" href="#跟我做" aria-label="Permalink to &quot;跟我做&quot;">​</a></h2><h3 id="第-1-步-進入-validation-階段" tabindex="-1">第 1 步：進入 Validation 階段 <a class="header-anchor" href="#第-1-步-進入-validation-階段" aria-label="Permalink to &quot;第 1 步：進入 Validation 階段&quot;">​</a></h3><p>假設你已經完成了 Code 階段，現在要開始驗證程式碼品質。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果在 pipeline 中，直接進入下一個階段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者從某個階段重新開始</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span></code></pre></div><p><strong>你應該看到</strong>：CLI 會顯示 Validation 階段的資訊，包括輸入檔案和預期輸出。</p><h3 id="第-2-步-ai-助手執行-validation-agent" tabindex="-1">第 2 步：AI 助手執行 Validation Agent <a class="header-anchor" href="#第-2-步-ai-助手執行-validation-agent" aria-label="Permalink to &quot;第 2 步：AI 助手執行 Validation Agent&quot;">​</a></h3><p>AI 助手會載入 <code>agents/validation.agent.md</code>，然後開始執行。</p><p>Validation Agent 的執行流程：</p><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[檢查前後端目錄] --&gt; B[檔案完整性檢查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[相依性安裝檢查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[TypeScript 編譯檢查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[Prisma Schema 驗證]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[測試執行檢查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    F --&gt; G[程式碼模式檢查]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    G --&gt; H[常見問題掃描]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    H --&gt; I[產生驗證報告]</span></span></code></pre></div><p><strong>AI 助手會做什麼</strong>：</p><ol><li><p><strong>檢查後端目錄</strong></p><ul><li>確認 <code>artifacts/backend/</code> 存在</li><li>檢查必須檔案：<code>package.json</code>、<code>tsconfig.json</code>、<code>.env.example</code>、<code>prisma/schema.prisma</code></li></ul></li><li><p><strong>檢查前端目錄</strong></p><ul><li>確認 <code>artifacts/client/</code> 存在</li><li>檢查必須檔案：<code>package.json</code>、<code>tsconfig.json</code>、<code>app.json</code>、<code>App.tsx</code></li></ul></li><li><p><strong>相依性安裝檢查</strong></p><ul><li>後端：<code>cd artifacts/backend &amp;&amp; npm install --dry-run</code></li><li>前端：<code>cd artifacts/client &amp;&amp; npm install --dry-run</code></li><li>驗證相依性是否可以正常解析</li></ul></li><li><p><strong>TypeScript 編譯檢查</strong></p><ul><li>後端：<code>cd artifacts/backend &amp;&amp; npx tsc --noEmit</code></li><li>前端：<code>cd artifacts/client &amp;&amp; npx tsc --noEmit</code></li><li>檢查程式碼是否通過類型檢查</li></ul></li><li><p><strong>Prisma Schema 驗證</strong></p><ul><li><code>cd artifacts/backend &amp;&amp; npx prisma validate</code></li><li>驗證資料模型語法是否正確</li></ul></li><li><p><strong>測試執行檢查</strong></p><ul><li>後端：<code>cd artifacts/backend &amp;&amp; npm test</code></li><li>前端：<code>cd artifacts/client &amp;&amp; npm test</code></li><li>確認測試存在且能通過</li></ul></li><li><p><strong>程式碼模式檢查</strong></p><ul><li>掃描關鍵模式：錯誤處理、健康檢查、SafeAreaView 等</li><li>檢查相依性配置：dotenv、React Native Web 等</li></ul></li><li><p><strong>常見問題掃描</strong></p><ul><li>SQLite 使用 <code>type</code> 定義</li><li>環境變數值有引號</li><li>錯誤的匯入路徑</li><li>缺少必要的匯入</li></ul></li><li><p><strong>產生驗證報告</strong></p><ul><li>彙總所有檢查結果</li><li>列出發現的問題</li><li>提供修復建議</li><li>儲存到 <code>artifacts/validation/report.md</code></li></ul></li></ol><h3 id="第-3-步-查看驗證報告" tabindex="-1">第 3 步：查看驗證報告 <a class="header-anchor" href="#第-3-步-查看驗證報告" aria-label="Permalink to &quot;第 3 步：查看驗證報告&quot;">​</a></h3><p>Validation Agent 完成後，會產生詳細的驗證報告。</p><p>開啟 <code>artifacts/validation/report.md</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/validation/report.md</span></span></code></pre></div><p><strong>你應該看到</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 程式碼驗證報告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**產生時間**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2026-01-29 12:00:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**驗證結果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ✅ 通過</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 後端驗證: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端驗證: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 總體評估: 程式碼品質符合 MVP 標準，可以進入 Preview 階段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 後端驗證詳情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 檔案完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檔案 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| .env.example | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| prisma/schema.prisma | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/index.ts | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/app.ts | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 相依性安裝</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 詳情: 所有相依性可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 編譯</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Prisma 驗證</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 詳情: Prisma schema 語法正確</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 測試執行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 測試數量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通過數量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失敗數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 程式碼模式檢查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檢查項 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 錯誤處理中介軟體 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 健康檢查端點 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 環境變數使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Prisma Client 匯入 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 測試檔案存在 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| dotenv 首行匯入 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 前端驗證詳情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 檔案完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檔案 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| app.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| App.tsx | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/navigation/index.tsx | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 相依性安裝</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 詳情: 所有相依性可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 編譯</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 測試執行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 測試數量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通過數量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失敗數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 程式碼模式檢查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檢查項 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| SafeAreaView 使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Loading 元件 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Error 處理 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| API 呼叫封裝 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| React Native Web 相依性 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| async-storage 相依性 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 發現的問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">無嚴重問題或警告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修復建議</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">無需修復</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 結論</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">程式碼品質符合 MVP 標準，建議進入 Preview 階段。</span></span></code></pre></div><h3 id="第-4-步-處理驗證失敗的情況" tabindex="-1">第 4 步：處理驗證失敗的情況 <a class="header-anchor" href="#第-4-步-處理驗證失敗的情況" aria-label="Permalink to &quot;第 4 步：處理驗證失敗的情況&quot;">​</a></h3><p>如果驗證失敗，報告中會列出具體問題和修復建議。</p><p><strong>範例：部分通過的驗證報告</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**驗證結果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ⚠️ 部分通過</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 發現的問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 嚴重問題 (必須修復)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript 編譯錯誤</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/controllers/items.ts:15</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤: Property &#39;title&#39; does not exist on type &#39;any&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 新增類型定義 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`const item: Item = req.body;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma schema 驗證失敗</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: prisma/schema.prisma:10</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤: Invalid datasource provider &#39;sqlite&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 將 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;sqlite&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改為 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;postgresql&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（生產環境）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 警告 (建議修復)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 缺少測試檔案</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/controllers/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 為每個控制器新增測試檔案</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 環境變數配置不完整</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: .env.example</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 新增 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`DATABASE_URL\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 範例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修復建議</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修復 TypeScript 錯誤：在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/controllers/items.ts\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中新增類型定義</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新 Prisma schema：修改資料來源 provider</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 新增測試檔案：為控制器編寫測試</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 完善環境變數：補充 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`.env.example\`</span></span></code></pre></div><p><strong>修復步驟</strong>：</p><ol><li><p><strong>定位問題檔案</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 開啟問題檔案</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend/src/controllers/items.ts</span></span></code></pre></div></li><li><p><strong>修復程式碼</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 新增類型定義</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> req.body;</span></span></code></pre></div></li><li><p><strong>更新 Prisma schema</strong></p><div class="language-prisma vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">prisma</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datasource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;postgresql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  # </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">修改為</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> postgresql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DATABASE_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>重新驗證</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重新執行 Validation 階段</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span></code></pre></div></li></ol><h3 id="第-5-步-確認檢查點" tabindex="-1">第 5 步：確認檢查點 <a class="header-anchor" href="#第-5-步-確認檢查點" aria-label="Permalink to &quot;第 5 步：確認檢查點&quot;">​</a></h3><p>在 AI 助手確認 Validation 階段完成時，你會看到：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ Validation 階段完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>產生的檔案：</span></span>
<span class="line"><span>- 驗證報告：artifacts/validation/report.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>驗證結果：✅ 通過 / ⚠️ 部分通過 / ❌ 失敗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>檢查點選項：</span></span>
<span class="line"><span>[1] 繼續 - 進入 Preview 階段</span></span>
<span class="line"><span>[2] 重試 - 重新驗證程式碼</span></span>
<span class="line"><span>[3] 暫停 - 儲存目前狀態</span></span></code></pre></div><ul><li>如果驗證通過，選擇 <strong>繼續</strong> 進入下一階段</li><li>如果有問題，修復後選擇 <strong>重試</strong> 重新驗證</li><li>如果需要時間修復，選擇 <strong>暫停</strong> 儲存目前狀態</li></ul><h2 id="檢查點-✅" tabindex="-1">檢查點 ✅ <a class="header-anchor" href="#檢查點-✅" aria-label="Permalink to &quot;檢查點 ✅&quot;">​</a></h2><p>完成 Validation 階段後，你應該：</p><ul><li>[ ] 後端和前端的所有必須檔案都存在</li><li>[ ] 相依性可以正常解析（<code>npm install --dry-run</code>）</li><li>[ ] TypeScript 編譯無錯誤（<code>npx tsc --noEmit</code>）</li><li>[ ] Prisma schema 驗證通過（<code>npx prisma validate</code>）</li><li>[ ] 測試檔案存在且能通過（<code>npm test</code>）</li><li>[ ] 關鍵模式檢查全部通過</li><li>[ ] 驗證報告已產生（<code>artifacts/validation/report.md</code>）</li></ul><h2 id="踩坑提醒" tabindex="-1">踩坑提醒 <a class="header-anchor" href="#踩坑提醒" aria-label="Permalink to &quot;踩坑提醒&quot;">​</a></h2><h3 id="問題-1-相依性安裝失敗" tabindex="-1">問題 1：相依性安裝失敗 <a class="header-anchor" href="#問題-1-相依性安裝失敗" aria-label="Permalink to &quot;問題 1：相依性安裝失敗&quot;">​</a></h3><p><strong>症狀</strong>：<code>npm install --dry-run</code> 報錯</p><p><strong>解決方案</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 檢查 package.json 語法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend/package.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常見問題：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 缺少引號</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 相依性名稱錯誤</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 版本格式不對</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修復後重新驗證</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">factory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation</span></span></code></pre></div><h3 id="問題-2-typescript-編譯錯誤" tabindex="-1">問題 2：TypeScript 編譯錯誤 <a class="header-anchor" href="#問題-2-typescript-編譯錯誤" aria-label="Permalink to &quot;問題 2：TypeScript 編譯錯誤&quot;">​</a></h3><p><strong>症狀</strong>：<code>npx tsc --noEmit</code> 報錯</p><p><strong>常見錯誤類型</strong>：</p><table tabindex="0"><thead><tr><th>錯誤</th><th>原因</th><th>解決方案</th></tr></thead><tbody><tr><td><code>Property does not exist</code></td><td>類型未定義</td><td>新增類型定義</td></tr><tr><td><code>Module not found</code></td><td>匯入路徑錯誤</td><td>檢查匯入路徑</td></tr><tr><td><code>Implicit any</code></td><td>隱式 any 類型</td><td>啟用嚴格模式並新增類型</td></tr></tbody></table><h3 id="問題-3-prisma-schema-驗證失敗" tabindex="-1">問題 3：Prisma schema 驗證失敗 <a class="header-anchor" href="#問題-3-prisma-schema-驗證失敗" aria-label="Permalink to &quot;問題 3：Prisma schema 驗證失敗&quot;">​</a></h3><p><strong>症狀</strong>：<code>npx prisma validate</code> 報錯</p><p><strong>常見錯誤</strong>：</p><table tabindex="0"><thead><tr><th>錯誤</th><th>原因</th><th>解決方案</th></tr></thead><tbody><tr><td><code>Invalid datasource provider</code></td><td>provider 錯誤</td><td>使用 <code>postgresql</code> 或 <code>sqlite</code></td></tr><tr><td><code>Error parsing</code></td><td>語法錯誤</td><td>檢查 model 定義</td></tr><tr><td><code>Relation error</code></td><td>關係定義錯誤</td><td>檢查 <code>@relation</code> 欄位</td></tr></tbody></table><h3 id="問題-4-測試失敗" tabindex="-1">問題 4：測試失敗 <a class="header-anchor" href="#問題-4-測試失敗" aria-label="Permalink to &quot;問題 4：測試失敗&quot;">​</a></h3><p><strong>症狀</strong>：<code>npm test</code> 報錯</p><p><strong>解決方案</strong>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 檢查測試檔案是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;*.test.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 檢查測試相依性是否安裝</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend/package.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;devDependencies&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果缺少測試相依性，手動安裝</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts/backend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @testing-library/react-native</span></span></code></pre></div><h3 id="問題-5-關鍵模式檢查失敗" tabindex="-1">問題 5：關鍵模式檢查失敗 <a class="header-anchor" href="#問題-5-關鍵模式檢查失敗" aria-label="Permalink to &quot;問題 5：關鍵模式檢查失敗&quot;">​</a></h3><p><strong>症狀</strong>：報告顯示關鍵模式缺失</p><p><strong>常見缺失模式</strong>：</p><table tabindex="0"><thead><tr><th>模式</th><th>位置</th><th>修復方法</th></tr></thead><tbody><tr><td>錯誤處理中介軟體</td><td><code>src/middleware/error.ts</code></td><td>新增錯誤處理中介軟體</td></tr><tr><td>健康檢查端點</td><td><code>src/routes/health.ts</code></td><td>新增 <code>/health</code> 路由</td></tr><tr><td>dotenv 首行匯入</td><td><code>src/index.ts:1</code></td><td>新增 <code>import &#39;dotenv/config&#39;;</code></td></tr><tr><td>SafeAreaView</td><td><code>src/screens/Home.tsx</code></td><td>用 SafeAreaView 包裹內容</td></tr></tbody></table><h2 id="validation-agent-特殊要求" tabindex="-1">Validation Agent 特殊要求 <a class="header-anchor" href="#validation-agent-特殊要求" aria-label="Permalink to &quot;Validation Agent 特殊要求&quot;">​</a></h2><p>Validation Agent 有一些特殊的約束和要求，需要特別注意：</p><h3 id="_1-唯讀模式" tabindex="-1">1. 唯讀模式 <a class="header-anchor" href="#_1-唯讀模式" aria-label="Permalink to &quot;1. 唯讀模式&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">禁止修改程式碼</p><p>Validation Agent <strong>絕對禁止</strong>修改任何程式碼檔案，只執行驗證和報告產生。</p></div><h3 id="_2-dry-run-安裝" tabindex="-1">2. Dry-run 安裝 <a class="header-anchor" href="#_2-dry-run-安裝" aria-label="Permalink to &quot;2. Dry-run 安裝&quot;">​</a></h3><p>相依性安裝檢查使用 <code>--dry-run</code> 參數，不會實際安裝相依性：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dry-run</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 只檢查相依性是否可解析</span></span></code></pre></div><h3 id="_3-完整的報告" tabindex="-1">3. 完整的報告 <a class="header-anchor" href="#_3-完整的報告" aria-label="Permalink to &quot;3. 完整的報告&quot;">​</a></h3><p>Validation Agent <strong>必須</strong>產生完整的驗證報告，包括：</p><table tabindex="0"><thead><tr><th>部分</th><th>內容</th></tr></thead><tbody><tr><td><strong>摘要</strong></td><td>後端/前端驗證狀態和總體評估</td></tr><tr><td><strong>後端詳情</strong></td><td>檔案完整性、相依性、編譯、Prisma、測試、模式檢查</td></tr><tr><td><strong>前端詳情</strong></td><td>檔案完整性、相依性、編譯、測試、模式檢查</td></tr><tr><td><strong>發現的問題</strong></td><td>嚴重問題和警告列表</td></tr><tr><td><strong>修復建議</strong></td><td>針對問題的具體修復步驟</td></tr><tr><td><strong>結論</strong></td><td>總體評估和下一步建議</td></tr></tbody></table><h3 id="_4-問題分級" tabindex="-1">4. 問題分級 <a class="header-anchor" href="#_4-問題分級" aria-label="Permalink to &quot;4. 問題分級&quot;">​</a></h3><p>Validation Agent 會將問題分為三級：</p><table tabindex="0"><thead><tr><th>級別</th><th>標準</th><th>處理方式</th></tr></thead><tbody><tr><td><strong>嚴重問題</strong></td><td>必須修復才能通過</td><td>在報告中標記為&quot;必須修復&quot;</td></tr><tr><td><strong>警告</strong></td><td>建議修復但非致命</td><td>在報告中標記為&quot;建議修復&quot;</td></tr><tr><td><strong>資訊</strong></td><td>僅供參考</td><td>不影響驗證結果</td></tr></tbody></table><h2 id="驗證結果判定" tabindex="-1">驗證結果判定 <a class="header-anchor" href="#驗證結果判定" aria-label="Permalink to &quot;驗證結果判定&quot;">​</a></h2><p>Validation Agent 會根據檢查結果判定驗證狀態。</p><h3 id="通過條件-✅-通過" tabindex="-1">通過條件 (✅ 通過) <a class="header-anchor" href="#通過條件-✅-通過" aria-label="Permalink to &quot;通過條件 (✅ 通過)&quot;">​</a></h3><ul><li>所有必須檔案存在</li><li>相依性安裝無錯誤</li><li>TypeScript 編譯無錯誤</li><li>Prisma schema 驗證通過</li><li>基礎測試存在且全部通過</li><li>關鍵模式檢查全部通過</li></ul><h3 id="部分通過條件-⚠️-部分通過" tabindex="-1">部分通過條件 (⚠️ 部分通過) <a class="header-anchor" href="#部分通過條件-⚠️-部分通過" aria-label="Permalink to &quot;部分通過條件 (⚠️ 部分通過)&quot;">​</a></h3><ul><li>必須檔案存在</li><li>相依性安裝無錯誤</li><li>TypeScript 編譯有警告但無錯誤</li><li>測試存在但部分失敗（&lt; 30% 失敗率）</li><li>存在非關鍵問題</li></ul><h3 id="失敗條件-❌-失敗" tabindex="-1">失敗條件 (❌ 失敗) <a class="header-anchor" href="#失敗條件-❌-失敗" aria-label="Permalink to &quot;失敗條件 (❌ 失敗)&quot;">​</a></h3><ul><li>必須檔案缺失</li><li>相依性安裝失敗</li><li>TypeScript 編譯有錯誤</li><li>Prisma schema 驗證失敗</li><li>測試缺失或大量失敗（≥ 30% 失敗率）</li></ul><h2 id="程式碼品質檢查清單" tabindex="-1">程式碼品質檢查清單 <a class="header-anchor" href="#程式碼品質檢查清單" aria-label="Permalink to &quot;程式碼品質檢查清單&quot;">​</a></h2><p>Validation Agent 會對照以下檢查清單進行驗證。</p><h3 id="後端必須項" tabindex="-1">後端必須項 <a class="header-anchor" href="#後端必須項" aria-label="Permalink to &quot;後端必須項&quot;">​</a></h3><ul><li>[ ] <code>package.json</code> 存在</li><li>[ ] <code>tsconfig.json</code> 存在</li><li>[ ] <code>.env.example</code> 存在</li><li>[ ] <code>prisma/schema.prisma</code> 存在</li><li>[ ] <code>src/index.ts</code> 存在</li><li>[ ] <code>src/app.ts</code> 存在</li><li>[ ] <code>src/index.ts</code> 首行匯入 dotenv</li><li>[ ] dotenv 在 dependencies 中</li><li>[ ] 存在錯誤處理中介軟體</li><li>[ ] 存在健康檢查端點 (<code>/health</code>)</li><li>[ ] 環境變數使用 <code>process.env</code></li><li>[ ] Prisma Client 匯入正確</li><li>[ ] 存在至少一個測試檔案</li><li>[ ] package.json 包含 <code>test</code> 腳本</li></ul><h3 id="前端必須項" tabindex="-1">前端必須項 <a class="header-anchor" href="#前端必須項" aria-label="Permalink to &quot;前端必須項&quot;">​</a></h3><ul><li>[ ] <code>package.json</code> 存在</li><li>[ ] <code>tsconfig.json</code> 存在</li><li>[ ] <code>app.json</code> 存在</li><li>[ ] <code>App.tsx</code> 存在</li><li>[ ] <code>src/navigation/index.tsx</code> 存在</li><li>[ ] 存在 SafeAreaView 使用</li><li>[ ] 存在 Loading 元件</li><li>[ ] 存在 Error 處理</li><li>[ ] API 呼叫透過封裝層</li><li>[ ] 包含 React Native Web 相依性</li><li>[ ] 包含 async-storage 相依性</li><li>[ ] <code>app.json</code> 不引用不存在的圖片檔案</li></ul><h2 id="常見問題掃描" tabindex="-1">常見問題掃描 <a class="header-anchor" href="#常見問題掃描" aria-label="Permalink to &quot;常見問題掃描&quot;">​</a></h2><p>Validation Agent 會掃描以下已知問題模式：</p><table tabindex="0"><thead><tr><th>檢查項</th><th>檢測方法</th><th>修復建議</th></tr></thead><tbody><tr><td>SQLite 使用 <code>type</code> 定義</td><td>檢查 schema.prisma 是否包含 <code>type Xxx</code></td><td>移除 <code>type</code> 定義</td></tr><tr><td>環境變數值有引號</td><td>檢查 .env 是否包含 <code>=&quot;xxx&quot;</code> 或 <code>=&#39;xxx&#39;</code></td><td>移除引號</td></tr><tr><td>Prisma 版本是 7.x</td><td>檢查 package.json 中 prisma 版本是否 ^7</td><td>改用 Prisma 5.x</td></tr><tr><td>錯誤的匯入路徑</td><td>檢查 screens 中是否有 <code>from &#39;./ui/&#39;</code></td><td>改為 <code>from &#39;../components/ui/&#39;</code></td></tr><tr><td>缺少 View 匯入</td><td>檢查元件是否使用 View 但未匯入</td><td>新增 <code>import { View } from &#39;react-native&#39;</code></td></tr><tr><td>字串未終止</td><td>檢查 .tsx 檔案是否有連續的引號</td><td>新增缺失的引號</td></tr></tbody></table><h2 id="驗證報告範例" tabindex="-1">驗證報告範例 <a class="header-anchor" href="#驗證報告範例" aria-label="Permalink to &quot;驗證報告範例&quot;">​</a></h2><h3 id="通過的驗證報告" tabindex="-1">通過的驗證報告 <a class="header-anchor" href="#通過的驗證報告" aria-label="Permalink to &quot;通過的驗證報告&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 程式碼驗證報告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**產生時間**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2026-01-29 12:00:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**驗證結果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ✅ 通過</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 後端驗證: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端驗證: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 總體評估: 程式碼品質符合 MVP 標準，可以進入 Preview 階段</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 後端驗證詳情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 檔案完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檔案 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| .env.example | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| prisma/schema.prisma | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/index.ts | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/app.ts | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 相依性安裝</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 詳情: 所有相依性可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 編譯</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Prisma 驗證</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 詳情: Prisma schema 語法正確</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 測試執行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 測試數量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通過數量: 12</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失敗數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 程式碼模式檢查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檢查項 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 錯誤處理中介軟體 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 健康檢查端點 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 環境變數使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Prisma Client 匯入 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 測試檔案存在 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| dotenv 首行匯入 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 前端驗證詳情</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 檔案完整性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檔案 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| package.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| tsconfig.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| app.json | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| App.tsx | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| src/navigation/index.tsx | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 相依性安裝</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 詳情: 所有相依性可正常解析</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### TypeScript 編譯</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 測試執行</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 狀態: ✅</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 測試數量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通過數量: 8</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失敗數量: 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 程式碼模式檢查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 檢查項 | 狀態 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| SafeAreaView 使用 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Loading 元件 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Error 處理 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| API 呼叫封裝 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| React Native Web 相依性 | ✅ |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| async-storage 相依性 | ✅ |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 發現的問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">無嚴重問題或警告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修復建議</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">無需修復</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 結論</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">程式碼品質符合 MVP 標準，建議進入 Preview 階段。</span></span></code></pre></div><h3 id="失敗的驗證報告" tabindex="-1">失敗的驗證報告 <a class="header-anchor" href="#失敗的驗證報告" aria-label="Permalink to &quot;失敗的驗證報告&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 程式碼驗證報告</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**產生時間**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 2026-01-29 12:00:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**驗證結果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ❌ 失敗</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 摘要</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 後端驗證: ❌</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端驗證: ⚠️</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 總體評估: 後端存在嚴重問題，必須修復後才能繼續</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 發現的問題</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 嚴重問題 (必須修復)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TypeScript 編譯錯誤</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/controllers/items.ts:15</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤: Property &#39;title&#39; does not exist on type &#39;any&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 新增類型定義 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`const item: Item = req.body;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Prisma schema 驗證失敗</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: prisma/schema.prisma:10</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 錯誤: Invalid datasource provider &#39;sqlite&#39;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 將 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;sqlite&quot;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 改為 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`provider = &quot;postgresql&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 缺少必須檔案</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 檔案: src/middleware/error.ts</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 建立錯誤處理中介軟體</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 警告 (建議修復)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端測試失敗</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/screens/</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">__tests__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/HomeScreen.test.tsx</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 失敗: 2/8 測試失敗</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 修復測試案例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 缺少 Loading 元件</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 位置: src/components/</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建議: 建立 Loading 元件並正確使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 修復建議</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修復 TypeScript 錯誤：在 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/controllers/items.ts\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中新增類型定義</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新 Prisma schema：修改資料來源 provider 為 postgresql</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建立錯誤處理中介軟體：新增 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/middleware/error.ts\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修復前端測試：檢查並修復失敗的測試案例</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建立 Loading 元件：新增 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`src/components/Loading.tsx\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 結論</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">後端存在嚴重問題，必須修復後才能繼續。建議：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修復 TypeScript 編譯錯誤</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更新 Prisma schema</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 新增缺失的檔案</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 重新執行 Validation 階段</span></span></code></pre></div><h2 id="本課小結" tabindex="-1">本課小結 <a class="header-anchor" href="#本課小結" aria-label="Permalink to &quot;本課小結&quot;">​</a></h2><p>Validation 階段是流水線的品質保證環節，它確保生成的程式碼符合基本的品質標準。</p><p><strong>關鍵要點</strong>：</p><ol><li><strong>驗證流程</strong>：Validation Agent 自動檢查檔案完整性、相依性、編譯、測試等</li><li><strong>唯讀模式</strong>：只驗證不修改，使用 <code>--dry-run</code> 避免副作用</li><li><strong>問題分級</strong>：將問題分為嚴重、警告、資訊三級</li><li><strong>詳細報告</strong>：產生包含具體位置和修復建議的驗證報告</li><li><strong>結果判定</strong>：根據檢查結果判定通過/部分通過/失敗</li></ol><h2 id="下一課預告" tabindex="-1">下一課預告 <a class="header-anchor" href="#下一課預告" aria-label="Permalink to &quot;下一課預告&quot;">​</a></h2><blockquote><p>下一課我們學習 <strong><a href="./../stage-preview/">Preview 階段</a></strong>。</p><p>你會學到：</p><ul><li>如何產生執行說明文件</li><li>快速啟動指南</li><li>部署配置（Docker、CI/CD）</li></ul></blockquote><hr><h2 id="附錄-原始碼參考" tabindex="-1">附錄：原始碼參考 <a class="header-anchor" href="#附錄-原始碼參考" aria-label="Permalink to &quot;附錄：原始碼參考&quot;">​</a></h2><details><summary><strong>點擊展開查看原始碼位置</strong></summary><blockquote><p>更新時間：2026-01-29</p></blockquote><table tabindex="0"><thead><tr><th>功能</th><th>檔案路徑</th><th>行號</th></tr></thead><tbody><tr><td>Validation Agent 定義</td><td><a href="https://github.com/hyz1992/agent-app-factory/blob/main/agents/validation.agent.md" target="_blank" rel="noreferrer"><code>agents/validation.agent.md</code></a></td><td>1-320</td></tr><tr><td>流水線定義</td><td><a href="https://github.com/hyz1992/agent-app-factory/blob/main/pipeline.yaml" target="_blank" rel="noreferrer"><code>pipeline.yaml</code></a></td><td>79-96</td></tr></tbody></table><p><strong>關鍵約束</strong>：</p><ul><li>禁止修改任何程式碼檔案（<code>validation.agent.md:293</code>）</li><li>禁止實際安裝相依性，使用 <code>--dry-run</code>（<code>validation.agent.md:294</code>）</li><li>必須產生完整的驗證報告（<code>validation.agent.md:296</code>）</li><li>必須提供具體的修復建議（<code>validation.agent.md:298</code>）</li></ul><p><strong>驗證檢查項</strong>：</p><ul><li>檔案完整性檢查（<code>validation.agent.md:24-42</code>）</li><li>相依性安裝檢查（<code>validation.agent.md:43-53</code>）</li><li>TypeScript 編譯檢查（<code>validation.agent.md:55-65</code>）</li><li>Prisma Schema 驗證（<code>validation.agent.md:67-73</code>）</li><li>測試執行檢查（<code>validation.agent.md:75-85</code>）</li><li>程式碼規範檢查（<code>validation.agent.md:87-97</code>）</li><li>關鍵模式檢查（<code>validation.agent.md:99-122</code>）</li><li>常見問題掃描（<code>validation.agent.md:124-136</code>）</li></ul><p><strong>驗證結果判定</strong>：</p><ul><li>通過條件（<code>validation.agent.md:268-274</code>）</li><li>部分通過條件（<code>validation.agent.md:276-281</code>）</li><li>失敗條件（<code>validation.agent.md:283-288</code>）</li></ul><p><strong>執行流程</strong>：</p><ul><li>操作步驟（<code>validation.agent.md:303-313</code>）</li><li>輸出格式（<code>validation.agent.md:139-262</code>）</li></ul></details>`,114)])])}const c=i(l,[["render",p]]);export{g as __pageData,c as default};
