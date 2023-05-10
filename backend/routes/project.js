const router = require("express").Router();
const project = require("../models/project");


//CRUD operations

//Create project - POST
router.post("/", (req, res) => {
  data = req.body;

  project.insertMany(data)
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })
});

module.exports = router;