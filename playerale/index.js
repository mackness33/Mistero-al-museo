


function replaceText(new_text) {
    document.getElementByClassName("quiz_text").innerHTML = "";
    document.getElementByClassName("quiz_text").innerHTML = new_text;
}

function inputTemplate() {
    var element = document.getElementById("demo");
    element.remove()

    document.getElementsByClassName("quiz_answer")[0].innerHTML += "<button >Vero</button> <button >Falso</button>"

}