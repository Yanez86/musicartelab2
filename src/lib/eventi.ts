import { getCollection } from 'astro:content';

// Restituisce gli eventi dal più recente al più vecchio, divisi in
// "recenti" (ultimi 12 mesi o futuri) e "archivio" (più vecchi di un anno).
// Il calcolo avviene quando il sito viene costruito: la GitHub Action lo
// ricostruisce ogni lunedì, così gli eventi passano da soli in archivio.
export async function eventiDivisi() {
  const tutti = (await getCollection('eventi')).sort(
    (a, b) => b.data.data.getTime() - a.data.data.getTime(),
  );
  const limite = new Date();
  limite.setFullYear(limite.getFullYear() - 1);
  const recenti = tutti.filter((e) => e.data.data >= limite);
  const archivio = tutti.filter((e) => e.data.data < limite);
  return { tutti, recenti, archivio };
}
