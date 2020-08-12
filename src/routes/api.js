const express = require("express");
let router = express.Router();

//temporaneo
const story = require("../story");

//logger
let logger = require("log4js").getLogger();

function infoLog (req, res, next){
    logger.info(`IP: ${req.ip}`);
    logger.info(`URL richiesto: ${req.url}`)
    logger.info(`Parametri ${JSON.stringify(req.params)}\n`);
    next();

}
router.use(infoLog);
router.route("/").get((req, res)=>{
   
    res.send("wooow")
});

// riceve una storia dall'id 
router.route("/stories/:id"). get((req, res)=>{
    let s= story.filter((data)=>{ return data.ID == req.params.id});
    logger.info(s);
    if(!s||!s.length) res.status(404).send("Not found!");
    res.json(s);
});



//export router per essere richiamato da index.js
module.exports = router;