import PageShell from '../../../components/PageShell';

export const metadata = {
  title: 'Dias incontados',
  description: 'A Narração da Criação — pré-história de Arka.',
};

export default function DiasIncontadosPage() {
  return (
    <PageShell
      eyebrow="História"
      title="Dias incontados"
      lede="A Narração da Criação: Ehvar, os vinte e um Eldares, os Bélios e o surgir de Arka, dos elfos e da Fonte da Vida."
    >
      <section className="section-block">
        <h2>O artigo</h2>
        <p className="empty-copy">
          O artigo sai de{' '}
          <code>Arka — Lore Oficial/01 — Cosmologia e Criação/OFICIAL — Dias Incontados — Mito da Criação</code>
          {' '}depois de exportar o Google Doc para o espelho.
        </p>
      </section>
    </PageShell>
  );
}
