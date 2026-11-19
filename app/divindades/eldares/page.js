import EntryList from '../../../components/EntryList';
import PageShell from '../../../components/PageShell';
import { DIVINDADE_GROUPS } from '../../../lib/catalog';

export const metadata = {
  title: 'Eldares',
  description: 'Os vinte e um filhos de Ehvar. Os quinze que desceram a Arka são os Teldares.',
};

const orders = DIVINDADE_GROUPS.filter((group) =>
  group.title.endsWith('Ordem'),
);

export default function EldaresPage() {
  return (
    <PageShell
      eyebrow="Divindades"
      title="Eldares"
      lede="Vinte e um, em três Ordens de sete. Quinze desceram a Arka e passaram a ser chamados Teldares. Os seis da Primeira Ordem, salvo Xerathis, permaneceram com Ehvar. Os nomes seguem o mito oficial dos Dias Incontados."
      notice={false}
    >
      {orders.map((group) => (
        <section className="section-block" key={group.title}>
          <h2>{group.title}</h2>
          <EntryList items={group.items} />
        </section>
      ))}
    </PageShell>
  );
}
