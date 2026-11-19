import OfficialPending from '../../../../components/OfficialPending';
import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'O Sigilato',
};

export default function SigilatoPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="O Sigilato"
      lede="Sem documento OFICIAL — na lore."
      notice={false}
    >
      <OfficialPending folder="03 — Geografia e Territórios" subject="o Sigilato" />
    </PageShell>
  );
}
