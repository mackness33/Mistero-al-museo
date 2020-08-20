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

//prende in input il tipo di template necessario per la risposta
//cambia il display dei div in modo tale da mostrare solo quello necessario
function templateSwitcher(){
  $('.answer_template').hide(); //sets every template to display:none; probabilmente ridondante una volta che sarà fuori dal testing, in quanto già presente in desktop.css
  var template = "multipleChoice"; //this variables is to be changed later, needs to take the string from JSON
  switch(template){
    case "trueOrFalse":
      document.getElementById("trueOrFalse").style.display = "block";
      break;
    case "multipleChoice":
      document.getElementById("multipleChoice").style.display = "block";
      break;
    default:
      document.getElementById("error").innerHTML = "Errore nel caricare la selezione della risposta";
      break;
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
  if (toBeChecked === "true"){
    document.getElementById("error").innerHTML = "Anwered true";
  } else if (toBeChecked === "false"){
    document.getElementById("error").innerHTML = "Anwered false";
  } else {
    document.getElementById("error").innerHTML = "no answer";
  }
}



templateSwitcher();