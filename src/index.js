const express = require("express");
require("dotenv").config(); //.env file (dev only)

const app = express();
const port = process.env.PORT;

//logger
const logger = require("log4js").getLogger();
logger.level = process.env.LOG_LEVEL;

let api = require("./routes/api");

app.use(express.json());
app.use("/api/v1", api);

app.listen(port, () => {
   logger.info(`In ascolto sulla porta ${port}`)
})