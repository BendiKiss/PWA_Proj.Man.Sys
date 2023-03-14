const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos')

// Get All Todo route
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
})
