import Express from "express";
import Story from "./story.js";

const app = Express();
const port = 3000;

//middleware ( viene "avviato" prima che venga effettuata la query, è utile per gestire l'autenticazione )
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))

// custom middleware
// più informazioni: https://expressjs.com/it/guide/using-middleware.html
function mid(req, res, next) {
    //body della richiesta
    console.log(req.body);
    // parametri passati
    console.log(req.params);
    // query (?elem=valore)
    console.log(req.query);
    next();
}
// Metodo GET
// struttura: method(path, funzione)
// aggiunto middleware (vedi sopra)
app.get('/storie/:id', mid, (req, res) => {
    //res.send("hello world");
    //res.json(Story);
    //res.send(req.params);

    res.json(Story.find((story) => {
        return req.params.id == story.id
    }))
});

// Metodo POST
app.post("/add", (req, res) => {
    console.log(req.body.id)
    res.sendStatus(200);
});

// Metodo PUT
// app.put();

// Metodo DELETE
// app.delete();

// Listner
app.listen(port, () => { console.log("In ascolto sulla porta " + port) });