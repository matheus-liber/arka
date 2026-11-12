# Instruções gerais

- Mantenha as alterações focadas no objetivo solicitado e consistentes com os padrões existentes.
- Evite adicionar dependências quando a funcionalidade puder ser implementada com os recursos já disponíveis.

# Fluxo Git (obrigatório)

Nunca implemente nem faça commit direto na `main` nem na `development`. Sempre:

1. **Criar uma branch nova** a partir de `development` (`feat/...`, `fix/...`, etc.) e trabalhar nela.
2. **Empurrar para `development`** — merge da branch de trabalho em `development` (PR ou merge) e push. É o ensaio (Vercel da `development`).
3. **Empurrar para `main`** — merge de `development` em `main` e push. A `main` é o que vai para [arkarpg.com.br](https://arkarpg.com.br).

Por padrão, **não** promover cada feature da `development` para a `main`. Esperar um **pacote maior** (várias features ou um marco redondo: esqueleto + espelho da lore, um bloco de Ash-Khala completo, etc.). Só então fazer o passo 3.

Não pule etapas. Não abra PR de feature direto para `main`. Não faça push de WIP na `main`. Não peça merge `development` → `main` no fim de cada tarefa pequena.

# Contexto do projeto

Arka é um cenário brasileiro de RPG de alta fantasia medieval, feito principalmente para Pathfinder 2e. O site público é [arkarpg.com.br](https://arkarpg.com.br). A lore canônica é escrita pela equipe no vault Obsidian compartilhado no Google Drive — não neste repositório.

Leia, nesta ordem, quando o trabalho envolver lore, conteúdo ou arquitetura do site:

1. [docs/contexto-arka.md](docs/contexto-arka.md) — o que é Arka e a política de publicação
2. [docs/mapa-do-vault.md](docs/mapa-do-vault.md) — o que existe no Drive e o grau de maturidade
3. [docs/contrato-espelho.md](docs/contrato-espelho.md) — como o Drive vira `content/lore/`
4. [docs/rotas-do-site.md](docs/rotas-do-site.md) — árvore de rotas prevista

# Regras de arquitetura

- A equipe escreve no Google Drive / Obsidian. Este Git publica um **espelho** em `content/lore/`.
- O Next.js **não** deve ler `G:\` nem qualquer caminho do Google Drive no `build` ou em runtime de produção.
- Não copiar `.obsidian`, `.claude`, `.claudian` nem `desktop.ini` para o espelho.
- Arquivos vazios (0 bytes) e notas `Untitled*.md` não viram página pública.
- O glossário Tolkien → Arka em `Assets/docs/Glossário.md` é ferramenta interna da equipe. Não publicar como página de lore; no site, usar só os nomes de Arka.
- A política do site é publicar a lore do vault (cosmologia, geografia, história, Ash-Khala, facções, notas de sistema). O glossário de nomes da Terra-média é a exceção.
