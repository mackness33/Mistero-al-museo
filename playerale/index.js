var toBeChecked = "";//variabile da controllare attraverso il tasto Controlla

function inputTemplate() {
  var element = document.getElementById("demo");
  
  var value = "trueOrFalse";
  //value sarà una variabile da recuperare dal json della domanda, ha ora un valore impostato per scopi di testing
  switch(String(value)) {
      case "trueOrFalse":
        $(document).ready(()=>{
          $("#y").load("./answer_template/true_or_false_template.html");
        })
        break;
      case "multipleChoice":
        $(document).ready(()=>{
          $("#y").load("./answer_template/multiple_choice_template.html");
        })
        break;
      default:
          document.getElementsByClassName("quiz_answer")[0].innerHTML += "Errore nel caricamento della domanda";
  }
}

//funzione che aggiorna il valore della variabile toBeChecked, la quale è una stringa
//prende in input una stringa dal click dei tasti vero o falso.
//Nel caso del bottone Vero l'input è "true", altrimenti è "false"
function trueOrFalseClick(answer){
  toBeChecked = answer;
}

//prende in input un numero che dipende da quale risposta è stata selezionata
//prima di aggiornare la variabile toBeChecked, rende il numero una stringa
function multipleChoiceClick(answer){
  toBeChecked = string(answer);
}

function control() {
  if (toBeChecked == "true"){
    document.getElementById("error").innerHTML = "Anwered true";
  } else if (toBeChecked == "false"){
    document.getElementById("error").innerHTML = "Anwered false";
  } else {
    document.getElementById("error").innerHTML = "no answer";
  }
}