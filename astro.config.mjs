// @ts-check
import { defineConfig } from 'astro/config';
import rehypeNome from './src/lib/rehype-nome.mjs';

// Il sito è pubblicato su GitHub Pages all'indirizzo
// https://yanez86.github.io/musicartelab2/
// Se in futuro userete un dominio vostro (es. musicartelab.it),
// cambiate `site` e togliete `base`.
export default defineConfig({
  site: 'https://yanez86.github.io',
  base: '/musicartelab2',
  markdown: { rehypePlugins: [rehypeNome] },
});
