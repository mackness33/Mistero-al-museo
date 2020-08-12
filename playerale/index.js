function inputTemplate() {
  var element = document.getElementById("demo");
  element.remove()
  var value = "multipleChoice";
  //value sarà una variabile da recuperare dal json della domanda, ha ora un valore impostato per scopi di testing
  switch(String(value)) {
      case "trueOrFalse":
          document.getElementsByClassName("quiz_answer")[0].innerHTML += "<button >Vero</button> <button >Falso</button>"
        break;
      case "multipleChoice":
        $(document).ready(()=>{
          $("#y").load("./answer_template/multiple_choice_template.html");
        })
        break;
      default:
          document.getElementsByClassName("quiz_answer")[0].innerHTML += "Errore nel caricamento della domanda"
  }
}