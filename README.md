# Mistero-al-museo

## Compiti

|API     |Player  |Autore|Valutatore|Storie|
|--------|--------|------|----------|------|
|David   |Ale     |Mattia|Elena     |Ale   |
|Elena   |mattia  |Ale   |David     |      |

Per rendere le storie private il Prof ha consigliato di usare due archivi diversi. Uno pubblico e uno privato e spostare le storie da una parte all’altra.

- [Trello](https://trello.com/b/SPRL2lMT/tecweb) utile per organizzare i compiti e le cose da fare

## STORIE

- Più opzioni
- Indizi
- Divise in task

## Player

Le varie versioni del player

- V0.1
  - Interfaccai semplice, il player riceve il JSON contenente qualche domanda
  - Scopo: iniziare a creare un semplice layout del player SOLO PC
- V0.2
  - Controllo risposte sbagliate + notifica errori
- V0.3
  - Storie: più complesse con scelta multipla
  - Scopo: iniziare a creare un sistema che colleghi le varie quest tra di loro
- V0.4
  - Aggiunta del caso **guardia arrabbiata** e un indicatore rabbia (?)
- V0.5
  - Aggiunta la possibilità di importare un file di stile (css) della pagina cosi da rendere ogni storia personale
- V0.6
  - Interfacciarsi con API per prendere il file JSON *completo* (l'utente deve poter "giocare" anche **senza** internet)
  - Scopo: creare un sistema di interfacciatra back-end e front-end

## Editior

- V0.1
  - Interfaccia semplice, è solo possibile creare domande con una dimensione prefissata di risposte.
  - Scopo: sviluppare un semplice layout.
- V0.2
  - Maggore possibilità di personalizzare le storie (aggiunda di immagini, numero di risposte variabile).
- V0.3
  - Aggiunta la possibilità di caricare il css che modificherà la pagina di viualizzazione delle storie
- V0.4
  - Aggiunta la possibilità di aggiungere il caso **guardia arrabbiata**
  
## API

- V0.1
  - Quando interrogato restituisce un file JSON (sempre uguale)
- V0.2
  - Associa un **hash** al file, quando interrogato restituisce il file corrispondente all'hash
- V0.3
  - Aggiunta la possibilità di caricare un file sul server
- V0.4
  - Organizzazione delle storie in gruppi tutti all'interno di cartelle (nome delle cartelle = hash)

## Possibile esempio file JSON

````JSON
{
"titolo":"Titolo storia",
  "Descrizione": "Breve descrizione",
  "Domande":[{
    "ID": 1,
    "Titolo":"Titolo domanda 1",
    "Descrizione":"Descrizione domanda 1",
    "Risposte":[{
      "ID":1,
      "titolo": "risposta 1 falsa",
      "valore": false
    },
    {
      "ID":2,
      "titolo": "risposta 2 falsa",
      "valore": false
    },
    {
      "ID":3,
      "titolo": "risposta 3 vera",
      "valore": true
    }]
  },
  {
    "ID": 2,
    "Titolo":"Titolo domanda 2",
    "Descrizione":"Descrizione domanda 2",
    "Risposte":[{
      "ID":1,
      "titolo": "risposta 1 falsa",
      "valore": false
    },
    {
      "ID":2,
      "titolo": "risposta 2 vera",
      "valore": true
    },
    {
      "ID":3,
      "titolo": "risposta 3 falsa",
      "valore": false
    }]
  },
  ]
}````
