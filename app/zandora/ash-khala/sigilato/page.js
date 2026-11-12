import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'O Sigilato',
};

export default function SigilatoPage() {
  return (
    <PageShell
      eyebrow="Ash-Khala"
      title="O Sigilato"
      lede="O aparato que licencia e pune a magia em Ash-Khala, depois do desastre antigo que tornou a arcana livre um tabu."
    >
      <section className="section-block">
        <h2>O Desastre</h2>
        <p className="empty-copy">
          A Perdição, o Farol Ressonante e o Ressonador Arcano terão páginas
          próprias neste ramo. Por ora o bloco existe só no vault.
        </p>
      </section>
    </PageShell>
  );
}
