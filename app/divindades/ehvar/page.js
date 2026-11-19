import Link from 'next/link';
import PageShell from '../../../components/PageShell';

export const metadata = {
  title: 'Ehvar',
  description: 'O criador de Arka — o Ser perfeito, princípio de todas as coisas.',
};

export default function EhvarPage() {
  return (
    <PageShell
      eyebrow="O Criador"
      title="Ehvar"
      lede="No princípio havia Ehvar, o Ser perfeito, princípio e criador de todas as coisas. Criou os vinte e um Eldares, os Bélios, os elfos e concedeu o sopro da vida aos anões de Kharzûn."
      notice={false}
    >
      <section className="section-block">
        <h2>No mito oficial</h2>
        <p className="empty-copy">
          A narração de Ehvar, a recusa de anular a liberdade de Xerathis e a
          abertura da passagem para Arka estão em{' '}
          <Link href="/historia/dias-incontados">Dias incontados</Link>. A pasta{' '}
          <code>05 — Religiões e Divindades</code> ainda não tem um artigo{' '}
          <code>OFICIAL —</code> só de Ehvar.
        </p>
      </section>
    </PageShell>
  );
}
