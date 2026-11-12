export const NAV = [
  { href: '/', label: 'Crônicas' },
  { href: '/mundo', label: 'Mundo' },
  { href: '/divindades', label: 'Divindades' },
  { href: '/historia', label: 'História' },
  { href: '/zandora/ash-khala', label: 'Ash-Khala' },
];

export const MUNDO_ENTRIES = [
  {
    href: '/divindades',
    title: 'Divindades',
    note: 'Ehvar, Eldares, Bélios e o Vazio',
  },
  {
    href: '/historia',
    title: 'História',
    note: 'Dias incontados e o Primeiro Ciclo',
  },
  {
    href: '/zandora/ash-khala',
    title: 'Ash-Khala',
    note: 'A Joia do Ocidente — primeiro lugar da enciclopédia',
  },
  { title: 'Astros e calendário', note: 'Esqueleto — aguarda o espelho da lore' },
  { title: 'Merídia', note: 'Reinos e blocos políticos — em breve' },
  { title: 'Kabash', note: 'Teocracia faraônica — em breve' },
  { title: 'Valbarra', note: 'Continente do Primeiro Ciclo — em breve' },
];

export const DIVINDADE_GROUPS = [
  {
    title: 'O Criador',
    items: [{ href: '/divindades/ehvar', title: 'Ehvar', note: 'O Ser perfeito' }],
  },
  {
    title: 'Eldares',
    href: '/divindades/eldares',
    items: [
      { title: 'Xerathis' },
      { title: 'Tharvion' },
      { title: 'Meydriss' },
      { title: 'Ashvar' },
      { title: 'Nahuiya' },
      { title: 'Varune' },
      { title: 'Sylvara' },
      { title: 'Lythara' },
      { title: 'Llyrindor' },
      { title: 'Zelindra' },
      { title: 'Themari' },
      { title: 'Moanani' },
      { title: 'Ilyria' },
      { title: 'Callion' },
      { title: 'Kharzûn' },
      { title: 'Hrotyan' },
    ],
  },
  {
    title: 'Entidades do Vazio',
    items: [{ title: 'Abysalith' }, { title: 'Sutaita' }],
  },
];

export const HISTORIA_ENTRIES = [
  {
    href: '/historia/dias-incontados',
    title: 'Dias incontados',
    note: 'A Narração da Criação',
  },
  {
    href: '/historia/primeiro-ciclo',
    title: 'Primeiro ciclo',
    note: 'Teldares e as Grandes Marchas',
  },
  { title: 'Segundo ciclo', note: 'Ainda vazio no vault' },
  { title: 'Terceiro ciclo', note: 'Ainda vazio no vault' },
  { title: 'Quarto ciclo', note: 'Ainda vazio no vault' },
];

export const ASH_KHALA_SECTIONS = [
  {
    href: '/zandora/ash-khala/distritos',
    title: 'Distritos',
    note: 'Do Portal às Lamas',
  },
  {
    href: '/zandora/ash-khala/governo',
    title: 'Governo',
    note: 'A Pentarquia e o Trono Rachado',
  },
  {
    href: '/zandora/ash-khala/sigilato',
    title: 'O Sigilato',
    note: 'Controle da magia',
  },
  {
    href: '/zandora/ash-khala/faccoes',
    title: 'Facções',
    note: 'Poder subterrâneo',
  },
  {
    href: '/zandora/ash-khala/pessoas',
    title: 'Pessoas',
    note: 'Casas e nomes em evidência',
  },
  {
    href: '/zandora/ash-khala/sistema',
    title: 'Sistema',
    note: 'Pathfinder 2e Remastered',
  },
];

export const ASH_KHALA_DISTRICTS = [
  'O Portal',
  'O Limiar',
  'As Lamas',
  'Os Entrocados',
  'A Grande Promenade',
  'O Anel Arcano',
  'Porto das Marcas',
  'A Coroa',
];

export const ASH_KHALA_FACTIONS = [
  'O Cartel da Seda',
  'Os Velados',
  'O Cântico de Abyssalite',
  'A Confraria dos Sem-Selo',
  'Os Filhos das Correntes',
  'A Escarlate',
];

export const ASH_KHALA_PEOPLE = ['Casa Kodax', 'Lúcio Kodax', 'Lion Kodax'];
