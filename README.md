# Musicarte-lab APS — sito web

Sito dell’associazione Musicarte-lab di Merate: corsi ed eventi di musica pop e rock.
È costruito con [Astro](https://astro.build) e pubblicato su GitHub Pages:
**https://yanez86.github.io/musicartelab2/**

## Cosa si modifica e dove

| Voglio cambiare… | File |
|---|---|
| Email, WhatsApp, indirizzo, codice fiscale, anno dei corsi, quota della tessera, espressioni in inglese | `src/data/sito.ts` |
| Un evento | `src/content/eventi/*.md` |
| Un corso | `src/content/corsi/*.md` |
| Un insegnante | `src/content/insegnanti/*.md` |
| La pagina Associazione (chi siamo, come diventare soci) | `src/pages/associazione.astro` |
| Il testo dello statuto | `src/data/statuto.ts` |
| L’informativa privacy e cookie | `src/pages/privacy.astro` |
| Foto e locandine | `public/img/` |
| Grafica comune (colori, font, pulsanti) | `src/styles/global.css` |
| Le pagine | `src/pages/*.astro` (la pagina di ogni evento è `src/pages/attivita/[id].astro`, quella di ogni corso `src/pages/corsi/[id].astro`; quelle in `src/pages/eventi` fanno solo funzionare i vecchi link) |

Per aggiungere eventi (anche con il link di prenotazione Tally), corsi, insegnanti e foto,
e per capire come funzionano pubblicazione e build notturna, c’è la **[guida rapida](GUIDA.md)**.

## Lavorare in locale

Serve [Node.js](https://nodejs.org) 20 o più recente.

```bash
npm install
npm run dev      # anteprima su http://localhost:4321/musicartelab2/
npm run build    # crea il sito finale in dist/
```

## Pubblicazione

La GitHub Action in `.github/workflows/sito.yml` costruisce e pubblica il sito a ogni push su `master`
e ogni notte poco dopo mezzanotte, con l’ora italiana (`TZ: Europe/Rome`), così evento in evidenza e archivio
restano aggiornati.
La prima volta bisogna attivare GitHub Pages: **Settings → Pages → Source: GitHub Actions**.

Per usare un dominio vostro (es. `musicartelab.it`) cambiate `site` e togliete `base` in `astro.config.mjs`.

## Da completare

Tutti i testi tra parentesi quadre, ad esempio `[indirizzo sede]`, sono segnaposto da sostituire:
indirizzo e codice fiscale, quote dei corsi e della tessera, nomi e bio degli insegnanti, testo dello statuto,
formazione della MusicarteBand.

La foto del palco usata in apertura è firmata PuntoFoto: verificate il permesso d’uso e il credito.

La pagina **Privacy** è una bozza da far rivedere a chi segue gli aspetti legali dell’associazione
(compreso il tempo di conservazione dei messaggi, `[12 mesi]`). Il sito oggi non usa cookie né servizi
esterni (le prenotazioni Tally sono semplici link) e i font sono caricati dal sito stesso: se aggiungete
statistiche, mappe, video o post incorporati va aggiornata l’informativa e potrebbe servire il banner dei cookie.
