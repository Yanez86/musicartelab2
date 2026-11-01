import { getCollection, getEntries, type CollectionEntry } from 'astro:content';

type Corso = CollectionEntry<'corsi'>;

// I corsi nell'ordine deciso dal campo `ordine`.
export async function corsiInOrdine() {
  return (await getCollection('corsi')).sort((a, b) => a.data.ordine - b.data.ordine);
}

// Gli insegnanti del corso (campo `insegnanti`), nell'ordine del libretto.
export async function insegnantiDel(c: Corso) {
  return (await getEntries(c.data.insegnanti)).sort((a, b) => a.data.ordine - b.data.ordine);
}

// Le fasce d'età come si leggono sul sito.
export const nomiFasce = { bambini: 'Bambini', ragazzi: 'Ragazzi', adulti: 'Adulti' } as const;
