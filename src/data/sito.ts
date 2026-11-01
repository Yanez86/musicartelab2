// Dati generali dell'associazione: modificateli qui e cambiano in tutto il sito.
export const sito = {
  nome: 'Musicarte-lab',
  forma: 'APS',
  sottotitolo: 'Scuola di musica, arte e spettacolo',
  citta: 'Merate',
  indirizzo: 'Via Statale 5/7',
  cap: '23807',
  provincia: 'LC',
  mapsLink: 'https://maps.app.goo.gl/4R9XFkPVUf9h8hcD9',
  codiceFiscale: '03855330134',
  iscrizione: 'Iscritta al RUNTS e al Registro Provinciale APS L. 388/2000 con numero LC147 sez. prev. B',
  email: 'info@musicartelab.it',
  whatsapp: '340 9595064',
  whatsappLink: 'https://wa.me/393409595064',
  salaProve: '339 6968261', // numero per prenotare la sala prove
  salaProveLink: 'https://wa.me/393396968261',
  facebook: 'https://www.facebook.com/share/1FeQCNyUnE/',
  instagram: 'https://www.instagram.com/musicartelab/',
  annoCorsi: '[2026/27]',
  periodoCorsi: 'da settembre a giugno',
  fondazione: 2019,
  quotaTessera: '€ 20', // quota annuale della tessera associativa
  // Consiglio direttivo (pagina Associazione)
  consiglioDirettivo: [
    { nome: 'Simona Russi', ruolo: 'presidente' },
    { nome: 'Giada Barzago', ruolo: 'vicepresidente' },
    { nome: 'Fabio Mazzoli', ruolo: 'tesoriere' },
    { nome: 'Alessandra Paganini', ruolo: 'consigliera' },
    { nome: 'Silvana Visioli', ruolo: 'consigliera' },
  ],
  // Conto per le donazioni liberali (pagina Sostienici)
  iban: 'IT82F0623051530000015191502',
  contoIntestatario: 'MUSICARTE LAB A.P.S.',
  contoBanca: 'Credit Agricole, Agenzia di Merate',
  // Riquadro "sorprese" che chiude le prossime attività
  sorprese: 'Un sacco di nuove ed emozionanti sorprese vi attendono: concerti, masterclass e serate da non perdere. Seguici sui social per scoprirle per primo.',
  statutoPdf: '/statuto.pdf', // file in public/: solo lo statuto, senza l'atto costitutivo (ha i dati personali dei fondatori)
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
  'Rock Experience',
  'Open Jam',
  'Talk and Play',
  'Talk & Play',
  'Freestyle rap battle',
  'Christmas carol',
  'Xmas carol',
  'Writing & Producing',
  'Writing & Production',
  'The Bridge Festival',
  'Circle Song',
  'black music',
];

export const menu = [
  { href: 'corsi/', label: 'Corsi' },
  { href: 'attivita/', label: 'Attività' },
  { href: 'insegnanti/', label: 'Insegnanti' },
  { href: 'associazione/', label: 'Associazione' },
  { href: 'sostienici/', label: 'Sostienici' },
  { href: 'contattaci/', label: 'Contattaci' },
];

// Social: icone ufficiali dai kit brand di Meta in public/img/social/,
// da usare nei colori originali (le linee guida non permettono di ricolorarle).
export const social = [
  { href: sito.instagram, label: 'Instagram', handle: '@musicartelab', icon: 'img/social/instagram.png' },
  { href: sito.facebook, label: 'Facebook', handle: 'Musicarte-Lab APS', icon: 'img/social/facebook.png' },
  { href: sito.whatsappLink, label: 'WhatsApp', handle: sito.whatsapp, icon: 'img/social/whatsapp.svg' },
];
