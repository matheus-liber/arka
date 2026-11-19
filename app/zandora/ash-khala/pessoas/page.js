import OfficialPending from '../../../../components/OfficialPending';
import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Pessoas de Ash-Khala',
};

export default function PessoasPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="Pessoas"
      lede="Sem documento OFICIAL — na lore."
      notice={false}
    >
      <OfficialPending folder="06 — Personagens e Organizações" subject="pessoas de Ash-Khala" />
    </PageShell>
  );
}
