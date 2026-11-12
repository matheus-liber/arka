# Arka

Site de [arkarpg.com.br](https://arkarpg.com.br): enciclopédia pública do cenário de RPG **Arka** (alta fantasia medieval brasileira, Pathfinder 2e).

Hoje o site está na landing *Em Construção*. A lore vive no vault Obsidian compartilhado no Google Drive. Este repositório vai publicar um **espelho versionado** dessa lore — o Next.js não lê o Drive na hora do build.

## Stack

- Next.js 16 e React 19
- App Router em `app/`

## Arquitetura

```
Equipe (Obsidian / Google Drive)
        ↓ agente de sync (ainda não implementado)
content/lore/   ← snapshot publicado
        ↓ Next.js
arkarpg.com.br
```

Documentação interna:

- [docs/contexto-arka.md](docs/contexto-arka.md) — o cenário, a equipe e a política de publicação
- [docs/mapa-do-vault.md](docs/mapa-do-vault.md) — inventário do vault
- [docs/contrato-espelho.md](docs/contrato-espelho.md) — o que entra em `content/lore/`
- [docs/rotas-do-site.md](docs/rotas-do-site.md) — rotas previstas

## Desenvolvimento

```bash
npm install
npm run dev
```
