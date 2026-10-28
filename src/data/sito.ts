// Dati generali dell'associazione: modificateli qui e cambiano in tutto il sito.
export const sito = {
  nome: 'Musicarte-lab',
  forma: 'APS',
  sottotitolo: 'Scuola di musica, arte e spettacolo',
  citta: 'Merate',
  indirizzo: 'Via Statale 5/7',
  cap: '23807',
  provincia: 'LC',
  codiceFiscale: '03855330134',
  email: 'info@musicartelab.it',
  whatsapp: '340 9595064',
  whatsappLink: 'https://wa.me/393409595064',
  facebook: 'https://www.facebook.com/share/1FeQCNyUnE/',
  instagram: 'https://www.instagram.com/musicartelab/',
  annoCorsi: '[2026/27]',
  periodoCorsi: 'da settembre a giugno',
  fondazione: 2019,
  quotaTessera: '[€ —]', // quota annuale della tessera associativa
  // Riquadro "sorprese" che chiude gli eventi futuri
  sorprese: 'Un sacco di nuove ed emozionanti sorprese vi attendono: concerti, masterclass e serate da non perdere. Seguici sui social per scoprirle per primo.',
  statutoPdf: '', // es. '/statuto.pdf' dopo averlo messo in public/
  // Codice di verifica di Google Search Console (solo la parte dentro content="…").
  googleVerifica: '',
};

// Espressioni in inglese che compaiono nei testi (titoli e descrizioni di eventi
// e corsi, pagine): sul sito vengono marcate come inglesi, così gli screen reader
// le pronunciano in inglese. Scrivetele come nei testi, con maiuscole e minuscole.
// Non servono le parole ormai d'uso comune in italiano (rock, band, jam session,
// masterclass, open day, workshop…).
export const paroleInglesi = [
  'Rock Christmas',
  'Open Jam',
  'Talk and Play',
  'Talk & Play',
  'Freestyle rap battle',
  'Christmas carol',
  'Writing & Producing',
];

export const menu = [
  { href: 'corsi/', label: 'Corsi' },
  { href: 'eventi/', label: 'Eventi' },
  { href: 'insegnanti/', label: 'Insegnanti' },
  { href: 'associazione/', label: 'Associazione' },
  { href: 'sostienici/', label: 'Sostienici' },
];

// Social: icone ufficiali dai kit brand di Meta in public/img/social/,
// da usare nei colori originali (le linee guida non permettono di ricolorarle).
export const social = [
  { href: sito.instagram, label: 'Instagram', handle: '@musicartelab', icon: 'img/social/instagram.png' },
  { href: sito.facebook, label: 'Facebook', handle: 'Musicarte-Lab APS', icon: 'img/social/facebook.png' },
  { href: sito.whatsappLink, label: 'WhatsApp', handle: sito.whatsapp, icon: 'img/social/whatsapp.svg' },
];
