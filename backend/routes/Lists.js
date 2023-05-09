const Express = require("express");
const Router = Express.Router();
const List = require("../models/Lists");

// Get all List routes
Router.get("/", async (Req, Res) => {
  const Lists = await List.find();
  Res.json(Lists);
});

module.exports = Router;