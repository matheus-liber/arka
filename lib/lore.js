import fs from 'node:fs';
import path from 'node:path';

const LORE_ROOT = path.join(process.cwd(), 'content', 'lore');

export const LORE_FILES = {
  diasIncontados:
    '01 — Cosmologia e Criação/OFICIAL — Dias Incontados — Mito da Criação.md',
  planos:
    '01 — Cosmologia e Criação/OFICIAL — Planos de Existência — Configuração Atual.md',
  primeiroCiclo:
    '02 — História e Cronologia/OFICIAL — Primeiro Ciclo — Guerra Planar e Grandes Marchas.md',
};

export function readLoreFile(relativePath) {
  const full = path.join(LORE_ROOT, relativePath);
  let text = fs.readFileSync(full, 'utf8');

  if (text.charCodeAt(0) === 0xfeff) {
    text = text.slice(1);
  }

  const cut = text.search(/^NOTAS DE CURADORIA/m);
  if (cut !== -1) {
    text = text.slice(0, cut);
  }

  return text.replace(/\r\n/g, '\n').trim();
}

export function parseLore(text) {
  return text
    .split(/\n{2,}/)
    .map((block) => classifyBlock(block.trim()))
    .filter(Boolean);
}

function classifyBlock(text) {
  if (!text) {
    return null;
  }

  const single = !text.includes('\n');

  if (single && isMajorHeading(text)) {
    return { type: 'h2', text };
  }

  if (single && isMinorHeading(text)) {
    return { type: 'h3', text };
  }

  if (/can[oô]nico aprovado|Versão consolidada|Texto integral|Verbete canônico/i.test(text)) {
    return { type: 'note', text: collapse(text) };
  }

  return { type: 'p', text: collapse(text) };
}

function isMajorHeading(text) {
  if (text.length > 90) {
    return false;
  }

  if (/^CAPÍTULO\b/i.test(text)) {
    return true;
  }

  if (/^\d+\.\s/.test(text) && text === text.toUpperCase()) {
    return true;
  }

  if (
    /^(PRIMAVERA|VERÃO|OUTONO|INVERNO|AS GRANDES MARCHAS|A GUERRA PELOS DEZOITO PLANOS|A CHEGADA DOS HOMENS)\b/.test(
      text,
    )
  ) {
    return true;
  }

  return text === text.toUpperCase() && /[A-ZÁÉÍÓÚÂÊÔÃÕÀÜÇ]/.test(text);
}

function isMinorHeading(text) {
  if (text.length > 90 || /[.!?]$/.test(text)) {
    return false;
  }

  if (/^(PRIMEIRA|SEGUNDA|TERCEIRA|QUARTA|QUINTA|SEXTA|SÉTIMA) ETAPA\b/.test(text)) {
    return true;
  }

  if (
    /^(Os |A |O |Chegada|Queda|Grande |Cavalgadas|Paradeiro|Heroísmo|Luto |Agrupamento|Partida|Avanço|Recuo|Reorganização|Primeira |Segunda |Terceira |Quarta |Quinta |Sexta |Sétima |Oitava |Nona |Décima )/.test(
      text,
    )
  ) {
    return true;
  }

  return / — /.test(text);
}

function collapse(text) {
  return text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
}
