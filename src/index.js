const express = require("express");
const app = express();
const port = 3000;

//logger
const logger = require("log4js").getLogger();
logger.level = "info";

let api = require("./routes/api");

app.use("/api/v1", api);

app.listen(port, () => {
   logger.info(`In ascolto sulla porta ${port}`)
})