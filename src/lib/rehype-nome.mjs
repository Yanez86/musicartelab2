// Plugin per i testi in markdown (eventi, insegnanti): avvolge ogni
// "Musicarte-lab" in <strong class="nome-brand">, così ha lo stesso stile
// del nome nel resto del sito, e marca come inglesi (lang="en") le
// espressioni elencate in src/data/sito.ts.
import { pezzi } from './pezzi.ts';

const elementi = {
  nome: (testo) => ({ type: 'element', tagName: 'strong', properties: { className: ['nome-brand'] }, children: [{ type: 'text', value: testo }] }),
  inglese: (testo) => ({ type: 'element', tagName: 'span', properties: { lang: 'en' }, children: [{ type: 'text', value: testo }] }),
  normale: (testo) => ({ type: 'text', value: testo }),
};

export default function rehypeNome() {
  const visita = (nodo) => {
    if (!nodo.children) return;
    if (nodo.type === 'element' && (nodo.tagName === 'strong' || nodo.tagName === 'a' || nodo.tagName === 'code')) return;
    const nuovi = [];
    for (const figlio of nodo.children) {
      if (figlio.type === 'text') {
        pezzi(figlio.value).forEach((p) => nuovi.push(elementi[p.tipo](p.testo)));
      } else {
        visita(figlio);
        nuovi.push(figlio);
      }
    }
    nodo.children = nuovi;
  };
  return (albero) => visita(albero);
}
