// importing model and dependecies
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

//Create new project - POST
router.post("/new", (req, res) => {
  data = req.body;

  project.insertMany(data)
  .then(data => {res.send(data);})
  .catch(err => {res.status(500).send( {message: err.message }); })
});

// Update specific project -> PUT
router.post("/update", (req, res) => {
  const id = req.params.id;

  project.findByIdAndUpdate(id, req.body)
  .then(data => {
    if(!data)
    {
      res.status(404).send({ message: "Cannot update this project, maybe project was not found."})
    }
    else
    {
      res.status({ message: "Project was successfully updated."})
    }
  })
    
  .catch(err => {res.status(500).send( {message: "Error updating this project." }); })
});

// Delete specific project -> DELETE
router.delete("/delete", (req, res) => {
  const id = req.params.id;

  project.findByIdAndDelete(id)
  .then(data => {
    if(!data)
    {
      res.status(404).send({ message: "Cannot delete this project, maybe project was not found."})
    }
    else
    {
      res.status({ message: "Project was successfully deleted."})
    }
  })
    
  .catch(err => {res.status(500).send( {message: "Error deleting this project." }); })
});

module.exports = router;