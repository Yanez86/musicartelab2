# Musicarte-lab APS — sito web

Sito dell’associazione Musicarte-lab di Merate: corsi ed eventi di musica pop e rock.
È costruito con [Astro](https://astro.build) e pubblicato su GitHub Pages:
**https://yanez86.github.io/musicartelab2/**

## Cosa si modifica e dove

| Voglio cambiare… | File |
|---|---|
| Email, WhatsApp, indirizzo, codice fiscale, anno dei corsi | `src/data/sito.ts` |
| Un evento | `src/content/eventi/*.md` |
| Un corso | `src/content/corsi/*.md` |
| Un insegnante | `src/content/insegnanti/*.md` |
| Il testo dello statuto | `src/data/statuto.ts` |
| L’informativa privacy e cookie | `src/pages/privacy.astro` |
| Foto e locandine | `public/img/` |
| Grafica comune (colori, font, pulsanti) | `src/styles/global.css` |
| Le pagine | `src/pages/*.astro` |

### Aggiungere un evento

1. Mettete la locandina in `public/img/eventi/`, per esempio `concerto-natale-2026.jpg`.
2. Create un file in `src/content/eventi/`, per esempio `concerto-natale-2026.md`:

```md
---
titolo: Concerto di Natale
sottotitolo: con la MusicarteBand
tipo: Concerto
data: 2026-12-20
quando: 20 dicembre 2026 · ore 21:00
luogo: Auditorium Giusi Spezzaferri, Merate
locandina: concerto-natale-2026.jpg
quota: Ingresso libero
info:
  - Prima parte con gli allievi dei corsi
  - Seconda parte con la MusicarteBand
link: https://link-al-form-di-iscrizione
---
Descrizione dell’evento, anche su più paragrafi.
```

3. Fate commit e push: in un paio di minuti il sito si aggiorna da solo.

L’evento più recente finisce in evidenza in cima alla pagina Eventi, gli altri sotto in ordine di data,
e quelli più vecchi di un anno passano in **Archivio**. Il sito si ricostruisce da solo ogni lunedì,
quindi l’archivio resta aggiornato anche se non si pubblica nulla.

### Aggiungere la foto di un insegnante

Mettete la foto (verticale, circa 800×1000 px) in `public/img/insegnanti/` e nel file dell’insegnante aggiungete
`foto: nome-file.jpg`. Finché non c’è la foto viene mostrata un’illustrazione segnaposto.

## Lavorare in locale

Serve [Node.js](https://nodejs.org) 20 o più recente.

```bash
npm install
npm run dev      # anteprima su http://localhost:4321/musicartelab2/
npm run build    # crea il sito finale in dist/
```

## Pubblicazione

La GitHub Action in `.github/workflows/sito.yml` costruisce e pubblica il sito a ogni push su `master`.
La prima volta bisogna attivare GitHub Pages: **Settings → Pages → Source: GitHub Actions**.

Per usare un dominio vostro (es. `musicartelab.it`) cambiate `site` e togliete `base` in `astro.config.mjs`.

## Da completare

Tutti i testi tra parentesi quadre, ad esempio `[indirizzo sede]`, sono segnaposto da sostituire:
indirizzo e codice fiscale, quote dei corsi, nomi e bio degli insegnanti, testo dello statuto,
formazione della MusicarteBand.

La foto del palco usata in apertura è firmata PuntoFoto: verificate il permesso d’uso e il credito.

La pagina **Privacy** è una bozza da far rivedere a chi segue gli aspetti legali dell’associazione
(compreso il tempo di conservazione dei messaggi, `[12 mesi]`). Il sito oggi non usa cookie né servizi
esterni e i font sono caricati dal sito stesso: se aggiungete statistiche, mappe, video o post incorporati
va aggiornata l’informativa e potrebbe servire il banner dei cookie.
