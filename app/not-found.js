import Link from 'next/link';
import PageShell from '../components/PageShell';

export default function NotFound() {
  return (
    <PageShell
      eyebrow="As crônicas"
      title="Página não encontrada"
      lede="Este caminho ainda não foi narrado — ou o slug mudou."
      notice={false}
    >
      <p className="empty-copy">
        Volte ao <Link href="/mundo">índice do Mundo</Link>, à{' '}
        <Link href="/historia">História</Link> ou aos <Link href="/planos">Planos</Link>.
      </p>
    </PageShell>
  );
}
