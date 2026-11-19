export const NAV = [
  { href: '/', label: 'Crônicas' },
  { href: '/mundo', label: 'Mundo' },
  { href: '/planos', label: 'Planos' },
  { href: '/divindades', label: 'Divindades' },
  { href: '/historia', label: 'História' },
  { href: '/mapas', label: 'Mapas' },
];

export const MUNDO_ENTRIES = [
  {
    href: '/planos',
    title: 'Planos de existência',
    note: 'Arka, Oníria, Limbo, Nove Céus e Nove Infernos',
  },
  {
    href: '/historia',
    title: 'História',
    note: 'Dias Incontados e o Primeiro Ciclo',
  },
  {
    href: '/divindades',
    title: 'Divindades',
    note: 'Ehvar, Eldares e Teldares — nomes da cosmologia oficial',
  },
  {
    href: '/mapas',
    title: 'Mapas planares',
    note: 'Estrutura, coordenadas e influências elementais',
  },
  {
    title: 'Geografia',
    note: 'Pasta 03 ainda sem OFICIAL —',
  },
];

export const DIVINDADE_GROUPS = [
  {
    title: 'O Criador',
    items: [{ href: '/divindades/ehvar', title: 'Ehvar', note: 'O Ser perfeito' }],
  },
  {
    title: 'Primeira Ordem',
    href: '/divindades/eldares',
    items: [
      { title: 'Xerathis', note: 'O maior entre os Eldares; depois Teldar rebelde' },
      { title: 'Os Seis', note: 'Nomes não revelados aos mortais; permaneceram com Ehvar' },
    ],
  },
  {
    title: 'Segunda Ordem',
    href: '/divindades/eldares',
    items: [
      { title: 'Tharvion', note: 'Julgamento' },
      { title: 'Meydris', note: 'Destino' },
      { title: 'Ashvar', note: 'Céus e proteção' },
      { title: 'Nahuiya', note: 'Estrelas, sol e luas' },
      { title: 'Varune', note: 'Águas' },
      { title: 'Sylvara', note: 'Plantas, animais e geração' },
      { title: 'Lythara', note: 'Descanso e Oníria' },
    ],
  },
  {
    title: 'Terceira Ordem',
    href: '/divindades/eldares',
    items: [
      { title: 'Llyrindor', note: 'Caça e equilíbrio' },
      { title: 'Zelindra', note: 'Luto e consolo' },
      { title: 'Themari', note: 'Cura' },
      { title: 'Ilyria', note: 'Magia' },
      { title: 'Callion', note: 'Arte' },
      { title: 'Kharzûn', note: 'Rochas, montanhas e tesouros' },
      { title: 'Hrothyan', note: 'Planos e espírito' },
    ],
  },
  {
    title: 'Entidades do Vazio',
    items: [
      { title: 'Abysalith', note: 'Corrompeu a linhagem Lóthien' },
      { title: 'Sutaita', note: 'Corrompeu a linhagem Aldaron' },
    ],
  },
];

export const HISTORIA_ENTRIES = [
  {
    href: '/historia/dias-incontados',
    title: 'Dias incontados',
    note: 'O mito da criação',
  },
  {
    href: '/historia/primeiro-ciclo',
    title: 'Primeiro ciclo',
    note: 'Guerra planar e Grandes Marchas',
  },
  { title: 'Ciclos seguintes', note: 'Ainda sem OFICIAL — na lore' },
];
