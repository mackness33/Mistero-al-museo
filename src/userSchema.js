const mongoose = require('mongoose');

// SCHEMA
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
module.exports = mongoose.model('User', userSchema);
