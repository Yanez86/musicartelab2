import { getCollection, type CollectionEntry } from 'astro:content';
import { u } from './url';

type Evento = CollectionEntry<'eventi'>;

// Mezzanotte di oggi: da qui in poi un evento è "in arrivo", prima è "passato".
export function inizioOggi() {
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  return oggi;
}

export const inArrivo = (e: Evento) => e.data.data >= inizioOggi();

// Indirizzo della pagina dell'evento: /eventi/<nome del file>/
export const linkEvento = (e: Evento) => u(`eventi/${e.id}/`);

// Restituisce gli eventi dal più recente al più vecchio, divisi in
// "recenti" (ultimi 12 mesi o futuri) e "archivio" (più vecchi di un anno).
// Il calcolo avviene quando il sito viene costruito: la GitHub Action lo
// ricostruisce ogni notte, così evento principale e archivio restano aggiornati.
export async function eventiDivisi() {
  const tutti = (await getCollection('eventi')).sort(
    (a, b) => b.data.data.getTime() - a.data.data.getTime(),
  );
  const limite = new Date();
  limite.setFullYear(limite.getFullYear() - 1);
  const recenti = tutti.filter((e) => e.data.data >= limite);
  const archivio = tutti.filter((e) => e.data.data < limite);
  // Evento principale: il prossimo in calendario (il più vicino a oggi);
  // se non ce ne sono in arrivo, il più recente già passato.
  const futuri = tutti.filter(inArrivo).sort((a, b) => a.data.data.getTime() - b.data.data.getTime());
  const principale = futuri[0] ?? recenti[0];
  const principaleFuturo = Boolean(futuri[0]);
  return { tutti, recenti, archivio, futuri, principale, principaleFuturo };
}

// Inizio dell'evento per Google, nel formato ISO: il giorno da `data` e, se
// in `quando` c'è un orario (es. "ore 21:00" o "15:00–17:00"), il primo orario
// con il fuso italiano. Senza orario resta solo il giorno.
export function inizioIso(e: Evento) {
  const giorno = e.data.data.toISOString().slice(0, 10);
  const ora = e.data.quando.match(/\b([01]?\d|2[0-3])[:.]([0-5]\d)\b/);
  if (!ora) return giorno;
  const fuso = new Intl.DateTimeFormat('en', { timeZone: 'Europe/Rome', timeZoneName: 'longOffset' })
    .formatToParts(new Date(`${giorno}T12:00:00Z`))
    .find((p) => p.type === 'timeZoneName')!.value.replace('GMT', '');
  return `${giorno}T${ora[1].padStart(2, '0')}:${ora[2]}:00${fuso}`;
}

// Testo della descrizione senza formattazione, accorciato per i motori di ricerca.
export function testoBreve(testo: string, max = 160) {
  const pulito = testo
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_#>`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (pulito.length <= max) return pulito;
  return `${pulito.slice(0, pulito.lastIndexOf(' ', max - 1))}…`;
}
