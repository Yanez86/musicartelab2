import type { APIRoute } from 'astro';
import { u } from '../lib/url';

// Indica ai motori di ricerca dove trovare la mappa del sito.
// Su GitHub Pages finisce in /musicartelab2/robots.txt, dove i motori di ricerca
// non lo cercano: entra in funzione quando il sito avrà un dominio suo.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(u('sitemap-index.xml'), site)}\n`);
