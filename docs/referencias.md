# Referências de estrutura — enciclopédias de cenário

Levantamento feito para orientar a IA do site Arka. Não copiar visual nem texto desses sites; copiar **padrões de informação**.

Data do levantamento: 12 de novembro de 2026.

## O que foi olhado

| Site | O que é | URL |
| --- | --- | --- |
| PathfinderWiki | Enciclopédia de Golarion (Paizo / PF1e–2e) | https://pathfinderwiki.com |
| Absalom (artigo) | Cidade-hub, análogo de Ash-Khala | https://pathfinderwiki.com/wiki/Absalom |
| Help: deity article | Molde oficial de artigo de deus | https://pathfinderwiki.com/wiki/Help:Writing_an_article_about_a_deity |
| Portal/Religion | Panteão navegável por região e tipo | https://pathfinderwiki.com/wiki/PathfinderWiki:Portal/Religion |
| Campaign Setting (sumário) | Livro-base de cenário Paizo | https://pathfinderwiki.com/wiki/Campaign_Setting |
| Forgotten Realms Wiki | Enciclopédia enorme de Faerûn | https://forgottenrealms.fandom.com |
| Portal:Geography / Deities | Geografia em camadas; panteões por cultura | https://forgottenrealms.fandom.com/wiki/Portal:Geography |
| Tolkien Gateway | Enciclopédia do legendarium | https://tolkiengateway.net |
| Manwë | Ficha de Vala (análogo de Eldar/Ehvar) | https://tolkiengateway.net/wiki/Manwë |
| History of Arda / Timeline | História em eras | https://tolkiengateway.net/wiki/History_of_Arda |
| Exegeta de Arton | Catálogo aberto de Tormenta 20 (Brasil) | https://exegetadearton.com.br |
| Tormenta RPG Wiki (Deuses T20) | Deus = lore + mecânica de devoto | https://tsrd.fandom.com/pt-br/wiki/Deuses_T20 |

PathfinderWiki bloqueou o browser (Cloudflare) na home; o conteúdo de Absalom, portal de religião e o guia de deuses veio via fetch. Archives of Nethys (`2e.aonprd.com`) devolveu 403 — de qualquer forma é SRD mecânico, não enciclopédia de lore.

---

## Padrões que se repetem

### 1. A home é um hub de portais

Forgotten Realms abre em blocos fixos: Pessoas, Raças, Organizações, Geografia, História, Deuses, Cosmologia, Magia, Mapas.

Tolkien Gateway: Personagens, Lugares, Timeline, Imagens, Calendário (inclusive “hoje no Shire”), A–Z.

Ninguém de cenário maduro usa a home só como um único artigo. A home **distribui**. Artigos vivem um nível abaixo.

Para Arka: a landing “Em Construção” pode permanecer como capa; a enciclopédia por baixo deve se comportar como hub (`/mundo` já aponta nessa direção). Portal de **Mapas** ainda não existe na árvore e é primeira classe em Realms e Tolkien.

### 2. Cada tipo de página tem molde

Não improvisam a estrutura a cada nota. Tipos estáveis:

**Deus** (PathfinderWiki + Tolkien Gateway)

1. Infobox (títulos, domínio/concerns, morada, símbolo, culto, arma, cores)
2. Resumo em 1–2 parágrafos
3. História / origem
4. Morada
5. Relações (aliados, rivais, irmãos — Manwë/Melkor, Ehvar/Xerathis)
6. Aparência e como os mortais o retratam
7. Emissários / servos
8. Igreja / culto (templos, festas, textos, geografia do culto)
9. Navbox: outros deuses do mesmo panteão

**Cidade** (Absalom)

1. Infobox (títulos, nação, população, governo, governante, alinhamento)
2. Geografia e **distritos** (filhos da página)
3. Economia
4. Governo e lei
5. História
6. Habitantes
7. Religião
8. Festas, símbolos, referências

Ash-Khala no vault já cai neste molde: distritos, Pentarquia, facções, pessoas, Sigilato, sistema.

**História** (Tolkien)

Não é um PDF único. É uma **linha**: Dias antes dos dias → Anos das Árvores → Eras do Sol. Cada era tem página e a anterior/próxima no rodapé.

Nossos ciclos (Dias incontados, Primeiro ciclo, …) são o mesmo padrão. `/historia` deve virar linha do tempo, não só lista de dois artigos.

### 3. Infobox + navbox

Toda entidade importante tem:

- **Infobox** no topo (o que um jogador precisa em 5 segundos)
- **Navbox** no fim (“outros Eldares”, “outros distritos de Ash-Khala”)

Wikilinks no meio do texto não substituem isso. Sem navbox, 165 artigos viram becos.

### 4. Geografia em camadas

Mundo → continente → nação/reino → cidade → distrito.

Forgotten Realms: Toril → Faerûn → Costa da Espada → Waterdeep. PathfinderWiki: Golarion → Inner Sea → Absalom → distritos.

Arka já desenhou isso em [rotas-do-site.md](rotas-do-site.md). O vault ainda tem `Untitled` no meio; o site só publica o que já tem nome.

### 5. Vários eixos para o mesmo panteão

Ninguém lista deuses só em A–Z.

- PathfinderWiki: por **região** de culto, por ancestralidade, por rank divino, por domínio
- Forgotten Realms: panteão Faerûniano vs élfico vs anão vs Mulhorandi (egípcio — paralelo de Kabash / Aves do Deserto)
- Tolkien: Valar / Maiar / Úmaiar, senhores e senhoras

Para Arka, eixos naturais já no vault:

