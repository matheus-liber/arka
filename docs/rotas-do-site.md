# Rotas previstas do site

Esboço da enciclopédia. A fonte dos textos é **Arka — Lore Oficial** (Google Docs), não o vault Obsidian. Páginas-índice do esqueleto já existem em `app/`; o corpo oficial ainda não está em `content/lore/`.

Slugs em minúsculas, sem acento, hífens. Um documento `OFICIAL —` exportado para `content/lore/` mapeia para no máximo uma rota canônica.

## Implementar primeiro (há texto oficial no Drive)

| Rota | Fonte na lore oficial | Motivo |
| --- | --- | --- |
| `/` | `app/page.js` | landing atual |
| `/mundo` | índice | hub da enciclopédia |
| `/historia` | pasta `02` | ciclos oficiais |
| `/historia/dias-incontados` | `01/OFICIAL — Dias Incontados — Mito da Criação` | mito da criação |
| `/historia/primeiro-ciclo` | `02/OFICIAL — Primeiro Ciclo — Guerra Planar e Grandes Marchas` | Guerra Planar |
| `/mapas` (a criar) | `10` — mapas planares PNG | únicos arquivos de mídia oficiais agora |

Divindades, Ehvar e Ash-Khala continuam no esqueleto do site, mas **ainda não há** `OFICIAL —` nas pastas 03–06. Não inventar artigo a partir do diretório Obsidian antigo.

A árvore abaixo é o esqueleto já no ar. Só os artigos de história (e, quando exportados, planos e mapas) têm documento oficial no Drive hoje.

## Árvore

```
/                                landing (Em Construção, depois hub)
/mundo                           índice: astros, calendário, continentes, deuses, história
/calendario                      Calendário.md + Assets do calendário
/astros                          índice
/astros/seis-luas                quando deixar de ser stub
/divindades                      índice do panteão
/divindades/ehvar
/divindades/eldares
/divindades/eldares/:slug        Xerathis, Tharvion, Sylvara, …
/divindades/belios/:slug
/divindades/belios-de-xerathis/:slug
/divindades/belios-de-tharvion/:slug
/divindades/vazio/:slug          Abysalith, Sutaita
/historia
/historia/dias-incontados
/historia/primeiro-ciclo
/historia/segundo-ciclo          só quando o markdown existir de fato
/continentes                     só quando 03 tiver OFICIAL —
/meridia                         Merídia.md
/meridia/:reino                  Reinos/*.md já nomeados
/meridia/blocos/:slug            Pacto Verde, Tratado Nórdico, …
/valbarra
/kabash
/zandora                         stub até o continente ganhar texto
/zandora/ocidental
/zandora/ash-khala               ★ primeiro bloco de lugar
/zandora/ash-khala/distritos
/zandora/ash-khala/distritos/:slug
/zandora/ash-khala/governo
/zandora/ash-khala/pentarcas/:slug
/zandora/ash-khala/salhum
/zandora/ash-khala/salhum/:slug    Almirash, Zahiit, Harajûm
/zandora/ash-khala/sigilato
/zandora/ash-khala/sigilato/desastre
/zandora/ash-khala/faccoes
/zandora/ash-khala/faccoes/:slug
/zandora/ash-khala/pessoas
/zandora/ash-khala/pessoas/:slug
/zandora/ash-khala/sistema         Conexão com o Sistema (PF2e)
```

## Ash-Khala — slugs dos distritos e facções

Distritos: `o-portal`, `o-limiar`, `as-lamas`, `os-entrocados`, `a-grande-promenade`, `o-anel-arcano`, `porto-das-marcas`, `a-coroa`.

Facções: `cartel-da-seda`, `os-velados`, `cantico-de-abyssalite`, `confraria-dos-sem-selo`, `filhos-das-correntes`, `a-escarlate`.

Pentarcas: `zandora`, `di-kabash`, `jiangsu`, `nova-solaria`, `salhum`.

Pessoas (bloco novo): `casa-kodax`, `lucio-kodax`, `lion-kodax`. Não criar `/pessoas/lucio-kodax-legado`.

## O que não ganha rota

- Pasta `99 — Rascunhos e Propostas`
- Pasta `00 — Diretrizes e Índices` (AGENTS, changelog, glossário)
- Qualquer Doc sem prefixo `OFICIAL —`
- Pastas 03–09 enquanto estiverem vazias
- O vault Obsidian antigo

## Docs → rotas

Google Docs não usam wikilinks do Obsidian. A rota canônica sai do prefixo `OFICIAL —` e da pasta numerada:

| Documento | Rota |
| --- | --- |
| `01/OFICIAL — Dias Incontados — Mito da Criação` | `/historia/dias-incontados` |
| `02/OFICIAL — Primeiro Ciclo — Guerra Planar e Grandes Marchas` | `/historia/primeiro-ciclo` |
| `01/OFICIAL — Planos de Existência — Configuração Atual` | cosmologia / planos (rota a definir) |
| mapas PNG em `10` | `/mapas` (a criar) + `public/assets/mapas/` |

Colisões de nome resolvem pelo caminho do arquivo na lore oficial (pasta numerada + título `OFICIAL —`), não pelo título sozinho.

## Ordem de implementação sugerida

1. Landing (`/`) — já existe
2. Exportar e publicar o que já é `OFICIAL —`: Dias Incontados, Planos de Existência, Primeiro Ciclo, mapas planares
3. Manter o esqueleto de Divindades / Ash-Khala no ar como índice, sem preencher com o vault antigo
4. Geografia, povos, religiões, personagens — só quando 03–06 tiverem `OFICIAL —`
