// What the Project can send to the db
const Mongoose = require("mongoose");
const ProjectsSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  color: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  deadline: String,
  UserId: String,
});

module.exports = Mongoose.model("Project", ProjectsSchema);