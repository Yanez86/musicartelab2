import { getCollection } from 'astro:content';

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
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);
  const futuri = tutti.filter((e) => e.data.data >= oggi).sort((a, b) => a.data.data.getTime() - b.data.data.getTime());
  const principale = futuri[0] ?? recenti[0];
  const principaleFuturo = Boolean(futuri[0]);
  return { tutti, recenti, archivio, futuri, principale, principaleFuturo };
}
