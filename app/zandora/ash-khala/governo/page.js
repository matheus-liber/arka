import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Governo de Ash-Khala',
};

export default function GovernoPage() {
  return (
    <PageShell
      eyebrow="Ash-Khala"
      title="Governo"
      lede="Cinco tronos. Quatro vontades individuais. Um voto partido em três — o Trono Rachado de Salhum."
    >
      <section className="section-block">
        <h2>A Pentarquia</h2>
        <p className="empty-copy">
          Cadeiras de Zandora, Di-Kabash, Jiangsu, Nova Solária e Salhum. Os
          ocupantes, mandatos e o detalhe do Trono Rachado virão do vault (
          <code>Governo.md</code> e o bloco Pentarcas).
        </p>
      </section>
    </PageShell>
  );
}
