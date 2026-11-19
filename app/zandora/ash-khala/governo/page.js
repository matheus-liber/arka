import OfficialPending from '../../../../components/OfficialPending';
import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Governo de Ash-Khala',
};

export default function GovernoPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="Governo"
      lede="Sem documento OFICIAL — na lore."
      notice={false}
    >
      <OfficialPending folder="03 — Geografia e Territórios" subject="o governo de Ash-Khala" />
    </PageShell>
  );
}
