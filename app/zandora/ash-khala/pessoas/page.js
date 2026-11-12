import PageShell from '../../../../components/PageShell';
import { ASH_KHALA_PEOPLE } from '../../../../lib/catalog';

export const metadata = {
  title: 'Pessoas de Ash-Khala',
};

export default function PessoasPage() {
  return (
    <PageShell
      eyebrow="Ash-Khala"
      title="Pessoas"
      lede="Nomes em evidência no bloco novo de Principais Personalidades. A ficha legado de Lúcio Kodax não vira rota pública."
    >
      <section className="section-block">
        <h2>Em evidência</h2>
        <ul className="name-list">
          {ASH_KHALA_PEOPLE.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
