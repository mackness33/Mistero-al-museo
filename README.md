# Mistero-al-museo

Per rendere le storie private il Prof ha consigliato di usare due archivi diversi. Uno pubblico e uno privato e spostare le storie da una parte all’altra.

## STORIE

- Più opzioni
- Indizi
- Divise in task

## V0.1

- Player: semplice, riceve il JSON contenente tutta la storia
- Scopo: iniziare a creare un semplice layout del player SOLO PC

## V0.2

- Storie: più complesse con scelta multipla
- Scopo: iniziare a creare un sistema che colleghi le varie quest tra di loro

## V0.3

- Storie: upload su DB o file JSON
- Player: creazione di un sistema per prendere le quest dal DB/JSON
- Scopo: creazione DB di supporto su cui salvare le quest o organizzare un sistema dove salvare i file JSON

## Possibile esempio file JSON

```
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
}```