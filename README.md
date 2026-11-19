# Arka

Site de [arkarpg.com.br](https://arkarpg.com.br): enciclopédia pública do cenário de RPG **Arka** (alta fantasia medieval brasileira, Pathfinder 2e).

Hoje o site está na landing *Em Construção*. A lore canônica vive em **Arka — Lore Oficial** no Google Drive (Google Docs). Este repositório publica um **espelho** em Markdown — o Next.js não lê o Drive na hora do build.

## Stack

- Next.js 16 e React 19
- App Router em `app/`
- Identidade visual em [`app/styles/tokens.css`](app/styles/tokens.css) — ver [docs/estilizacao.md](docs/estilizacao.md)

## Arquitetura

```
Equipe (Google Docs em Arka — Lore Oficial)
        ↓ exportar OFICIAL — para Markdown, neste PC
content/lore/   ← snapshot publicado
        ↓ Next.js
arkarpg.com.br
```

Não há cronjob. A lore entra no site quando alguém exportar os Docs oficiais para `content/lore/` e seguir o fluxo Git. Não usar o diretório Obsidian `Arka`.

Documentação interna:

- [docs/contexto-arka.md](docs/contexto-arka.md) — o cenário, a equipe e a política de publicação
- [docs/mapa-do-vault.md](docs/mapa-do-vault.md) — inventário da lore oficial
- [docs/contrato-espelho.md](docs/contrato-espelho.md) — o que entra em `content/lore/`
- [docs/rotas-do-site.md](docs/rotas-do-site.md) — rotas previstas
- [docs/estilizacao.md](docs/estilizacao.md) — cores, fontes e temas
- [docs/assets.md](docs/assets.md) — artes em `public/assets/`
- [docs/referencias.md](docs/referencias.md) — estrutura de wikis de RPG (referência de IA)

## Desenvolvimento

```bash
npm install
npm run dev
```
