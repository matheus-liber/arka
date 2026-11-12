import PageShell from '../../../components/PageShell';
import { DIVINDADE_GROUPS } from '../../../lib/catalog';

export const metadata = {
  title: 'Eldares',
  description: 'Os filhos de Ehvar. Os que desceram a Arka são os Teldares.',
};

const eldares = DIVINDADE_GROUPS.find((group) => group.title === 'Eldares').items;

export default function EldaresPage() {
  return (
    <PageShell
      eyebrow="Divindades"
      title="Eldares"
      lede="Vinte e um, em três ordens. Os que desceram ao mundo são chamados Teldares. Xerathis, o maior da primeira ordem, rebelou-se."
    >
      <section className="section-block">
        <h2>Nomes</h2>
        <ul className="name-list">
          {eldares.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
