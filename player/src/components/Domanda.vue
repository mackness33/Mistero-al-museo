<template>
    <div id="quiz">
            <h2>Domanda {{id+1}}</h2>
            <h3>{{domanda.titolo}}</h3>
            <p v-if="error" class="error-message">Risposta <b>sbagliata</b></p>
            <div id="risposte">
                <div class="row" @click="select_this($event, risposta.ID)" v-for="risposta in domanda.risposte" v-bind:key="risposta.ID" >
                    <label v-bind:for="risposta.ID">{{risposta.titolo}}</label>
                    <input type="radio" name="data" v-model="radioSel" v-bind:value="risposta.ID">

                    <div class="check"></div>
                </div>                                  

            
            </div>
            <button id="invia" @click="verify()">Invia</button>
    </div>
</template>

<script>

export default {
    name:"Domanda",
    methods:{
        //verifico se la risposta selezionata è giusta
        verify(){
            this.error = !this.domanda.risposte[this.radioSel].valore;
            if(!this.error){
                this.$emit("answer",this.wrongAnswer);
            }else{
                //segno il numero degli errori 
                this.wrongAnswer++;

            }

        },
        select_this(event, ID){
        //seleziono il primo (e unico) elemento input di tipo radio
        event.currentTarget.querySelector("input[type='radio']").checked =true;
        this.radioSel= ID;
        
        }
    },
    props: {
        domanda: Object,
        id: Number
    },
    data() {
        return{
            radioSel:"",
            error: false,
            wrongAnswer: 0

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
p.error-message{
    color:rgba(255,34,34, 1);

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
    margin-right: 10px;
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