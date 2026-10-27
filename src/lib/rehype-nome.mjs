// Plugin per i testi in markdown (eventi, insegnanti): avvolge ogni
// "Musicarte-lab" in <strong class="nome-brand">, così ha lo stesso stile
// del nome nel resto del sito.
const NOME = 'Musicarte-lab';

export default function rehypeNome() {
  const visita = (nodo) => {
    if (!nodo.children) return;
    if (nodo.type === 'element' && (nodo.tagName === 'strong' || nodo.tagName === 'a' || nodo.tagName === 'code')) return;
    const nuovi = [];
    for (const figlio of nodo.children) {
      if (figlio.type === 'text' && figlio.value.includes(NOME)) {
        figlio.value.split(NOME).forEach((pezzo, i) => {
          if (i > 0) nuovi.push({ type: 'element', tagName: 'strong', properties: { className: ['nome-brand'] }, children: [{ type: 'text', value: NOME }] });
          if (pezzo) nuovi.push({ type: 'text', value: pezzo });
        });
      } else {
        visita(figlio);
        nuovi.push(figlio);
      }
    }
    nodo.children = nuovi;
  };
  return (albero) => visita(albero);
}
