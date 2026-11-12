import EntryList from '../../../components/EntryList';
import PageShell from '../../../components/PageShell';
import { ASH_KHALA_SECTIONS } from '../../../lib/catalog';

export const metadata = {
  title: 'Ash-Khala',
  description: 'A Joia do Ocidente — metrópole costeira de Zandora Ocidental.',
};

export default function AshKhalaPage() {
  return (
    <PageShell
      eyebrow="Zandora Ocidental"
      title="Ash-Khala"
      lede="A maior metrópole costeira de Zandora Ocidental. Vende-se como próspera, segura e gloriosa. Por baixo da fachada: corrupção, desigualdade e magia sob o Sigilato. Governada pela Pentarquia."
    >
      <section className="section-block">
        <h2>Blocos de lore</h2>
        <EntryList items={ASH_KHALA_SECTIONS} />
      </section>
    </PageShell>
  );
}
