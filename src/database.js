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

  const { Schema } = mongoose;

  // define a schema
  const userSchema = new Schema({
    _id: Number,
    name:  {
      first: String,
      second: String
    },
    age: Number,  // Number is shorthand for {type: Number}
    male: Boolean
  });

  // compile our model
  const User = mongoose.model('User', userSchema);

  // create a document
  const first_user = new User({
    _id: 1,
    name: { first: 'Axl', last: 'Rose' }
  });

  logger.info(`Create the first document`);

  first_user.save(function (err) {
    if (err) return logger.info(`ERROR: ${err}`);
    // saved!
  });

  // or

  // Tank.create({ size: 'small' }, function (err, small) {
  //   if (err) return handleError(err);
  //   // saved!
  // })
  logger.info(`Save the first document`);


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
