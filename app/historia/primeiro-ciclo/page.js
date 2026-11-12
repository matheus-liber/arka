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
          O texto canônico (~57 KB no vault) será publicado aqui a partir de{' '}
          <code>O Mundo/História Geral/1 - Primeiro ciclo.md</code>.
        </p>
      </section>
    </PageShell>
  );
}
