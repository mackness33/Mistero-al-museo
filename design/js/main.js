let missione = document.getElementsByClassName("mission_bar_title");

        for (let i=0; i<missione.length ; i++){
            missione[i].addEventListener("click", display, false);

        }
        function display(){
        var ul= this.nextElementSibling;
        var i_class = this.children[0].classList;
        // cambio classe (per ruotare il "triangolo")
        if(i_class.contains("triangle_expanded")){
            i_class.remove("triangle_expanded");
            i_class.add("triangle_compressed");
        }else{
            i_class.remove("triangle_compressed");
            i_class.add("triangle_expanded")
        }
        ul.style.display = ul.style.display == "none" ? "block" : "none";
        }