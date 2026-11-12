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
          O texto canônico (~33 KB no vault) será publicado aqui a partir de{' '}
          <code>O Mundo/História Geral/0 - Dias incontados.md</code>.
        </p>
      </section>
    </PageShell>
  );
}
