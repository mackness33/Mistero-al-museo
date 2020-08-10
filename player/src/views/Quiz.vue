<template>
<div>
  <Domanda :domanda="jsond.domande[id]" v-if="jsond.domande[id]" @answer="answer" :id="id" />
  <p v-else >Errori: {{wrongAnswer}}</p>
</div>
  
  
</template>

<script>
import Domanda from "@/components/Domanda";
export default {
  name: "Quiz",
  components: {
    Domanda
  },
  data() {
    return {
      id: 0,
      wrongAnswer: 0,
      jsond: {
        titolo: "titolo storia",
        descrizione: "Breve descrizione",
        domande: [
          {
            ID: 1,
            titolo: "titolo domanda 1",
            descrizione: "Descrizione domanda 1",
            risposte: [
              {
                ID: 0,
                titolo: "risposta 1 falsa",
                valore: false
              },
              {
                ID: 1,
                titolo: "risposta 2 falsa",
                valore: false
              },
              {
                ID: 2,
                titolo: "risposta 3 vera",
                valore: true
              }
            ]
          },
          {
            ID: 2,
            titolo: "titolo domanda 2",
            descrizione: "Descrizione domanda 2",
            risposte: [
              {
                ID: 0,
                titolo: "risposta 1 falsa",
                valore: false
              },
              {
                ID: 1,
                titolo: "risposta 2 vera",
                valore: true
              },
              {
                ID: 2,
                titolo: "risposta 3 falsa",
                valore: false
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    answer(wrongAnswer) {
      this.id++;
      this.wrongAnswer = wrongAnswer;
    }
  }
};
</script>
