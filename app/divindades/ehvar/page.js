import Link from 'next/link';
import PageShell from '../../../components/PageShell';

export const metadata = {
  title: 'Ehvar',
  description: 'O criador de Arka — o Ser perfeito, ápice do existir.',
};

export default function EhvarPage() {
  return (
    <PageShell
      eyebrow="O Criador"
      title="Ehvar"
      lede="O Ser perfeito. Não é Eldar nem Bélio: é a origem. Criou os Eldares, os Bélios e convidou-os a narrar Arka à existência."
    >
      <section className="section-block">
        <h2>Em breve neste artigo</h2>
        <p className="empty-copy">
          Atos conhecidos, o respeito ao livre-arbítrio e a relação com{' '}
          <Link href="/divindades/eldares">Xerathis e os demais Eldares</Link>. A
          pasta <code>05 — Religiões e Divindades</code> da lore oficial ainda não
          tem documento <code>OFICIAL —</code> para este artigo.
        </p>
      </section>
    </PageShell>
  );
}
