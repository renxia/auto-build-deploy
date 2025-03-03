import{_ as s,c as e,o as n,a1 as p}from"./chunks/framework.DILC4Csi.js";const m=JSON.parse('{"title":"Sisyphus: Orquestração Multi-Agente | oh-my-opencode","description":"Aprenda como funciona o orquestrador Sisyphus e seu mecanismo de delegação de tarefas. Domine as melhores práticas de colaboração multi-agente IA para aumentar a eficiência de desenvolvimento.","frontmatter":{"title":"Sisyphus: Orquestração Multi-Agente | oh-my-opencode","sidebarTitle":"Desenvolvimento Multi-Agente","subtitle":"Sisyphus: Orquestração Multi-Agente | oh-my-opencode","description":"Aprenda como funciona o orquestrador Sisyphus e seu mecanismo de delegação de tarefas. Domine as melhores práticas de colaboração multi-agente IA para aumentar a eficiência de desenvolvimento.","tags":["orchestration","sisyphus","agent"],"prerequisite":["/pt/code-yeongyu/oh-my-opencode/start/installation/"],"order":20},"headers":[],"relativePath":"pt/code-yeongyu/oh-my-opencode/start/sisyphus-orchestrator/index.md","filePath":"pt/code-yeongyu/oh-my-opencode/start/sisyphus-orchestrator/index.md"}'),i={name:"pt/code-yeongyu/oh-my-opencode/start/sisyphus-orchestrator/index.md"};function o(t,a,l,r,d,c){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="orquestrador-principal-pensar-e-executar-como-um-engenheiro-senior" tabindex="-1">Orquestrador Principal: Pensar e Executar como um Engenheiro Sênior <a class="header-anchor" href="#orquestrador-principal-pensar-e-executar-como-um-engenheiro-senior" aria-label="Permalink to &quot;Orquestrador Principal: Pensar e Executar como um Engenheiro Sênior&quot;">​</a></h1><h2 id="o-que-voce-aprendera" tabindex="-1">O Que Você Aprenderá <a class="header-anchor" href="#o-que-voce-aprendera" aria-label="Permalink to &quot;O Que Você Aprenderá&quot;">​</a></h2><ul><li>Entenda como o Sisyphus coordena o trabalho como uma equipe de desenvolvimento real</li><li>Domine as melhores práticas de delegação de tarefas, permitindo que diferentes agentes especialistas colaborem em tarefas complexas</li><li>Aprenda a aumentar drasticamente a eficiência de desenvolvimento através de tarefas em paralelo em segundo plano</li><li>Saiba quando deixar o agente trabalhar sozinho e quando delegar para especialistas</li></ul><h2 id="seu-problema-atual" tabindex="-1">Seu Problema Atual <a class="header-anchor" href="#seu-problema-atual" aria-label="Permalink to &quot;Seu Problema Atual&quot;">​</a></h2><p>Você pode ter encontrado esses problemas:</p><ul><li>Agentes IA &quot;desistem no meio do caminho&quot;, esquecendo o objetivo enquanto escrevem</li><li>O mesmo arquivo é modificado repetidamente, precisando ser relido a cada vez</li><li>Você quer que a IA faça muitas coisas, mas só pode esperar uma por uma na fila</li><li>O agente escreve código, mas você ainda precisa verificar se está correto e se não quebrou outras funcionalidades</li></ul><p><strong>Causa raiz</strong>: Você está pedindo a um &quot;assistente universal&quot; para fazer todo o trabalho, mas especialistas entendem de tarefas especializadas.</p><h2 id="quando-usar-esta-abordagem" tabindex="-1">Quando Usar Esta Abordagem <a class="header-anchor" href="#quando-usar-esta-abordagem" aria-label="Permalink to &quot;Quando Usar Esta Abordagem&quot;">​</a></h2><p>O Sisyphus é seu orquestrador principal, adequado para estes cenários:</p><table tabindex="0"><thead><tr><th>Cenário</th><th>Adequado</th><th>Alternativa</th></tr></thead><tbody><tr><td>Desenvolvimento de funcionalidades complexas (3+ etapas)</td><td>✅ Altamente recomendado</td><td>Prometheus + Atlas (requer planejamento detalhado)</td></tr><tr><td>Correção rápida de bugs conhecidos</td><td>✅ Adequado</td><td>Deixe o Sisyphus fazer diretamente</td></tr><tr><td>Precisa pesquisar múltiplos repositórios/documentos</td><td>✅ Altamente recomendado</td><td>Use delegação paralela do Sisyphus</td></tr><tr><td>Modificação simples de arquivo único</td><td>✅ Pode</td><td>Edição direta (mais simples)</td></tr><tr><td>Precisa de planejamento detalhado do projeto</td><td>⚠️ Não recomendado</td><td>Use Prometheus primeiro para gerar o plano</td></tr></tbody></table><h2 id="ideia-central" tabindex="-1">Ideia Central <a class="header-anchor" href="#ideia-central" aria-label="Permalink to &quot;Ideia Central&quot;">​</a></h2><p>O <strong>Sisyphus</strong> é o agente orquestrador principal, coordenando múltiplos especialistas IA como uma equipe de desenvolvimento real. Através de mecanismos de separação de responsabilidades e delegação paralela, ele permite que sub-agentes especialistas explorem seus pontos fortes, alcançando colaboração eficiente.</p><p>O Sisyphus não é uma &quot;IA mais inteligente&quot;, ele é um <strong>sistema de orquestração</strong>.</p><h3 id="separacao-de-responsabilidades" tabindex="-1">Separação de Responsabilidades <a class="header-anchor" href="#separacao-de-responsabilidades" aria-label="Permalink to &quot;Separação de Responsabilidades&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    User[👤 Você] --&gt; Sisyphus[⚡ Sisyphus&lt;br/&gt;Orquestrador Principal]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Explore[🔍 Explore&lt;br/&gt;Pesquisa de código]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Librarian[📚 Librarian&lt;br/&gt;Pesquisa de documentação]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Oracle[🧠 Oracle&lt;br/&gt;Consultoria de arquitetura]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sisyphus --&gt; Junior[🪨 Sisyphus-Junior&lt;br/&gt;Execução de tarefas]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Explore -.paralelo.-&gt; Sisyphus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Librarian -.paralelo.-&gt; Sisyphus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Oracle -.-&gt; Sisyphus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Junior -.-&gt; Sisyphus</span></span></code></pre></div><p>O <strong>Sisyphus não escreve código</strong>, ele é responsável por:</p><ol><li><strong>Entender sua necessidade real</strong> (não apenas ouvir o significado superficial)</li><li><strong>Julgar quem é melhor nisso</strong> (não fazer tudo sozinho)</li><li><strong>Delegar tarefas em paralelo</strong> (deixar múltiplos especialistas trabalharem simultaneamente)</li><li><strong>Verificar resultados</strong> (nunca confiar cegamente em &quot;concluí&quot;)</li></ol><h3 id="por-que-sisyphus" tabindex="-1">Por que Sisyphus? <a class="header-anchor" href="#por-que-sisyphus" aria-label="Permalink to &quot;Por que Sisyphus?&quot;">​</a></h3><p>Na mitologia grega, Sísifo foi punido a empurrar uma pedra montanha acima eternamente.</p><p>A filosofia de design deste sistema: <strong>O agente deve empurrar a pedra até o fim (completar todos os TODOs) antes de parar</strong>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Isso não é punição, é um mecanismo de garantia de qualidade. Você não quer que a IA desista no meio e deixe uma bagunça.</p></div><h3 id="budget-de-pensamento-de-32k" tabindex="-1">Budget de Pensamento de 32k <a class="header-anchor" href="#budget-de-pensamento-de-32k" aria-label="Permalink to &quot;Budget de Pensamento de 32k&quot;">​</a></h3><p>O Sisyphus usa <strong>Claude Opus 4.5 + 32k thinking budget</strong>.</p><p>Para que serve isso?</p><table tabindex="0"><thead><tr><th>Baixo budget (sem thinking)</th><th>32k thinking budget</th></tr></thead><tbody><tr><td>Começa a escrever código diretamente</td><td>Analisa profundamente os requisitos, avalia complexidade, decompõe tarefas</td></tr><tr><td>Facilmente perde casos extremos</td><td>Descobre problemas e riscos potenciais antecipadamente</td></tr><tr><td>Percebe que está errado no meio do caminho</td><td>Escolhe a solução ótima desde o início</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Altamente recomendado configurar o modelo <strong>Opus 4.5</strong> para o Sisyphus. A experiência com outros modelos diminuirá significativamente.</p></div><h2 id="siga-comigo" tabindex="-1">Siga Comigo <a class="header-anchor" href="#siga-comigo" aria-label="Permalink to &quot;Siga Comigo&quot;">​</a></h2><h3 id="passo-1-criar-um-projeto-de-teste" tabindex="-1">Passo 1: Criar um projeto de teste <a class="header-anchor" href="#passo-1-criar-um-projeto-de-teste" aria-label="Permalink to &quot;Passo 1: Criar um projeto de teste&quot;">​</a></h3><p><strong>Por que</strong> Você precisa de um projeto executável para observar o comportamento do Sisyphus. mkdir my-app &amp;&amp; cd my-app npm create next-app@latest . -- --typescript --tailwind --eslint --no-src-dir npm install</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**O que você deve ver**: Projeto inicializado, pode executar \`npm run dev\` para iniciar.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Passo 2: Dar ao Sisyphus uma tarefa complexa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Abra o projeto no OpenCode, digite:</span></span></code></pre></div><p>Adicionar funcionalidade de login de usuário, incluindo:</p><ul><li>Login com email e senha</li><li>Armazenamento de token JWT</li><li>Rotas protegidas</li><li>Verificação de status de login</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>Observe a reação do Sisyphus.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**O que você deve ver**:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. O Sisyphus não começará a escrever código diretamente</span></span>
<span class="line"><span>2. Ele primeiro cria uma lista TODO (decompondo a tarefa em detalhes)</span></span>
<span class="line"><span>3. Avalia padrões do código (verifica configuração, estrutura de arquivos)</span></span>
<span class="line"><span>4. Pode fazer algumas perguntas de esclarecimento</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Ponto de verificação ✅**: Verifique o painel TODO do OpenCode, você deve ver algo como:</span></span></code></pre></div><p>□ Instalar dependências necessárias (bcrypt, jsonwebtoken) □ Criar modelo de usuário e definições de tipos □ Implementar endpoint de API de login □ Criar ferramentas de assinatura e verificação JWT □ Adicionar middleware de rotas protegidas □ Implementar formulário de login frontend □ Adicionar gerenciamento de estado de login</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### Passo 3: Observar delegação paralela (momento crucial)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Durante a implementação, o Sisyphus pode:</span></span></code></pre></div><p>[Background Task Started]</p><ul><li>Task ID: bg_abc123</li><li>Agent: explore</li><li>Prompt: &quot;Find existing auth patterns in this codebase...&quot;</li></ul><p>[Background Task Started]</p><ul><li>Task ID: bg_def456</li><li>Agent: librarian</li><li>Prompt: &quot;Research JWT best practices for Next.js...&quot;</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**Isso é crucial**: O Sisyphus **não espera** essas tarefas completarem, ele continua trabalhando.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Quando você precisa dos resultados, ele chama \`background_output(task_id=&quot;...&quot;)\` para obtê-los.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Por que é tão rápido?**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| Modo serial (tradicional) | Modo paralelo (Sisyphus) |</span></span>
<span class="line"><span>|--- | ---|</span></span>
<span class="line"><span>| Pesquisa de código (2 minutos) | ⏳ Pesquisa de código (2 minutos) |</span></span>
<span class="line"><span>| Esperando... | ⏳ Pesquisa de documentação (2 minutos, simultâneo) |</span></span>
<span class="line"><span>| Pesquisa de documentação (2 minutos) | Começar implementação (tempo total 2 minutos) |</span></span>
<span class="line"><span>| Começar implementação (2 minutos) |  |</span></span>
<span class="line"><span>| **Tempo total 6 minutos** | **Tempo total 4 minutos (economia 33%)** |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Passo 4: Mecanismo de verificação</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Quando o Sisyphus declara &quot;tarefa concluída&quot;, ele:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Executa \`lsp_diagnostics\` para verificar erros</span></span>
<span class="line"><span>2. Executa \`npm run build\` para garantir que a build passe</span></span>
<span class="line"><span>3. Se houver testes, executa a suíte de testes</span></span>
<span class="line"><span>4. Marca o TODO como \`completed\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Ponto de verificação ✅**: Verifique a saída do terminal, você deve ver algo como:</span></span></code></pre></div><p>✓ Running diagnostics on changed files... ✓ No errors found ✓ Build passed (exit code 0) ✓ All tests passed</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>Se qualquer verificação falhar, o Sisyphus corrigirá imediatamente, nunca deixando uma bagunça.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Passo 5: Avisos sobre armadilhas</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### ❌ Abordagem errada: Interromper o rastreamento TODO do Sisyphus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Você vê o Sisyphus fazendo tarefas, e está ansioso para apressar:</span></span></code></pre></div><p>Escreva o código rápido! Não faça planos!</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**Problema**: O Sisyphus pulará o TODO e escreverá código diretamente, mas pode perder casos extremos.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Abordagem correta**:</span></span></code></pre></div><p>Espere o Sisyphus completar o planejamento. Se achar o planejamento errado, faça sugestões específicas de melhoria: &quot;O passo 3 do TODO deve considerar primeiro a solução de migração de banco de dados.&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### ❌ Abordagem errada: Não permitir que o Sisyphus delegue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Você desabilitou todos os agentes especialistas na configuração, deixando apenas o Sisyphus.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Problema**: O Sisyphus tentará fazer tudo sozinho, mas pode não ser especialista o suficiente.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Abordagem correta**:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mantenha a configuração padrão, deixe o Sisyphus delegar automaticamente para especialistas:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| Tarefa | Sisyphus faz sozinho | Delegar para especialista |</span></span>
<span class="line"><span>|--- | --- | ---|</span></span>
<span class="line"><span>| Modificação simples de arquivo único | ✅ Pode | Não necessário |</span></span>
<span class="line"><span>| Pesquisa de código | ⚠️ Lento | ✅ Explore (mais rápido) |</span></span>
<span class="line"><span>| Pesquisa de documentação | ⚠️ Pode ser impreciso | ✅ Librarian (mais profissional) |</span></span>
<span class="line"><span>| Decisões de arquitetura | ❌ Não recomendado | ✅ Oracle (mais autoritativo) |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Resumo da Lição</span></span>
<span class="line"><span></span></span>
<span class="line"><span>O poder do Sisyphus não está em ser &quot;mais inteligente&quot;, mas sim em:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **Separação de responsabilidades**: Orquestrador principal + equipe especializada, não trabalho solitário</span></span>
<span class="line"><span>2. **Pensamento profundo**: Budget de pensamento de 32k garante que nenhum detalhe seja perdido</span></span>
<span class="line"><span>3. **Execução paralela**: Tarefas em segundo plano permitem que múltiplos especialistas trabalhem simultaneamente</span></span>
<span class="line"><span>4. **Verificação forçada**: Sem evidência = tarefa não concluída</span></span>
<span class="line"><span>5. **Rastreamento TODO**: Desistir no meio não é permitido</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Princípios centrais**:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: tip</span></span>
<span class="line"><span>**Delegação padrão**: A menos que a tarefa seja extremamente simples (arquivo único, local conhecido), priorize delegar para especialistas ou usar Category+Skill.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Próxima Lição</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; Na próxima lição, aprenderemos sobre o **[Modo Ultrawork](../ultrawork-mode/)**, ativando todas as funcionalidades com um clique, permitindo que o Sisyphus dê o seu melhor em tarefas complexas.</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt; Você aprenderá:</span></span>
<span class="line"><span>&gt; - Como usar a palavra-chave \`ultrawork\` para iniciar tarefas rapidamente</span></span>
<span class="line"><span>&gt; - Quais capacidades adicionais o modo Ultrawork ativa</span></span>
<span class="line"><span>&gt; - Quando usar Ultrawork e quando usar Prometheus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Apêndice: Referência de Código Fonte</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;details&gt;</span></span>
<span class="line"><span>&lt;summary&gt;&lt;strong&gt;Clique para expandir e ver localizações do código fonte&lt;/strong&gt;&lt;/summary&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; Tempo de atualização: 2026-01-26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| Funcionalidade | Caminho do arquivo | Linha |</span></span>
<span class="line"><span>|--- | --- | ---|</span></span>
<span class="line"><span>| Fábrica de agente Sisyphus | [\`src/agents/sisyphus.ts\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/sisyphus.ts) | 419-450 |</span></span>
<span class="line"><span>| Prompt principal do Sisyphus | [\`src/agents/sisyphus.ts\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/sisyphus.ts) | 17-416 |</span></span>
<span class="line"><span>| Metadados de agente e configuração de modelo | [\`src/agents/AGENTS.md\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/AGENTS.md) | 24-36 |</span></span>
<span class="line"><span>| Restrições de permissões de ferramentas | [\`src/agents/AGENTS.md\`](https://github.com/code-yeongyu/oh-my-opencode/blob/main/src/agents/AGENTS.md) | 44-51 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Configurações chave**:</span></span>
<span class="line"><span>- **Thinking Budget**: 32k tokens (apenas modelos Anthropic)</span></span>
<span class="line"><span>- **Temperature**: 0.1 (agentes de código com temperatura baixa fixa)</span></span>
<span class="line"><span>- **Max Tokens**: 64000</span></span>
<span class="line"><span>- **Modelo recomendado**: anthropic/claude-opus-4-5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Fluxo de trabalho principal** (do código fonte):</span></span>
<span class="line"><span>- **Fase 0**: Intent Gate (classificação de intenção, linhas 53-103)</span></span>
<span class="line"><span>- **Fase 1**: Codebase Assessment (avaliação do código, linhas 107-130)</span></span>
<span class="line"><span>- **Fase 2A**: Exploration &amp; Research (exploração e pesquisa, linhas 132-172)</span></span>
<span class="line"><span>- **Fase 2B**: Implementation (implementação, linhas 176-263)</span></span>
<span class="line"><span>- **Fase 2C**: Failure Recovery (recuperação de falha, linhas 266-283)</span></span>
<span class="line"><span>- **Fase 3**: Completion (conclusão, linhas 286-302)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Restrições chave**:</span></span>
<span class="line"><span>- **Tarefas não triviais devem criar TODO** (linha 311)</span></span>
<span class="line"><span>- **Tarefas em segundo plano devem ser paralelas** (linhas 144-162)</span></span>
<span class="line"><span>- **Deve verificar resultados** (linhas 254-262)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/details&gt;</span></span></code></pre></div>`,46)])])}const h=s(i,[["render",o]]);export{m as __pageData,h as default};