- Ordem (Ehvar → Eldares 1ª/2ª/3ª → Bélios → Vazio)
- Onde habitam (Lunathar, Valbarra, Campos de Junco)
- Papel (criador, Teldar, general de Xerathis, Aves do Deserto)

Não copiar eixos mecânicos infinitos (alinhamento 1e, subdomínio, mistério de oráculo).

### 6. Lore e sistema no mesmo sítio, papéis diferentes

**Exegeta de Arton** é grimório: magias, poderes, 25 divindades como catálogo de regras. A home é índice de **entradas**, não de mundo.

**Tormenta Wiki (Deuses T20)** mistura, em cada deus: crenças + símbolo sagrado + arma + obrigações + poderes concedidos. É o recorte certo para `/zandora/ash-khala/sistema` e, no futuro, uma linha “para o jogo” em fichas de Eldar (sem transformar a home num SRD).

**Campaign Setting da Paizo** (sumário do livro) é quase a IA de um site de cenário:

1. Personagens (raças, classes)
2. Geografia (nações)
3. Religião
4. Organizações
5. O mundo (história, tempo, clima, subterrâneo)

Arka já cobre 2, 3 e 5 no esqueleto. Raças e organizações como portais de topo ainda não — organizações hoje vivem dentro de Ash-Khala (facções).

### 7. Mapas e calendário são seção, não anexo

Forgotten Realms trata mapas como portal. Tolkien Gateway põe o calendário na home (“hoje no Shire”). O vault de Arka já tem calendário ritual e luas em `Assets/` — candidato a `/calendario` e `/mapas`, artes em `public/assets/mapas/`.

---

## O que cada referência ensina para Arka

### PathfinderWiki / Absalom / molde de deus

Mais próxima em **sistema** (PF2e) e em **cidade-hub**.

Levar:

- Molde de cidade = infobox + distritos + governo + habitantes + religião
- Molde de deus = história, morada, relações, aparência, culto
- Distinção no guia deles: “crunch” (mecânica) na infobox; prosa do artigo é lore

Não levar: taxonomia explosiva (nações por alinhamento, deuses por domínio 1e e 2e ao mesmo tempo).

### Forgotten Realms Wiki

Mais próxima em **escala de enciclopédia de cenário**.

Levar:

- Home = portais nomeados (Geografia, Deuses, História, Mapas, Pessoas)
- Geografia aninhada até o distrito
- Deuses agrupados por cultura/região, não um único bloco

Não levar: volume de categorias Fandom nem a poluição visual do wiki farm.

### Tolkien Gateway

Mais próxima em **cosmologia** (Eru / Valar / Maiar ≈ Ehvar / Eldares / Bélios) e em **história em eras**.

Levar:

- Ficha divina com arte + nomes em várias línguas + genealogia
- Timeline como cidadã de primeira classe
- Calendário do mundo visível
- Navbox de panteão no rodapé de cada Vala

Não levar: o peso de “outras versões do legendarium” no artigo público (isso é nota de criação, como o nosso glossário Tolkien → Arka: interno).

### Exegeta / Tormenta

Mais próxima em **contexto brasileiro** e em **deus jogável**.

Levar:

- Em páginas de divindade, um bloco estável “para o jogo” (símbolo, obrigações, o que o devoto faz)
- Linguagem direta, em português, sem imitar wiki anglófona

Não levar: a home como catálogo de 1.700 entradas de regra. Arka é enciclopédia de mundo; o SRD, se existir, é canto (`/sistema` ou notas PF2e em Ash-Khala).

---

## Mapa para o que já temos

| Referência | Já existe em Arka | Ainda falta |
| --- | --- | --- |
| Hub de portais | Nav: Mundo, Divindades, História, Ash-Khala | Home da enciclopédia (não só landing); portal Mapas |
| Molde de deus | Índice de Eldares; página esqueleto de Ehvar | Infobox, seções fixas, navbox, páginas por Eldar |
| Molde de cidade | Árvore Ash-Khala (distritos, governo, facções, pessoas, sistema) | Infobox da cidade; artigos de distrito (hoje só nomes) |
| História em eras | Ciclos 0 e 1 no esqueleto; 2–4 vazios no vault | Linha do tempo visual; não publicar ciclos vazios |
| Mapas | Pasta `public/assets/mapas/` | Página `/mapas`; artes no lugar |
| Lore + PF2e | `/zandora/ash-khala/sistema` | Infobox mecânica só onde fizer sentido; não virar AoN |
| Busca | — | Busca (todas as wikis maduras têm) |

A árvore em [rotas-do-site.md](rotas-do-site.md) **já está alinhada** com essas referências. O próximo ganho de estrutura não é outra IA: é **molde de artigo** (infobox + seções + navbox) e tratar `/mundo` como portal.

---

## O que não copiar

- Categorias infinitas (“nações por alinhamento”, “deuses por subdomínio”).
- Home de grimório (Exegeta) como cara do domínio público.
- Glossários de tradução Terra-média → Arka em página pública (já vetado em [contrato-espelho.md](contrato-espelho.md)).
- Um `page.js` por artigo para sempre — as wikis geram página a partir de conteúdo; nós vamos no mesmo rumo via `content/lore/`.

---

## Como usar este documento

Ao desenhar uma tela nova, perguntar:

1. Isto é um **portal**, um **índice** ou um **artigo**?
2. Se for artigo, qual molde (deus, cidade, ciclo, pessoa, facção)?
3. O que vai na infobox vs. na prosa?
4. Qual navbox fecha a página?

Se a resposta não couber num desses tipos, o tipo é novo de verdade — e aí sim discute-se IA nova, em vez de abrir exceção.