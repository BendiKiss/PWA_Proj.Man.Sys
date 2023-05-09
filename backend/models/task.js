const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const Schema = mongoose.Schema;

const status = ["ToDo", "Doing", "Done"];


const TasksSchema = new Mongoose.Schema({

  ListId: String,
  
  task: { 
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  description: {
    type: String,
    required: false,
    min: 5,
    max: 255
  },
  status: {
    type: String, 
    default: "ToDo" 
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: String
  },
  author: String,
});

module.exports = Mongoose.model("Task", TasksSchema);