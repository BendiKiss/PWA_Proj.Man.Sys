const Express = require("express");
const Router = Express.Router();
const Project = require("../models/Projects");

// Get all Project routes
Router.get("/", async (Req, Res) => {
  const Projects = await Project.find();
  Res.json(Projects);
});

module.exports = Router;
