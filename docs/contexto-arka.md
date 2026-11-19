# Contexto de Arka

## O cenário

Arka é um mundo de alta fantasia medieval, brasileiro, jogado principalmente em **Pathfinder 2e Remastered**. A inspiração central é Tolkien, mas a cosmologia, os nomes públicos e a história são próprios.

No princípio está **Ehvar**, o criador. Ele fez vinte e um **Eldares** (em três ordens) e, de cada um, sete **Bélios**. Juntos narraram Arka à existência. Os Eldares que desceram ao mundo são os **Teldares**. O Eldar rebelde é **Xerathis**; contra ele houve as Grandes Marchas. Há ainda **Entidades do Vazio** (Abysalith, Sutaita), externas à criação de Ehvar.

Raças mortais centrais: elfos (os primeiros), anões (obra de Kharzûn, soprada por Ehvar) e humanos (Amarion e Liria, após a Fonte da Vida).

A geografia, os povos e o panteão detalhado estão sendo reescritos na lore oficial (pastas 03–09 ainda vazias). O que já está oficial no Drive: mito da criação, planos de existência, Primeiro Ciclo (Guerra Planar e Grandes Marchas), mais dois mapas planares.

## Quem escreve

Vários criadores brasileiros. A lore **canônica** está em:

**`G:\Meu Drive\Arka — Lore Oficial`**

Textos em Google Docs (`.gdoc` neste PC). Não usar o diretório antigo `Arka` (vault Obsidian, `Arka.lnk`). Não usar `Arka — Curadoria` como fonte do site.

Inventário: [mapa-do-vault.md](mapa-do-vault.md).

## O site

Domínio: [https://arkarpg.com.br](https://arkarpg.com.br)

Objetivo: disponibilizar a lore oficial do cenário — cosmologia, história, mapas, e o restante quando as pastas 03–09 tiverem documentos `OFICIAL —`.

Política de publicação: só o que estiver marcado **OFICIAL —** nas pastas 01–10. Pasta 99 (rascunhos) e pasta 00 (diretrizes) não viram enciclopédia.

## Fonte editorial vs fonte de publicação

| Papel | Onde | Quem usa |
| --- | --- | --- |
| Fonte editorial | `G:\Meu Drive\Arka — Lore Oficial` (Google Docs) | Equipe criativa |
| Fonte de publicação | `content/lore/` neste repositório (Markdown exportado) | Next.js, CI, Vercel |
| Artes do site | `public/assets/` | Visitantes |
| Site | `app/` | Visitantes em arkarpg.com.br |

O build **não** aponta para `G:\`. Os `.gdoc` não têm o texto no disco; a cópia é exportar o Doc e gravar Markdown em `content/lore/`. Contrato: [contrato-espelho.md](contrato-espelho.md). Local e sob demanda; sem cron na nuvem.

## Estado atual do repositório

- Landing *Em Construção* em `app/`
- Enciclopédia esqueleto (rotas sem o texto oficial ainda)
- `content/lore/` reservada para o espelho (hoje só `.gitkeep`)
