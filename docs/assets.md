# Artes e imagens

Todas as artes do **site** ficam num único árvore: [`public/assets/`](../public/assets/).

No Next.js, o que está em `public/` é servido na raiz da URL. O arquivo `public/assets/mapas/arka.png` vira `https://arkarpg.com.br/assets/mapas/arka.png`.

Não espalhar imagens em `app/`, `components/` ou ao lado de cada `page.js`.

## Árvore

```
public/assets/
  divindades/
    ehvar/
    eldares/
    belios/
    vazio/
  historia/
  mapas/
  lugares/
    ash-khala/
    kabash/
    meridia/
  ui/                 chrome, ornamentos, ícones do site
```

Espelha a taxonomia da enciclopédia ([rotas-do-site.md](rotas-do-site.md)), não as pastas numeradas do Drive. Exemplo: retrato de Xerathis → `public/assets/divindades/eldares/xerathis.webp`.

Nomes de arquivo: slug em minúsculas e hífens, igual à rota (`o-portal.webp`, não `O Portal.PNG`).

## O que não entra aqui

Mapas e mídia oficiais nascem em `Arka — Lore Oficial/10 — Recursos Visuais e Multimídia`. Para o site servir o arquivo, copie para `public/assets/` (ex.: os mapas planares → `public/assets/mapas/`). Não sirva `content/lore/` como pasta de mídia.

## Git

Enquanto o volume for pequeno, os arquivos vão no Git. Quando a pasta crescer de verdade (centenas de ilustrações pesadas), avaliar Git LFS ou um CDN — a árvore de pastas permanece a mesma.
