import OfficialPending from '../../../components/OfficialPending';
import PageShell from '../../../components/PageShell';

export const metadata = {
  title: 'Ash-Khala',
  description: 'Lugar ainda sem documento oficial na lore.',
};

export default function AshKhalaPage() {
  return (
    <PageShell
      eyebrow="Geografia"
      title="Ash-Khala"
      lede="A pasta 03 — Geografia e Territórios da lore oficial ainda está vazia. Não há artigo OFICIAL — sobre este lugar."
      notice={false}
    >
      <section className="section-block">
        <h2>Ainda não publicado</h2>
        <OfficialPending folder="03 — Geografia e Territórios" subject="Ash-Khala" />
      </section>
    </PageShell>
  );
}
