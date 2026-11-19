import LoreArticle from '../../../components/LoreArticle';
import PageShell from '../../../components/PageShell';
import { LORE_FILES, parseLore, readLoreFile } from '../../../lib/lore';

export const metadata = {
  title: 'Dias incontados',
  description: 'O mito oficial da criação de Arka.',
};

export default function DiasIncontadosPage() {
  const blocks = parseLore(readLoreFile(LORE_FILES.diasIncontados));

  return (
    <PageShell
      eyebrow="História"
      title="Dias incontados"
      lede="A Narração da Criação: Ehvar, os vinte e um Eldares, os Bélios, o surgir de Arka, dos elfos e a descida dos Teldares."
      notice={false}
    >
      <LoreArticle blocks={blocks} skipTitle />
    </PageShell>
  );
}
