# Instruções gerais

- Mantenha as alterações focadas no objetivo solicitado e consistentes com os padrões existentes.
- Evite adicionar dependências quando a funcionalidade puder ser implementada com os recursos já disponíveis.

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
