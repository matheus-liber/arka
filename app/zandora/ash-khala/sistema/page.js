import OfficialPending from '../../../../components/OfficialPending';
import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Sistema — Ash-Khala',
};

export default function SistemaPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="Conexão com o Sistema"
      lede="Sem documento OFICIAL — na lore."
      notice={false}
    >
      <OfficialPending folder="03 — Geografia e Territórios" subject="regras de campanha de Ash-Khala" />
    </PageShell>
  );
}
