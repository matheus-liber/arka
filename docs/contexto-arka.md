# Contexto de Arka

## O cenário

Arka é um mundo de alta fantasia medieval, brasileiro, jogado principalmente em **Pathfinder 2e Remastered**. A inspiração central é Tolkien, mas a cosmologia, os nomes públicos e a história são próprios.

No princípio está **Ehvar**, o criador. Ele fez vinte e um **Eldares** (em três ordens) e, de cada um, sete **Bélios**. Juntos narraram Arka à existência. Os Eldares que desceram ao mundo são os **Teldares**. O Eldar rebelde é **Xerathis**; contra ele houve as Grandes Marchas. Há ainda **Entidades do Vazio** (Abysalith, Sutaita), externas à criação de Ehvar.

Raças mortais centrais: elfos (os primeiros), anões (obra de Kharzûn, soprada por Ehvar) e humanos (Amarion e Liria, após a Fonte da Vida).

A geografia ainda está se organizando no vault. Aparecem, entre outros:

- **Valbarra** — continente do conflito primordial (elfos, anões, Marchas)
- **Merídia** — muitos reinos e blocos políticos (Nova Solária, Tratado Nórdico, Aliança, etc.)
- **Zandora** — sul; o detalhe atual é a metrópole **Ash-Khala** (Pentarquia, hub comercial)
- **Kabash** (Di-Kabash) — teocracia faraônica, a mais antiga nação humana, culto das Aves do Deserto
- **Lunathar**, **Endor**, **Azhara / Salhum** — citados na lore, pouco indexados como pasta

Ash-Khala é o hub narrativo mais escrito: cidade-estado costeira de Zandora Ocidental, fachada próspera, miolo de corrupção, magia controlada pelo **Sigilato**.

## Quem escreve

Vários criadores brasileiros; o detalhamento da equipe fica para depois. A lore canônica está num **vault Obsidian compartilhado** no Google Drive, não neste Git.

- Atalho no Explorer: `G:\Meu Drive\Arka.lnk`
- Pasta real neste PC: `G:\.shortcut-targets-by-id\1DTqQBaxoD9p8m1jMlvLhvB9L058DP15Y\Arka`
- ID da pasta no Drive: `1DTqQBaxoD9p8m1jMlvLhvB9L058DP15Y`

## O site

Domínio: [https://arkarpg.com.br](https://arkarpg.com.br)

Objetivo: disponibilizar a lore do cenário — mapas, deuses, histórias, eventos, lugares, facções e, no caso de Ash-Khala, também as notas de conexão com Pathfinder 2e.

Política de publicação: **o conteúdo do vault vai ao site**, inclusive material de campanha (facções subterrâneas, NPCs, mecânicas). Exceção: o [glossário interno Tolkien → Arka](mapa-do-vault.md#glossario-interno) não vira página pública; o site usa só os nomes de Arka.

## Fonte editorial vs fonte de publicação

| Papel | Onde | Quem usa |
| --- | --- | --- |
| Fonte editorial | Google Drive / Obsidian | Equipe criativa |
| Fonte de publicação | `content/lore/` neste repositório | Next.js, CI, Vercel |
| Site | `app/` | Visitantes em arkarpg.com.br |

O build **não** aponta para `G:\`. Motivo: o caminho do Drive File Stream é local e instável, arquivos “somente online” chegam com 0 bytes, e um save no Obsidian não pode quebrar produção.

O sync (cron / agente) ainda não está implementado. O contrato está em [contrato-espelho.md](contrato-espelho.md). O caminho certo para o job periódico é a **Google Drive API**, não um watcher que dependa deste PC ligado. Um script local que lê o `G:\` serve só como protótipo.

## Estado atual do repositório

- Landing *Em Construção* em `app/`
- Documentação de contexto em `docs/`
- Pasta `content/lore/` reservada para o espelho (hoje só `.gitkeep`)
