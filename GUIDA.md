# Guida rapida al sito

Come aggiungere, cambiare e togliere contenuti dal sito di Musicarte-lab, e cosa succede dietro le quinte.
Non serve installare nulla: si fa tutto dal browser, su GitHub.

- **Sito:** https://yanez86.github.io/musicartelab2/
- **File del sito:** https://github.com/Yanez86/musicartelab2
- **Stato delle pubblicazioni:** https://github.com/Yanez86/musicartelab2/actions

## Come funziona

Ogni contenuto è un piccolo file di testo: un file per evento, uno per corso, uno per insegnante.
Quando salvate una modifica su GitHub parte la **build**, cioè il sito viene ricostruito e pubblicato.

```
modificate un file  →  "Commit changes"  →  build (circa 2 minuti)  →  sito aggiornato
```

Ogni notte, **poco dopo mezzanotte** (alle 00:05, all’01:05 con l’ora legale), il sito si ricostruisce
da solo anche se nessuno ha toccato nulla. È questo che tiene il sito in ordine senza interventi:

- l’evento in evidenza passa al successivo il giorno dopo la sua data;
- gli eventi conclusi scendono tra le **Attività passate**;
- quelli di oltre 12 mesi finiscono in **Archivio**;
- il pulsante di prenotazione di un evento concluso sparisce.

Quindi un evento **non va tolto** dopo che è passato: ci pensa il sito.

## Modificare dal browser

| Per… | Su GitHub |
|---|---|
| Cambiare un file | Apritelo e cliccate la matita ✏️ in alto a destra |
| Creare un file | Entrate nella cartella giusta → **Add file → Create new file** |
| Caricare foto o locandine | Entrate nella cartella dell’immagine → **Add file → Upload files** |
| Cancellare un file | Apritelo → menu **⋯** in alto a destra → **Delete file** |

Dopo ogni modifica cliccate **Commit changes…** e confermate con **Commit changes**
(lasciate selezionato *Commit directly to the `master` branch*).

