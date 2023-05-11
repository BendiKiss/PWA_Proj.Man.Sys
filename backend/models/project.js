const mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({
  
  name:        { type: String, required: true, min: 3, max: 100},
  description: { type: String, max: 255},
  created_at:  { type: Date, default: Date.now },
  deadline:    { type: String },
  active:      { type: Boolean, default: true}
  //owner: { type: String, }
  //team: { type: String, }

});

module.exports = mongoose.model("project", projectSchema);