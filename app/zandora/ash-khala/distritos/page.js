import PageShell from '../../../../components/PageShell';
import { ASH_KHALA_DISTRICTS } from '../../../../lib/catalog';

export const metadata = {
  title: 'Distritos de Ash-Khala',
};

export default function DistritosPage() {
  return (
    <PageShell
      eyebrow="Ash-Khala"
      title="Distritos"
      lede="Oito distritos, do Portal à Coroa. Cada um terá artigo próprio quando o espelho da lore estiver no ar."
    >
      <section className="section-block">
        <h2>Mapa dos distritos</h2>
        <ul className="name-list">
          {ASH_KHALA_DISTRICTS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
