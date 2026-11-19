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

Arka é um cenário brasileiro de RPG de alta fantasia medieval, feito principalmente para Pathfinder 2e. O site público é [arkarpg.com.br](https://arkarpg.com.br). A lore canônica está em **`G:\Meu Drive\Arka — Lore Oficial`** (Google Docs). **Não** ler o diretório antigo `Arka` (vault Obsidian) nem `Arka — Curadoria`.

Leia, nesta ordem, quando o trabalho envolver lore, conteúdo ou arquitetura do site:

1. [docs/contexto-arka.md](docs/contexto-arka.md) — o que é Arka e a política de publicação
2. [docs/mapa-do-vault.md](docs/mapa-do-vault.md) — o que existe na lore oficial e o grau de maturidade
3. [docs/contrato-espelho.md](docs/contrato-espelho.md) — como o Drive vira `content/lore/`
4. [docs/rotas-do-site.md](docs/rotas-do-site.md) — árvore de rotas prevista
5. [docs/estilizacao.md](docs/estilizacao.md) — cores, fontes, temas (`app/styles/tokens.css`)
6. [docs/assets.md](docs/assets.md) — artes em `public/assets/`
7. [docs/referencias.md](docs/referencias.md) — padrões de enciclopédias de cenário (PF, Realms, Tolkien, Tormenta)

# Regras de arquitetura

- A equipe escreve em **Arka — Lore Oficial** (Google Docs). Este Git publica um **espelho** em `content/lore/` (Markdown exportado). Nunca usar o vault Obsidian `Arka` como fonte.
- O espelho é atualizado **nesta máquina**, quando alguém pedir — não há cron na nuvem.
- O Next.js **não** deve ler `G:\` no `build` ou em produção. `.gdoc` não contém o texto no disco; exportar o Doc e gravar Markdown em `content/lore/`.
- Não copiar a pasta `99 — Rascunhos e Propostas` nem a `00 — Diretrizes e Índices` para páginas públicas.
- Só documentos com prefixo `OFICIAL —` (pastas 01–10) são elegíveis para o site.
- Glossário de nomes em `00` não vira artigo público até a equipe decidir o contrário.
- Identidade visual: só em [app/styles/tokens.css](app/styles/tokens.css). Não espalhar hex/rgb em componentes. Temas via `data-theme` no `<html>` (`dark`, `light`, `high-contrast`).
- Artes do site: só em [`public/assets/`](public/assets/), na taxonomia da enciclopédia. Não espalhar imagens em `app/` nem ao lado das páginas. Ver [docs/assets.md](docs/assets.md).
