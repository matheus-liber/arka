import OfficialPending from '../../../../components/OfficialPending';
import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Facções de Ash-Khala',
};

export default function FaccoesPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="Facções"
      lede="Sem documento OFICIAL — na lore. Os nomes de facções do vault antigo não entram no site."
      notice={false}
    >
      <OfficialPending folder="06 — Personagens e Organizações" subject="as facções de Ash-Khala" />
    </PageShell>
  );
}
