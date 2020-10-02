# Server

Server

## Milestones

1. Trasmettere storia + DB
2. Creazione + cancellazione + modifica storie
3. Salvataggio temporaneo dei progressi dei players

## JSON

Ogni storia deve avere:

- **ID** - identificativo storia (hash?)
- **Title** - Titolo storia
- **Desc** - descrizione
- **Style** - Url stile pagina
- **Age** - Range età
- **Team** - Disponibile per essere giocato da un team
- **Quests** - Array domande
- **SideQuests** - Possibili sideQuest (array di array)

Ogni domanda deve avere:

- **ID** - MOLTO importante per alessandro
- **Type** - Tipo della domanda (trueOrFalse, multipleChoice, completeStatement, custom...) magari salvato numericamente
- **Hints** - Array aiuti
  - **N°** - N° aiuto richiesto
  - **Text** - Testo aiuto
- **SideQuest** - Id sidequest
- **Style** - url css stile
