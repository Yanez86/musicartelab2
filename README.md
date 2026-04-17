# MusicArte A.P.S. — Sito Web

Sito ufficiale dell'associazione di promozione sociale **MusicArte A.P.S.**

---

## 📁 Struttura del progetto

```
musicarte/
├── index.html            # Landing page
├── eventi.html           # Pagina eventi (carica da JSON)
├── corsi.html            # Pagina corsi
├── insegnanti.html       # Pagina insegnanti
├── statuto.html          # Pagina statuto
├── css/
│   └── style.css         # Stili globali
├── js/
│   ├── components.js     # Navbar e footer condivisi
│   └── eventi.json       # 📌 FILE DA AGGIORNARE per gli eventi
└── img/
    ├── teacher/          # Foto degli insegnanti (una per strumento)
    │   ├── chitarra.jpg
    │   ├── canto.jpg
    │   ├── basso.jpg
    │   ├── batteria.jpg
    │   └── pianoforte.jpg
    └── instagram/
        └── ultima.jpg    # 📌 Aggiornare con l'ultima foto Instagram
```

---

## 🔄 Come aggiornare gli eventi

Modifica il file `js/eventi.json`. Ogni evento ha questa struttura:

```json
{
  "id": 7,
  "titolo": "Nome dell'evento",
  "data": "2026-03-15",
  "ora": "20:30",
  "luogo": "Nome del luogo, Indirizzo",
  "categoria": "Concerto",
  "descrizione": "Descrizione estesa dell'evento...",
  "immagine": "",
  "link_biglietti": "",
  "ingresso": "Libero"
}
```

**Categorie disponibili:** `Concerto` · `Workshop` · `Masterclass` · `Saggio` · `Corso`

**`link_biglietti`**: può essere una URL (`https://...`), un link mailto (`mailto:info@musicarte.aps.it`) o vuoto.

---

## 📸 Come aggiornare l'immagine Instagram

1. Salva l'ultima foto pubblicata su Instagram come `img/instagram/ultima.jpg`
2. Oppure, per un link diretto, apri `index.html` e cerca il commento `AGGIORNAMENTO MANUALE IMMAGINE INSTAGRAM`, sostituisci il div placeholder con:
   ```html
   <img src="img/instagram/ultima.jpg" alt="Descrizione del post" />
   ```

---

## 👩‍🏫 Come aggiornare le foto degli insegnanti

Sostituisci le immagini in `img/teacher/` con le foto reali. Formato consigliato: **JPG, 600×800px** (verticale), peso massimo 300KB. I nomi file devono rimanere invariati:
- `chitarra.jpg`
- `canto.jpg`
- `basso.jpg`
- `batteria.jpg`
- `pianoforte.jpg`

---

## 🚀 Deploy su GitHub Pages

1. Crea un repository su GitHub (es. `musicarte-sito`)
2. Carica tutti i file del progetto
3. Vai in **Settings → Pages**
4. In **Source**, seleziona `Deploy from a branch`
5. Seleziona il branch `main` e la cartella `/ (root)`
6. Salva — il sito sarà disponibile all'indirizzo `https://tuousername.github.io/musicarte-sito/`

### Aggiornamenti futuri

```bash
# Dopo aver modificato eventi.json o altri file:
git add .
git commit -m "Aggiornamento eventi - aprile 2026"
git push
```

GitHub Pages aggiornerà il sito automaticamente entro pochi minuti.

---

## ✏️ Aggiornare le informazioni dell'associazione (footer, contatti)

Apri `js/components.js` e modifica la funzione `getFooterHTML()`:

- **Indirizzo** → cerca `Via della Musica, 12`
- **Telefono** → cerca `+39 06 000 0000`
- **Email** → cerca `info@musicarte.aps.it`
- **Codice Fiscale** → cerca `00000000000`
- **Iscrizione RUNTS** → cerca `n. 00000`
- **Link social** → cerca `href="#"` nelle icone footer

---

## 🛠️ Note tecniche

- Sito **statico** — nessun backend, nessun database.
- Compatibile con tutti i browser moderni.
- Font caricati da Google Fonts (richiede connessione internet).
- Gli eventi vengono caricati via `fetch()` — in locale, usa un server (es. `npx serve .`) oppure carica direttamente su GitHub Pages.

---

*MusicArte A.P.S. — Associazione di Promozione Sociale ai sensi del D.Lgs. 117/2017*
