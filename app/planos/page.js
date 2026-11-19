import LoreArticle from '../../components/LoreArticle';
import PageShell from '../../components/PageShell';
import { LORE_FILES, parseLore, readLoreFile } from '../../lib/lore';

export const metadata = {
  title: 'Planos de existência',
  description: 'A configuração oficial dos planos de Arka.',
};

export default function PlanosPage() {
  const blocks = parseLore(readLoreFile(LORE_FILES.planos));

  return (
    <PageShell
      eyebrow="Cosmologia"
      title="Planos de existência"
      lede="O Plano Material, Oníria, o Limbo, os quatro elementais, os Nove Céus e os Nove Infernos — configuração atual da Existência."
      notice={false}
    >
      <LoreArticle blocks={blocks} skipTitle />
    </PageShell>
  );
}
