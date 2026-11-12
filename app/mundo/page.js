import EntryList from '../../components/EntryList';
import PageShell from '../../components/PageShell';
import { MUNDO_ENTRIES } from '../../lib/catalog';

export const metadata = {
  title: 'O Mundo',
  description: 'Índice da enciclopédia de Arka: cosmologia, história e lugares.',
};

export default function MundoPage() {
  return (
    <PageShell
      eyebrow="Enciclopédia"
      title="O Mundo"
      lede="Astros, deuses, ciclos e continentes. A geografia ainda se organiza; Ash-Khala é o primeiro lugar com profundidade de campanha."
    >
      <section className="section-block">
        <h2>Seções</h2>
        <EntryList items={MUNDO_ENTRIES} />
      </section>
    </PageShell>
  );
}
