<template>
    <div id="quiz">
            <h2>Domanda 1</h2>
            <h3 id="domanda">Lorem ipsum dolor sit amet, consectetur?</h3>
            <div id="risposte">
                <div class="row" @click="check_this($event)"><label for="1733">adipiscing elit, sed do eiusmod</label><input type="radio" name="data" value="1733"><div class="check"></div></div>                   
                <div class="row" @click="check_this($event)"><label for="1775">tempor incididunt ut labore et dolore magna aliqua</label><input type="radio" name="data" value="1775"><div class="check"></div></div>                    
                <div class="row" @click="check_this($event)"><label for="1789">Ut enim ad minim veniam, quis nostrud exercitatio</label><input type="radio" name="data" value="1789"><div class="check"></div></div>               
                <div class="row" @click="check_this($event)"><label for="1789">Ut enim </label><input type="radio" name="data" value="1789"><div class="check"></div></div>               
                <div class="row" @click="check_this($event)"><label for="1789">Ut enim </label><input type="radio" name="data" value="1789"><div class="check"></div></div>               
            
            </div>
            <button id="invia">Invia</button>
    </div>
</template>

<script>

export default {
    name:"Domanda",
    methods:{
        check_this(event){
        //seleziono il primo (e unico) elemento input di tipo radio
        event.currentTarget.querySelector("input[type='radio']").checked =!event.currentTarget.querySelector("input[type='radio']").checked;
        }
    }

}
</script>

<style scoped>
/* ogni elemento è gestito da flexbox */
div#quiz{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center; 
    align-content: center;
    
}
/* contatore domande */
div#quiz h2{  
    color: #8D94BB;
    border-bottom: 2px dotted rgba(141, 148, 187, 0.2);
    padding-bottom: 10px;
}
/* titolo domande */
div#quiz h2#domanda{
    border-bottom: 20%;
}

div.row{
    border-radius: 20px;
    padding: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    flex-grow: 1; /* in questo modo ogni riga occupa il massimo spazio disponibile*/ 
}
div#risposte{
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
}
div.row label{
    display: inline-block;
}
div#risposte .row, div#risposte .row label{
    cursor: pointer;
}
div.row input[type="radio"]{
    display: none;
}
div.row, .check{
    border: 4px solid #23476A;
}
.check {
	width: 25px; 
	height: 25px;
    border-radius: 50%;
    margin-left: auto; /* l'icona è sempre a destra */
}
button#invia{
    color: white;
    background-color: #117EEB;
    cursor: pointer;
    outline: 0;
    font-size: large;
    border-radius: 20px;
    padding: 25px 50px;   
}

button#invia:active, div.row:hover{
    opacity: 0.8;
}
div.row input[type="radio"]:checked + div{
    background-color: #321A37;
    
}
</style>