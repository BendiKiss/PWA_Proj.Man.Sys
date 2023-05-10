const router = require("express").Router();
const project = require("../models/project");


//CRUD operations

//Read all -> GET
router.get('/', async (req, res) => {
  project.find()
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })

})

//Read all active project -> GET
router.get('/active', async (req, res) => {
  project.find({active: true})
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })

})

//Read all done project -> GET
router.get('/done', async (req, res) => {
  project.find({active: false})
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })

})
//Read specific project -> GET
router.get('/:id', async (req, res) => {
  project.findById(req.params.id)
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })

})

//Create project - POST
router.post("/", (req, res) => {
  data = req.body;

  project.insertMany(data)
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })
});

module.exports = router;