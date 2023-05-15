const { ref } = require("joi");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const status = ["ToDo", "Doing", "Done"];

let taskSchema = new Schema({
  
  name:         { type: String, required: true, min: 5, max: 255 },
  description:  { type: String, required: false, min: 5, max: 255 },
  status:       { type: String,  default: "ToDo"  },
  created_at:   { type: Date, default: Date.now, },
  deadline:     { type: String },
  author:       { type: Schema.Types.ObjectId, required: true, ref:'user'},
  assignedTo:   [{ type: Schema.Types.ObjectId, required: true, ref:'user'}],
  project_id:   [{ type: Schema.Types.ObjectId, required: true, ref:'project'}]
});

module.exports = mongoose.model("task", taskSchema);