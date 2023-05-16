// importing model and dependecies
const express = require('express');
const router = express.Router();
const project = require("../models/project");
const { verifyToken } = require("../validation");

//CRUD operations

//Read all -> GET
router.get('/', async (req, res) => {
  try {
      const projects = await project.find();
      res.json(projects)
  }
  catch (err) {
      res.status(500).send({ message: err.message });
  }
});

//Read all active project -> GET
router.get('/active', async (req, res) => {
  try {
      const projects = await project.find();
      res.json(projects)
  }
  catch (err) {
      res.status(500).send({ message: err.message });
  }
});

//Read all done project -> GET
router.get('/done', async (req, res) => {
  try {
      const projects = await project.find();
      res.json(projects)
  }
  catch (err) {
      res.status(500).send({ message: err.message });
  }
});

//Read specific project -> GET
router.get('/:id', async (req, res) => {
  try {
      const projects = await project.findById(req.params.id);
      res.json(projects)
  }
  catch (err) {
      res.status(500).send({ message: err.message });
  }
});

//Create new project - POST
router.post('/new', verifyToken, async (req, res) => {
  try {
      const newProject = new project(
          req.body
      );
      const savedProject = await newProject.save()
      res.status(200).send( { message: "Project was successfully created."})
    }
    catch (err) {
      res.status(400).send({ message: err.message });
    }
});


// Update specific project -> PUT
/*
// doesnt work, getting no response back
router.put("/update/:id", verifyToken, (req, res) => {
  const id = req.params.id;

  project.updateOne(id, req.body)
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

router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const projectUpdate = await project.findByIdAndUpdate(
            { _id: req.params.id }, 
            { $set: req.body }
    
        )
        res.json(projectUpdate)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})
*/

//works
router.put("/update/:id", verifyToken, async (req, res) => {
  try {
    const UpdProject = await project.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ message: "Project was successfully updated."})
  } 
  catch (err) {
    res.status(500).send( {message: "Error updating this project." });
  }
});

// Delete specific project -> DELETE
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const DelProject = await project.findByIdAndDelete(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ message: "Project was successfully deleted."})
  } 
  catch (err) {
    res.status(500).send( {message: "Error deleting this project." });
  }
});

module.exports = router;