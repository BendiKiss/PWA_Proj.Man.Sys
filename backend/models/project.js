const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let projectSchema = new Schema({
  
  name:        { type: String, required: true, min: 3, max: 100},
  description: { type: String, max: 255},
  created_at:  { type: Date, default: Date.now },
  deadline:    { type: String },
  active:      { type: Boolean, default: true},
  owner:       { type: Schema.Types.ObjectId, required: true, ref:'user' },
  team:       [{ type: Schema.Types.ObjectId, required: false, ref:'user' }]

});

module.exports = mongoose.model("project", projectSchema);