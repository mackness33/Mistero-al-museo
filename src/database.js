const express = require("express");
require("dotenv").config(); //.env file (dev only)

const app = express();
const port = process.env.PORT;

//logger
const logger = require("log4js").getLogger();
logger.level = process.env.LOG_LEVEL;

// getting-started.js
const mongoose = require('mongoose');

try {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true});
  logger.info(`Succesfully connected`);

  const db = mongoose.connection;

} catch (error) {
  logger.info(`ERROR: ${error}`);
}
// let api = require("./routes/api");

app.use(express.json());
// ROUTE BASE
// app.use("/api/v1", api);

app.listen(port, () => {
   logger.info(`In ascolto sulla porta ${port}`)
})
