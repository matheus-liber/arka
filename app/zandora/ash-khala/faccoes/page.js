import PageShell from '../../../../components/PageShell';
import { ASH_KHALA_FACTIONS } from '../../../../lib/catalog';

export const metadata = {
  title: 'Facções de Ash-Khala',
};

export default function FaccoesPage() {
  return (
    <PageShell
      eyebrow="Ash-Khala"
      title="Facções"
      lede="O poder que não senta na Pentarquia. Cartéis, cultos, contrabandistas e os que recusam o selo do Sigilato."
    >
      <section className="section-block">
        <h2>Poder subterrâneo</h2>
        <ul className="name-list">
          {ASH_KHALA_FACTIONS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
