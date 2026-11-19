import EntryList from '../../components/EntryList';
import PageShell from '../../components/PageShell';
import { MUNDO_ENTRIES } from '../../lib/catalog';

export const metadata = {
  title: 'O Mundo',
  description: 'Índice da enciclopédia de Arka: cosmologia, história e mapas oficiais.',
};

export default function MundoPage() {
  return (
    <PageShell
      eyebrow="Enciclopédia"
      title="O Mundo"
      lede="O que já é OFICIAL — na lore: o mito da criação, a configuração dos planos e o Primeiro Ciclo. Geografia, povos e o panteão detalhado aguardam as pastas 03–06."
      notice={false}
    >
      <section className="section-block">
        <h2>Seções</h2>
        <EntryList items={MUNDO_ENTRIES} />
      </section>
    </PageShell>
  );
}
