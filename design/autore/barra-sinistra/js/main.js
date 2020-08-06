let missione = document.getElementsByClassName("title");
        
        for (let i=0; i<missione.length ; i++){
            missione[i].addEventListener("click", display, false);

        }
        function display(){
        var ul= this.nextElementSibling;
        ul.style.display = ul.style.display == "none" ? "block" : "none";
        }