const mongoose = require('mongoose');

// SCHEMA
const { Schema } = mongoose;

// define a schema
const storySchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  age: {
    min: Number,
    max: Number
  },
  accessibility: Boolean,
  missions: Array,
  active: Boolean,
});

const missionSchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  age: {
    min: Number,
    max: Number
  },
  accessibility: Boolean,
  type: String,
  active: Boolean,
});

const taskSchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  age: {
    min: Number,
    max: Number
  },
  accessibility: Boolean,

  active: Boolean,
});


// compile our model
module.exports = mongoose.model('User', userSchema);
