import Link from 'next/link';

export const metadata = {
  title: 'Em Construção',
  description: 'Ehvar e os Eldares estão narrando. Em breve, Arka se formará.',
};

export default function Home() {
  return (
    <main className="landing">
      <section className="notice" aria-labelledby="page-title">
        <div className="sigil" aria-hidden="true">
          ✦
        </div>
        <p className="eyebrow">As crônicas de Arka</p>
        <h1 id="page-title">Em Construção</h1>
        <div className="ornament" aria-hidden="true">
          <span />✧<span />
        </div>
        <p className="message">
          Ehvar e os Eldares estão narrando.
          <br />
          <span>Em breve, Arka se formará.</span>
        </p>
        <p className="landing-links">
          <Link href="/mundo">O Mundo</Link>
          <Link href="/planos">Planos</Link>
          <Link href="/historia">História</Link>
          <Link href="/mapas">Mapas</Link>
        </p>
      </section>
    </main>
  );
}