Poi controllate la pagina [Actions](https://github.com/Yanez86/musicartelab2/actions):

| Simbolo | Significato |
|---|---|
| 🟡 pallino giallo | build in corso |
| ✅ spunta verde | fatto: il sito è aggiornato (se non vedete la modifica, ricaricate la pagina tra qualche minuto) |
| ❌ X rossa | errore: il sito **resta com’era**, vedete [Se qualcosa va storto](#se-qualcosa-va-storto) |

## Eventi

Gli eventi compaiono nella pagina **Attività** del sito.

Cartella: [`src/content/eventi/`](src/content/eventi) · locandine: [`public/img/eventi/`](public/img/eventi)

### Aggiungere un evento

1. Caricate la locandina in `public/img/eventi/`, con un nome semplice: `rock-christmas-2026.jpg`.
2. In `src/content/eventi/` create un file con lo stesso nome ma finale `.md`: `rock-christmas-2026.md`.
   Il nome del file diventa l’indirizzo della pagina dell’evento, quindi sceglietelo bene.
3. Incollate questo modello e compilatelo:

```md
---
titolo: Rock Christmas
sottotitolo: Concerto di Natale
tipo: Concerto
data: 2026-12-14
quando: Lunedì 14 dicembre 2026 · ore 21:00
luogo: Auditorium Giusi Spezzaferri, Piazza degli Eroi 3, Merate
locandina: rock-christmas-2026.jpg
quota: Ingresso libero
info:
  - Prima parte con gli allievi dei corsi
  - Seconda parte con la MusicarteBand
prenotazione: https://tally.so/r/abc123
bottone: Prenota il posto
---
Descrizione dell’evento, anche su più paragrafi.
Lasciate una riga vuota tra un paragrafo e l’altro.
```

| Campo | Obbligatorio | Cosa scrivere |
|---|---|---|
| `titolo` | sì | Nome dell’evento |
| `sottotitolo` | no | Riga sotto il titolo |
| `tipo` | sì | Concerto, Masterclass, Festa, Jam session… Diventa il filtro nella pagina Attività: usate sempre le stesse parole |
| `data` | sì | Il giorno, nel formato **AAAA-MM-GG**. Decide l’ordine e quando l’evento diventa “passato”. Se dura più giorni, il primo |
| `quando` | sì | Testo libero che si legge sul sito: giorno, ora, più date |
| `luogo` | sì | Dove |
| `locandina` | no | Nome del file in `public/img/eventi/`. Senza, compare una foto generica |
| `quota` | no | Prezzo o “Ingresso libero” |
| `info` | no | Elenco di punti, ognuno su una riga che inizia con due spazi, trattino e spazio |
| `prenotazione` | no | Link al modulo Tally, vedi sotto |
| `bottone` | no | Testo del pulsante di prenotazione. Se manca: **Prenota** |

### La pagina dell’evento

Ogni evento ha una pagina sua, con locandina intera, descrizione, prenotazione e le icone per
condividerla: WhatsApp, Facebook, copia link e, sul telefono, altre app (Instagram, Telegram…).
L’indirizzo è il nome del file senza `.md`:
`https://yanez86.github.io/musicartelab2/attivita/rock-christmas-2026/`
(i vecchi link con `/eventi/` al posto di `/attivita/` funzionano ancora e portano qui)

- **È il link da condividere** su WhatsApp, Instagram e Facebook: l’anteprima mostra locandina, titolo e data.
- Google la usa per mostrare l’evento nei risultati di ricerca, con data e luogo.
- Sul sito ci si arriva cliccando su qualsiasi scheda dell’evento.
- **Non rinominate il file** dopo aver condiviso il link: l’indirizzo cambierebbe e il vecchio link
  smetterebbe di funzionare.

### Prenotazioni con Tally

1. In Tally aprite il modulo → **Share** → copiate il link, del tipo `https://tally.so/r/abc123`.
2. Nel file dell’evento aggiungete `prenotazione: https://tally.so/r/abc123`.
3. Se volete un testo diverso da “Prenota”, aggiungete per esempio `bottone: Iscriviti`.

Il pulsante compare sull’evento in evidenza (in home e nella pagina Attività), sulla sua scheda tra le
prossime attività e nella pagina dell’evento. Il modulo si apre in una nuova scheda del browser. **Il giorno dopo l’evento il pulsante
sparisce da solo.**

- **Posti esauriti prima della data:** togliete la riga `prenotazione`, oppure chiudete il modulo dalle
  impostazioni di Tally: chi clicca vedrà che le iscrizioni sono chiuse.
- **Privacy:** nel modulo chiedete solo i dati che servono e aggiungete una riga con il link all’informativa
  del sito, https://yanez86.github.io/musicartelab2/privacy/

### Cambiare, annullare o togliere un evento

- **Cambiare** data, orario o testi: modificate il file. Se cambia il giorno, aggiornate sia `data` sia `quando`.
- **Evento annullato:** lasciate il file, scrivete `sottotitolo: Annullato` e togliete la riga `prenotazione`.
  Così chi ha ricevuto il link trova l’avviso. Se cancellate il file, la pagina sparisce e il link non funziona più.
- **Togliere** un evento passato: di solito non serve, va in archivio da solo e la sua pagina resta come
  ricordo. Se proprio volete, cancellate il file `.md` e la sua locandina.

## Corsi, insegnanti e dati generali

| Cosa | Dove | Note |
|---|---|---|
| Corsi | [`src/content/corsi/`](src/content/corsi) | `ordine` decide la posizione; `fasce` può contenere `bambini`, `ragazzi`, `adulti` |
| Insegnanti | [`src/content/insegnanti/`](src/content/insegnanti) | Foto verticali (circa 800×1000 px) in `public/img/insegnanti/`, poi `foto: nome-file.jpg` |
| Email, WhatsApp, indirizzo, anno dei corsi, quota della tessera | [`src/data/sito.ts`](src/data/sito.ts) | Cambiate solo il testo tra apici `'…'` |
| Associazione | [`src/pages/associazione.astro`](src/pages/associazione.astro) | Chi siamo, cosa facciamo, come diventare soci |
| Statuto | [`src/data/statuto.ts`](src/data/statuto.ts) | |
| Privacy | [`src/pages/privacy.astro`](src/pages/privacy.astro) | |

- **Aggiungere** un corso o un insegnante: aprite un file esistente, copiatene il contenuto, create un
  file nuovo nella stessa cartella e cambiate i testi.
- **Togliere** un corso o un insegnante: cancellate il suo file. Sparisce dal sito alla build successiva.

## Foto e locandine

- Formato **JPG**, lato lungo 1200–1600 px, peso sotto i 300 KB circa. Per alleggerirle va bene
  [squoosh.app](https://squoosh.app).
- Nomi in minuscolo, con trattini al posto degli spazi, senza accenti: `open-day-2026.jpg`.
- Il nome nel file `.md` deve essere **identico**, maiuscole comprese: `Foto.JPG` e `foto.jpg` sono
  due file diversi.

## Se qualcosa va storto

Una ❌ in [Actions](https://github.com/Yanez86/musicartelab2/actions) vuol dire che la build non è
riuscita. Il sito online non cambia finché non correggete. Cliccate sulla riga rossa → **build** → il
passaggio **Run npm run build**: l’errore indica il file e il campo da sistemare.

| Errore tipico | Soluzione |
|---|---|
| Testo che contiene due punti e spazio, per esempio `titolo: Rock: la serata` | Mettetelo tra virgolette: `titolo: "Rock: la serata"` |
| Testo che inizia con `[`, `{`, `*`, `&`, `#` o `@` | Mettetelo tra virgolette |
| Data scritta male, per esempio `14/12/2026` | Formato `2026-12-14` |
| Righe di `info` non allineate | Ogni riga inizia con due spazi, trattino e spazio: `  - testo` |
| `prenotazione: serve un link completo…` | Il link deve iniziare con `https://` |
| Mancano le due righe `---` in cima o in fondo ai campi | Ripristinatele, come nel modello |

Se la build va ma una foto non si vede, il nome del file non corrisponde: controllate maiuscole ed estensione.

## La build notturna

- È impostata in [`.github/workflows/sito.yml`](.github/workflows/sito.yml): ogni notte alle 00:05
  (01:05 con l’ora legale). GitHub a volte la avvia con qualche minuto di ritardo.
- **Ricostruire a mano**, per esempio per vedere subito un cambio di giorno:
  [Actions](https://github.com/Yanez86/musicartelab2/actions) → **Sito** → **Run workflow**.

> [!WARNING]
> Se per **60 giorni** nessuno fa modifiche al repository, GitHub sospende la build notturna e manda
> un’email al proprietario. Succede facilmente d’estate. Per riattivarla: Actions → **Sito** →
> **Enable workflow**. A settembre, prima di riprendere, controllate che sia attiva.

## Google

Il sito è già pronto per i motori di ricerca: ogni pagina ha titolo e descrizione propri, c’è la mappa
del sito (`sitemap-index.xml`), una scheda con i dati dell’associazione e, per ogni evento, i dati
che Google usa per mostrarlo nei risultati.
Il passo che resta da fare una volta sola è iscriverlo a **Google Search Console**:

1. Andate su https://search.google.com/search-console con l’account Google dell’associazione.
2. **Aggiungi proprietà → Prefisso URL** → `https://yanez86.github.io/musicartelab2/`.
3. Scegliete la verifica con **Tag HTML** e copiate solo il codice tra le virgolette di `content="…"`.
4. Incollatelo in `src/data/sito.ts`, alla voce `googleVerifica: '…'`, e fate commit.
5. Quando la build è verde, tornate in Search Console e cliccate **Verifica**.
6. Nel menu **Sitemap** inviate `sitemap-index.xml`.

Da lì vedrete quante persone trovano il sito su Google e con quali ricerche.

### Passare a un dominio vostro

Per pubblicare il sito su un indirizzo come `musicartelab.it`:

1. In [`astro.config.mjs`](astro.config.mjs) mettete `site: 'https://www.musicartelab.it'` e cancellate la riga `base`.
2. Su GitHub: **Settings → Pages → Custom domain**, poi configurate il DNS presso chi gestisce il dominio
   come indicato da GitHub.
3. In Search Console aggiungete il nuovo indirizzo e inviate di nuovo la sitemap.
