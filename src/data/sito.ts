// Dati generali dell'associazione: modificateli qui e cambiano in tutto il sito.
export const sito = {
  nome: 'Musicarte-lab',
  forma: 'APS',
  sottotitolo: 'Scuola di musica, arte e spettacolo',
  citta: 'Merate',
  indirizzo: 'Via Statale 5/7',
  codiceFiscale: '03855330134',
  email: 'info@musicartelab.it',
  whatsapp: '340 9595064',
  whatsappLink: 'https://wa.me/393409595064',
  facebook: 'https://www.facebook.com/share/1FeQCNyUnE/',
  instagram: 'https://www.instagram.com/musicartelab/',
  annoCorsi: '[2026/27]',
  periodoCorsi: 'da settembre a giugno',
  fondazione: 2019,
  pieghevole: 'pieghevole-musicartelab.pdf',
  statutoPdf: '', // es. '/statuto.pdf' dopo averlo messo in public/
};

export const menu = [
  { href: 'corsi/', label: 'Corsi' },
  { href: 'eventi/', label: 'Eventi' },
  { href: 'insegnanti/', label: 'Insegnanti' },
  { href: 'statuto/', label: 'Statuto' },
  { href: 'sostienici/', label: 'Sostienici' },
];

// Social: icone ufficiali dai kit brand di Meta in public/img/social/,
// da usare nei colori originali (le linee guida non permettono di ricolorarle).
export const social = [
  { href: sito.instagram, label: 'Instagram', handle: '@musicartelab', icon: 'img/social/instagram.png' },
  { href: sito.facebook, label: 'Facebook', handle: 'Musicarte-Lab APS', icon: 'img/social/facebook.png' },
  { href: sito.whatsappLink, label: 'WhatsApp', handle: sito.whatsapp, icon: 'img/social/whatsapp.svg' },
];
