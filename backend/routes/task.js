// importing model and dependecies
const express = require('express');
const router = express.Router();
const task = require('../models/task');
const { verifyToken } = require("../validation");

// Get all tasks -> GET
router.get('/', async (req, res) => {
    try {
        const tasks = await task.find();
        res.json(tasks)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Get specific task by id -> GET
router.get('/get/:id', async (req, res) => {
    try {
        const tasks = await task.findById({ _id : req.params.id });
        res.json(tasks)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Create new task -> POST
router.post('/new', async (req, res) => {
    try {
        const newTask = new task(
            req.body
        );
        const savedTask = await newTask.save()
        res.json(savedTask)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Get ToDo tasks -> GET
router.get('/get/todo', async (req, res) => {
    try {
        const tasks = await task.find({ status: "ToDo" });
        res.json(tasks)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Get Doing tasks -> GET
router.get('/get/doing', async (req, res) => {
    try {
        const tasks = await task.find({ status: "Doing" });
        res.json(tasks)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Get Done tasks -> GET
router.get('/get/done', async (req, res) => {
    try {
        const tasks = await task.find({ status: "Done" });
        res.json(tasks)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Update task -> PUT
router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const taskUpdate = await task.findByIdAndUpdate(
            { _id: req.params.id }, 
            { $set: req.body }
    
        )
        res.json(taskUpdate)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});

// Delete task -> DELETE
router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        const taskDelete = await task.findByIdAndDelete({ _id : req.params.id })
        res.json(taskDelete)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});


module.exports = router