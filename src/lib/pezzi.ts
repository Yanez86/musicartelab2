// Divide un testo nei pezzi da evidenziare: il nome dell'associazione
// e le espressioni in inglese elencate in src/data/sito.ts.
// Lo usano Testo.astro (campi di eventi e corsi) e rehype-nome.mjs (testi in markdown).
import { sito, paroleInglesi } from '../data/sito';

export type Pezzo = { testo: string; tipo: 'nome' | 'inglese' | 'normale' };

const protetto = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Solo parole intere: "Open Jam" non viene trovato dentro "Open Jamming".
const cerca = new RegExp(`(?<!\\p{L})(${[sito.nome, ...paroleInglesi].map(protetto).join('|')})(?!\\p{L})`, 'gu');

export function pezzi(testo: string): Pezzo[] {
  return testo
    .split(cerca)
    .filter(Boolean)
    .map((t) => ({ testo: t, tipo: t === sito.nome ? 'nome' : paroleInglesi.includes(t) ? 'inglese' : 'normale' }));
}
