import Link from 'next/link';
import PageShell from '../../components/PageShell';

export const metadata = {
  title: 'Mapas',
  description: 'Mapas planares oficiais de Arka.',
};

export default function MapasPage() {
  return (
    <PageShell
      eyebrow="Cosmologia"
      title="Mapas planares"
      lede="Representações metafísicas da Existência — não são distâncias físicas nem a posição de astros no espaço. Saem da pasta 10 da lore oficial."
      notice={false}
    >
      <figure className="lore-map">
        <img
          src="/assets/mapas/mapa-planar-estrutura-e-coordenadas.png"
          alt="Mapa planar de Arka: estrutura e coordenadas dos Nove Céus e dos Nove Infernos."
        />
        <figcaption>
          Estrutura e coordenadas.{' '}
          <Link href="/planos">Ver o verbete dos planos</Link>.
        </figcaption>
      </figure>
      <figure className="lore-map">
        <img
          src="/assets/mapas/mapa-planar-influencias-elementais.png"
          alt="Mapa planar de Arka: influências dos quatro elementos sobre os Céus e os Infernos."
        />
        <figcaption>Influências elementais.</figcaption>
      </figure>
    </PageShell>
  );
}
