import PageShell from '../../../../components/PageShell';

export const metadata = {
  title: 'Sistema — Ash-Khala',
};

export default function SistemaPage() {
  return (
    <PageShell
      eyebrow="Ash-Khala"
      title="Conexão com o Sistema"
      lede="A pirâmide social da cidade traduzida para Pathfinder 2e Remastered: ancestralidades, licenças do Sigilato e o ouro como discriminação."
    >
      <section className="section-block">
        <h2>PF2e Remastered</h2>
        <p className="empty-copy">
          As tabelas de ancestralidade e nicho social virão de{' '}
          <code>Conexão com o Sistema.md</code>. Ash-Khala não discrimina por
          sangue — discrimina por ouro, licença e sobrenome.
        </p>
      </section>
    </PageShell>
  );
}
