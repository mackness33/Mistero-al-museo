var toBeChecked = "";//variabile da controllare attraverso il tasto Controlla


//prende in input il tipo di template necessario per la risposta
//cambia il display dei div in modo tale da mostrare solo quello necessario
function templateSwitcher(){
  $('.answer_template').hide(); //sets every template to display:none; probabilmente ridondante una volta che sarà fuori dal testing, in quanto già presente in desktop.css
  
  var template = "multipleChoice"; //this variables is to be changed later, needs to take the string from JSON
  
  switch(template){
    case "trueOrFalse":
      document.getElementById("trueOrFalse").style.display = "flex";
      break;
    case "multipleChoice":
      document.getElementById("multipleChoice").style.display = "flex";
      break;
    case "custom":
      document.getElementById("custom").style.display = "block";
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

  //Resetting style on click 
  document.getElementById("true").style.backgroundColor = "#012235"
  document.getElementById("true").style.color = "#CF9C62"
  document.getElementById("false").style.backgroundColor = "#012235"
  document.getElementById("false").style.color = "#CF9C62"

  //Highlight what has been clicked 
  if(answer == "true") {
    document.getElementById("true").style.backgroundColor = "#CF9C62"
    document.getElementById("true").style.color = "#012235"
  } else {
    document.getElementById("false").style.backgroundColor = "#CF9C62"
  document.getElementById("false").style.color = "#012235"
  }

}


//prende in input un numero che dipende da quale risposta è stata selezionata
//prima di aggiornare la variabile toBeChecked, rende il numero una stringa
//type = 1 (multipleChoiceShort), type = 2 (multipleChoiceLong)
function multipleChoiceClick(answer, type){
  toBeChecked = answer;
  toBeChecked.toString();
  //Resetting style on click
  if (type == 1){
    elements = document.getElementsByClassName("multipleChoiceLongInput");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#012235";
      elements[i].style.color = "#CF9C62";
    }
  } else {
    elements = document.getElementsByClassName("multipleChoiceShortInput");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#012235";
      elements[i].style.color = "#CF9C62";
    }
  }
  switch(answer){
    case 1:
      document.getElementById("answer1").style.backgroundColor = "#CF9C62"
      document.getElementById("answer1").style.color = "#012235"
      break;
    case 2:
      document.getElementById("answer2").style.backgroundColor = "#CF9C62"
      document.getElementById("answer2").style.color = "#012235"
      break;
    case 3:
      document.getElementById("answer3").style.backgroundColor = "#CF9C62"
      document.getElementById("answer3").style.color = "#012235"
      break;
    case 4:
      document.getElementById("answer4").style.backgroundColor = "#CF9C62"
      document.getElementById("answer4").style.color = "#012235"
      break; 
  }

  //Highlight what has been clicked 
  
}

// !!!!!!! modificare accesso al div di errore come nella funzione templateSwitcher()
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