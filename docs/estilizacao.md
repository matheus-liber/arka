# Estilização

Único lugar para cores, fontes, tamanhos e temas: [`app/styles/tokens.css`](../app/styles/tokens.css).

[`app/globals.css`](../app/globals.css) só descreve layout (header, cards, landing). Ele consome as variáveis; não define a paleta.

## Como mudar a cara do site

1. Edite as variáveis em `tokens.css` (por tema).
2. O tema ativo é o atributo no HTML: `<html data-theme="dark">` em [`app/layout.js`](../app/layout.js).

Valores atuais:

| `data-theme` | Uso |
| --- | --- |
| `dark` | Padrão — crônicas, fundo profundo |
| `light` | Pergaminho / dia |
| `high-contrast` | Bordas e texto nítidos, fundo preto |

Ainda não há seletor na interface. Para testar um tema, mude o atributo em `layout.js`. Depois dá para ligar um controle que grava a escolha (por exemplo em `localStorage`) e seta o mesmo `data-theme`.

## O que não fazer

- Não colocar `#hex` ou `rgb()` soltos em componentes ou em `globals.css`.
- Não criar um segundo arquivo de paleta. Novas cores viram `--token` em `tokens.css`.
