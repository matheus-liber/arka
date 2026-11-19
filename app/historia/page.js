import EntryList from '../../components/EntryList';
import PageShell from '../../components/PageShell';
import { HISTORIA_ENTRIES } from '../../lib/catalog';

export const metadata = {
  title: 'História',
  description: 'Os ciclos oficiais de Arka: Dias Incontados e o Primeiro Ciclo.',
};

export default function HistoriaPage() {
  return (
    <PageShell
      eyebrow="Crônicas"
      title="História"
      lede="Os Dias Incontados e o Primeiro Ciclo já são documentos oficiais. Os ciclos seguintes só entram no site quando tiverem OFICIAL — na pasta 02."
      notice={false}
    >
      <section className="section-block">
        <h2>Ciclos</h2>
        <EntryList items={HISTORIA_ENTRIES} />
      </section>
    </PageShell>
  );
}
