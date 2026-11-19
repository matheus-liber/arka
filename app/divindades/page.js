import Link from 'next/link';
import EntryList from '../../components/EntryList';
import PageShell from '../../components/PageShell';
import { DIVINDADE_GROUPS } from '../../lib/catalog';

export const metadata = {
  title: 'Divindades',
  description: 'Ehvar, os vinte e um Eldares e as entidades do Vazio, segundo o mito oficial.',
};

export default function DivindadesPage() {
  return (
    <PageShell
      eyebrow="Cosmologia"
      title="Divindades"
      lede="No princípio havia Ehvar. Dos vinte e um Eldares e de seus Bélios veio a narração de Arka. Os nomes abaixo saem do mito oficial; a pasta 05 ainda não tem artigos próprios."
      notice={false}
    >
      {DIVINDADE_GROUPS.map((group) => (
        <section className="section-block" key={group.title}>
          <h2>
            {group.href ? (
              <Link href={group.href}>{group.title}</Link>
            ) : (
              group.title
            )}
          </h2>
          <EntryList items={group.items} />
        </section>
      ))}
    </PageShell>
  );
}
