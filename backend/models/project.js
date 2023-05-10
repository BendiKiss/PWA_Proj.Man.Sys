const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  description: { type: String },

//created_at: { type: Date, default: Date.now },

  deadline: {type: String},
  active: { type: Boolean, default: true}

//UserId: String

});

module.exports = mongoose.model("project", projectSchema);