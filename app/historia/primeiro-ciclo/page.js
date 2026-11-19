import LoreArticle from '../../../components/LoreArticle';
import PageShell from '../../../components/PageShell';
import { LORE_FILES, parseLore, readLoreFile } from '../../../lib/lore';

export const metadata = {
  title: 'Primeiro ciclo',
  description: 'Guerra planar, Grandes Marchas e a queda dos elfos.',
};

export default function PrimeiroCicloPage() {
  const blocks = parseLore(readLoreFile(LORE_FILES.primeiroCiclo));

  return (
    <PageShell
      eyebrow="História"
      title="Primeiro ciclo"
      lede="Da Fonte da Vida à guerra pelos dezoito planos, às dez Grandes Marchas e à chegada dos homens."
      notice={false}
    >
      <LoreArticle blocks={blocks} skipTitle />
    </PageShell>
  );
}
