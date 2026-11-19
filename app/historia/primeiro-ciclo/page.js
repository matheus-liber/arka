import PageShell from '../../../components/PageShell';

export const metadata = {
  title: 'Primeiro ciclo',
  description: 'A descida dos Teldares e as Grandes Marchas de Xerathis.',
};

export default function PrimeiroCicloPage() {
  return (
    <PageShell
      eyebrow="História"
      title="Primeiro ciclo"
      lede="Os Teldares em Arka, as Grandes Marchas de Xerathis, o surgir dos anões e a longa resistência em Valbarra."
    >
      <section className="section-block">
        <h2>O artigo</h2>
        <p className="empty-copy">
          O artigo sai de{' '}
          <code>Arka — Lore Oficial/02 — História e Cronologia/OFICIAL — Primeiro Ciclo — Guerra Planar e Grandes Marchas</code>
          {' '}depois de exportar o Google Doc para o espelho.
        </p>
      </section>
    </PageShell>
  );
}
