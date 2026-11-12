import Link from 'next/link';
import EntryList from '../../components/EntryList';
import PageShell from '../../components/PageShell';
import { DIVINDADE_GROUPS } from '../../lib/catalog';

export const metadata = {
  title: 'Divindades',
  description: 'Ehvar, os Eldares, os Bélios e as Entidades do Vazio.',
};

export default function DivindadesPage() {
  return (
    <PageShell
      eyebrow="Cosmologia"
      title="Divindades"
      lede="No princípio havia Ehvar. Dos Eldares e de seus Bélios veio a narração de Arka. Xerathis rebelou-se; Abysalith e Sutaita vieram de fora da criação."
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
