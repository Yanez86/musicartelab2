// Costruisce un link interno tenendo conto del percorso base del sito
// (su GitHub Pages il sito vive sotto /musicartelab2/).
export function u(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

const MESI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
const MESI_LUNGHI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

export const giorno = (d: Date) => String(d.getDate()).padStart(2, '0');
export const meseBreve = (d: Date) => MESI[d.getMonth()];
export const dataBreve = (d: Date) => `${d.getDate()} ${MESI[d.getMonth()]} ${d.getFullYear()}`;
export const dataLunga = (d: Date) => `${d.getDate()} ${MESI_LUNGHI[d.getMonth()]} ${d.getFullYear()}`;
