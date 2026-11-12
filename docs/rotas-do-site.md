# Rotas previstas do site

Esboço alinhado à taxonomia do vault. Nenhuma dessas rotas de enciclopédia está implementada ainda — `app/` só tem a landing.

Slugs em minúsculas, sem acento, hífens. Uma nota no espelho (`content/lore/...`) mapeia para no máximo uma rota canônica.

## Implementar primeiro

| Rota | Fonte no vault | Motivo |
| --- | --- | --- |
| `/` | `app/page.js` | landing atual |
| `/mundo` | `O Mundo/O Mundo.md` | índice da enciclopédia |
| `/divindades` | `O Mundo/Divindades/Divindades.md` | panteão maduro |
| `/divindades/ehvar` | `O Mundo/Divindades/Ehvar.md` | criador |
| `/historia` | pasta `História Geral` | ciclo 0 e 1 já são artigos longos |
| `/historia/dias-incontados` | `0 - Dias incontados.md` | criação |
| `/historia/primeiro-ciclo` | `1 - Primeiro ciclo.md` | Marchas |
| `/zandora/ash-khala` | `.../Ash-Khala.md` | primeiro bloco de **lugar** completo |

Ash-Khala é o primeiro lugar a ganhar árvore própria (distritos, governo, facções). Cosmologia e história abrem o site; Ash-Khala mostra profundidade de campanha.

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
/continentes                     Continentes.md (sem listar Untitled como página)
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

- `Untitled*.md` e arquivos 0 bytes — ver [contrato-espelho.md](contrato-espelho.md)
- `Assets/docs/Glossário.md`
- `Mito da criação.md` vazio (o canônico é `/historia/dias-incontados`)
- Tooling do vault (`.obsidian`, `.claude`, `.claudian`)
- Ciclos 2–4 enquanto permanecerem vazios

## Wikilinks → rotas (exemplos)

| Wikilink | Rota |
| --- | --- |
| `[[Ehvar]]` | `/divindades/ehvar` |
| `[[Eldares/Xerathis\|Xerathis]]` | `/divindades/eldares/xerathis` |
| `[[0 - Dias incontados]]` | `/historia/dias-incontados` |
| `[[Ash-Khala]]` | `/zandora/ash-khala` |
| `[[O Portal]]` (contexto Ash-Khala) | `/zandora/ash-khala/distritos/o-portal` |
| `[[Kabash]]` | `/kabash` |
| `[[Valbarra]]` | `/valbarra` |

Colisões de nome (vários `Untitled`, ou o mesmo rótulo em pastas diferentes) resolvem pelo caminho da nota no vault, não pelo título sozinho.

## Ordem de implementação sugerida

1. Landing (`/`) — já existe
2. Casca da enciclopédia: `/mundo`, `/divindades`, `/historia` e as páginas já densas (Ehvar, ciclos 0–1, lista de Eldares)
3. **Ash-Khala** e filhos (distritos → governo/pentarcas → facções → pessoas → sistema)
4. Kabash e Merídia (reinos que já têm arquivo nomeado)
5. Calendário, astros, mapas — quando os assets estiverem no espelho e as notas deixarem de ser stub
6. Resto dos continentes quando o vault sair de `Untitled`
