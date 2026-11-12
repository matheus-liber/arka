import EntryList from '../../components/EntryList';
import PageShell from '../../components/PageShell';
import { HISTORIA_ENTRIES } from '../../lib/catalog';

export const metadata = {
  title: 'História',
  description: 'Os ciclos de Arka, da Narração da Criação às Grandes Marchas.',
};

export default function HistoriaPage() {
  return (
    <PageShell
      eyebrow="Crônicas"
      title="História"
      lede="Os Dias Incontados e o Primeiro Ciclo já estão escritos no vault. Os ciclos seguintes ainda são páginas vazias — e não entram no site até existirem de fato."
    >
      <section className="section-block">
        <h2>Ciclos</h2>
        <EntryList items={HISTORIA_ENTRIES} />
      </section>
    </PageShell>
  );
}
