# Contrato do espelho `content/lore/`

Fonte editorial: pasta **Arka — Lore Oficial** no Google Drive (`G:\Meu Drive\Arka — Lore Oficial`). Os textos são Google Docs (`.gdoc` neste PC). `content/lore/` neste repositório é o snapshot que o site constrói.

Não usar o vault Obsidian antigo (`Arka.lnk` / `shortcut-targets-by-id\...\Arka`) nem `Arka — Curadoria`.

A cópia é **local e sob demanda**, neste PC. Não há cron na nuvem.

## Diretório de destino

Preservar a numeração e os nomes das pastas 00–10, sem a pasta 99.

```
content/lore/
  01 — Cosmologia e Criação/
    OFICIAL — Dias Incontados — Mito da Criação.md
    OFICIAL — Planos de Existência — Configuração Atual.md
  02 — História e Cronologia/
    OFICIAL — Primeiro Ciclo — Guerra Planar e Grandes Marchas.md
  10 — Recursos Visuais e Multimídia/
    Mapa planar - Estrutura e coordenadas.png
    …
```

Google Docs entram **exportados para Markdown** (ou HTML) no espelho. O Next.js não lê `.gdoc`. O `.gitkeep` de `content/lore/` é só do Git.

Não espelhar para a raiz do repo nem para `app/`.

## Copiar

- Documentos com prefixo `OFICIAL —` nas pastas `01`–`10`, depois de exportar para Markdown
- Imagens e mídia reais em `10 — Recursos Visuais e Multimídia` (PNG, etc.) — no espelho e, para o site servir, também em [`public/assets/`](../public/assets/) conforme [assets.md](assets.md)

## Não copiar

- Pasta `99 — Rascunhos e Propostas`
- `00 — Diretrizes e Índices` (protocolo AGENTS, estilo literário, changelog, glossário) — não são artigos públicos
- `desktop.ini` e lixo do Drive
- O vault Obsidian antigo e `Arka — Curadoria`
- Glossário de nomes como página de enciclopédia, até decisão explícita da equipe

## Drafts

Não gerar rota para:

1. Qualquer arquivo em `99`
2. Google Doc sem prefixo `OFICIAL —`
3. Pasta 01–10 ainda vazia
4. Export com 0 bytes / falha de download

## Como a cópia roda

Neste PC, quando for atualizar o site:

1. Abrir o Doc em `G:\Meu Drive\Arka — Lore Oficial` (o `.gdoc` é só atalho; o texto está na nuvem).
2. Exportar o `OFICIAL —` para Markdown.
3. Gravar em `content/lore/` na pasta numerada correspondente.
4. Copiar mapas de `10` para `public/assets/mapas/` (e opcionalmente o espelho).
5. Commit na branch de feature e empurrar para `development`.

Frequência: a que for útil. Não há agendamento automático.

O Next.js só lê `content/lore/`, `public/` e `app/`. Zero I/O no Google Drive em `next build` / `next start`.

## Fora deste contrato

- Não bindar `fs` em `G:\` no App Router
- Não publicar rascunhos da pasta 99
- Não voltar a tratar o vault Obsidian como canônico
