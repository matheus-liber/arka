import OfficialPending from '../../../../components/OfficialPending';
import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Distritos de Ash-Khala',
};

export default function DistritosPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="Distritos"
      lede="Sem documento OFICIAL — na lore. Os nomes de distritos do vault antigo não entram no site."
      notice={false}
    >
      <OfficialPending folder="03 — Geografia e Territórios" subject="os distritos de Ash-Khala" />
    </PageShell>
  );
}
