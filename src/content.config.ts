import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// EVENTI — un file .md per evento in src/content/eventi/
const eventi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventi' }),
  schema: z.object({
    titolo: z.string(),
    sottotitolo: z.string().optional(),
    tipo: z.string(), // es. Masterclass, Concerto, Contest, Festa, Saggio
    data: z.coerce.date(), // primo giorno dell'evento (AAAA-MM-GG)
    quando: z.string(), // testo libero, es. "28 marzo 2026 · 15:00–17:00"
    luogo: z.string(),
    locandina: z.string().optional(), // nome file in public/img/eventi/
    quota: z.string().optional(),
    info: z.array(z.string()).default([]),
    // Link al modulo di prenotazione (es. Tally): il pulsante sparisce da solo
    // quando l'evento è passato.
    prenotazione: z.string().url('serve un link completo, che inizia con https://').optional(),
    bottone: z.string().default('Prenota'), // testo del pulsante, es. "Iscriviti"
  }),
});

// CORSI — un file .md per corso in src/content/corsi/
const corsi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/corsi' }),
  schema: z.object({
    nome: z.string(),
    ordine: z.number(),
    eta: z.string(),
    fasce: z.array(z.enum(['bambini', 'ragazzi', 'adulti'])),
    formula: z.string(),
    giorni: z.string().default('[giorno e orario]'),
    quota: z.string().default('[€ — / mese]'),
    insegnante: z.string().default('[Nome Cognome]'),
    breve: z.string(),
  }),
});

// INSEGNANTI — un file .md per insegnante in src/content/insegnanti/
const insegnanti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insegnanti' }),
  schema: z.object({
    nome: z.string(),
    strumento: z.string(),
    ordine: z.number(),
    foto: z.string().optional(), // nome file in public/img/insegnanti/
    ritratto: z.number().default(0), // illustrazione segnaposto se manca la foto
    ruolo: z.string().optional(), // riga in corsivo sotto il nome, es. "voce"
    insegna: z.string().optional(), // corsi tenuti; se manca si usa lo strumento
    ascolta: z.string().default('[brani o band preferite]'),
  }),
});

export const collections = { eventi, corsi, insegnanti };
