const express = require("express");
let router = express.Router();

//temporaneo
var stories = require("../story");

//logger
let logger = require("log4js").getLogger();

function reqLog (req, res, next){
    logger.info(`METHOD: ${req.method}`);
    logger.info(`PATH: ${req.url}`);  
    if (Object.keys(req.body).length != 0) logger.info(`Messaggio: ${JSON.stringify(req.body)}`);
    next();
}
function resLog(req,res,next){
    logger.info(`Status code: ${res.statusCode}`);
    if (res.body) logger.info(`Response: ${JSON.stringify(res.body)}`);
 
    next();
}
//middleware (logger)
router.use(reqLog);

router.route("/").get((req, res, next)=>{
   
    res.send("wooow");
    next();
});

// riceve una storia dall'id 
router.route("/stories/:ID"). get((req, res, next)=>{
    //cerca una storia dal DB
    let result = stories.filter( data =>{ return data.ID == req.params.ID});
    if(!result||!result.length) return res.sendStatus(404);

    //log esplicito, brutto 
    logger.info(`Response: ${JSON.stringify(result)}`);

    res.json(result);//restituisce la storia in formato json
    next();//passa all'middleware successivo
}).delete((req, res, next)=>{
    //restituisce null o la risorsa da eliminare
    let story = stories.indexOf( item => { return (item.ID == req.params.ID) ? item : null});
    if (story) stories.slice(story, 1);//elimina la risorsa

    res.sendStatus(200);//sempre 200
    next();
}).patch((req, res, next)=>{
    let story = stories.some( item => { return item.ID == req.body.ID});
    if(!story) res.sendStatus(404);
    
})

//carica una storia su DB
router.route("/stories/").post((req, res, next)=>{
    // verifico che NON esista altra storia con lo stesso ID
    let story = stories.some( item => { return item.ID == req.body.ID});
    if(story) return res.sendStatus(409); //la risorsa esiste già (conflict)

    // salvo la storia sul DB
    stories.push(req.body);
    // created  
    res.sendStatus(201);
    next();
})

//middleware
router.use(resLog);

//export router per essere richiamato da index.js
module.exports = router;