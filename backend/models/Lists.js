// What the List can send to the db
const Mongoose = require("mongoose");
const ListsSchema = new Mongoose.Schema({
  ProjectId: String,
  title: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("List", ListsSchema);