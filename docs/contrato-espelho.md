# Contrato do espelho `content/lore/`

O vault no Google Drive é a fonte editorial. `content/lore/` neste repositório é o snapshot que o site constrói. Este contrato vale para o agente de sync (local ou Drive API). O sync **ainda não está implementado**.

## Diretório de destino

Tudo o que for publicado a partir do vault entra em `content/lore/`, preservando a árvore relativa ao raiz do vault, com as exclusões abaixo.

Exemplo:

```
content/lore/
  O Mundo/
    Divindades/
      Ehvar.md
      Eldares/
        Xerathis.md
    Continentes/
      Zandora/
        Zandora Ocidental/
          Ash-Khala/
            ...
  Assets/
    image.png
    Calendario_Ritual_Com_Luas_v2.pdf
```

Não espelhar para a raiz do repo nem para `app/`. O `.gitkeep` desta pasta é só do Git; o sync deve preservá-lo e não tratá-lo como lore.

## Copiar

- Markdown de lore (`.md`) que passe nos filtros de draft
- Assets de conteúdo: imagens, PDF e outros arquivos em `Assets/` (exceto o glossário interno; ver abaixo)
- Frontmatter YAML do Obsidian (`tipo`, `tags`, `status`, `aliases`, etc.) — vira metadata da página, sem descartar campos desconhecidos

## Não copiar

- `.obsidian/`
- `.claude/`
- `.claudian/`
- `desktop.ini` e outros arquivos de sistema do Drive
- `.git` / lixo de editor
- `Assets/docs/Glossário.md` — ferramenta interna Tolkien → Arka; não entra no espelho público
- `Assets/docs/Merídia.docx` — fonte editorial paralela; não vira página. Se no futuro houver extração para markdown, o markdown extraído é que entra no espelho

Arquivos fora do vault (ex.: mapa de Gondávia em `G:\Meu Drive\`) não entram neste sync. Só entram se a equipe os mover para o vault.

## Drafts — não viram página pública

Marcar (ou omitir do espelho) e **não** gerar rota:

1. Arquivo com tamanho 0 bytes. O job deve tentar hidratar no Drive antes de concluir que está vazio; se continuar 0, não publica.
2. Nome `Untitled.md` ou `Untitled N.md`.
3. Notas cujo frontmatter `status` seja claramente não-público, se a equipe passar a usar isso de forma consistente. Hoje vários artigos maduros ainda dizem `esqueleto` ou `em-desenvolvimento` — **não** usar esses valores como bloqueio de publicação.

Notas legado de Ash-Khala (`Personalidades.md`, `Personalidades/Lúcio Kodax (Legado).md`) podem espelhar, mas as rotas públicas devem preferir os blocos novos (Principais Personalidades). Ver [rotas-do-site.md](rotas-do-site.md).

## Transformação de wikilinks

O vault usa links Obsidian:

```markdown
[[Ehvar]]
[[Eldares/Xerathis|Xerathis]]
[[0 - Dias incontados|História Geral]]
![[image.png]]
![[Calendario_Ritual_Com_Luas_v2.pdf]]
```

Regras na hora do sync (ou numa passada posterior sobre o espelho):

| Origem | Destino no site |
| --- | --- |
| `[[Nota]]` | link para a rota canônica da nota, texto = título da nota |
| `[[caminho/Nota\|rótulo]]` | mesma rota, texto = rótulo |
| `[[Nota#cabeçalho]]` | rota + âncora slugificada |
| `![[arquivo.png]]` / PDF | asset em `content/lore/Assets/...`, servido pelo site |
| Link para nota draft / Untitled / ausente | texto simples, sem href quebrado (opcional: marcar `data-missing`) |

A tabela de rotas canônicas está em [rotas-do-site.md](rotas-do-site.md). Slugs: minúsculas, sem acento, hífens (`Ash-Khala` → `ash-khala`).

Não expandir wikilinks no Drive. A transformação acontece só no espelho / no pipeline do site.

## Como o job deve rodar

1. **Protótipo local:** ler o vault no `G:\` deste PC, aplicar o contrato, gravar em `content/lore/`. Útil para desenvolver o transformador. Não é o cron de produção — o PC pode estar desligado e o caminho `\.shortcut-targets-by-id\` muda.
2. **Produção:** GitHub Action (ou equivalente) com Google Drive API, pasta `1DTqQBaxoD9p8m1jMlvLhvB9L058DP15Y`, no cron. Diff contra `content/lore/`; abrir PR (preferível) ou commit no `main` quando o vault mudar.

O Next.js só lê `content/lore/` e `app/`. Zero I/O no Google Drive em `next build` / `next start`.

## Fora deste contrato

- Não migrar as 165 notas à mão para componentes React
- Não bindar `fs` em `G:\` no App Router
- Não publicar o glossário Tolkien como enciclopédia
