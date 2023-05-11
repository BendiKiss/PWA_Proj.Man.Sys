// importing model and dependecies
const router = require('express').Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { registerValidation,  } = require('../validation');


// Registration
router.post("/register", async (req, res) => {
 
    //console.log(req);

    //validate the user input
    const { error } = registerValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0] });
    }

    

    //check if the email is already registered
    const emailExists = await user.findOne({ email: req.body.email });

    if (emailExists) {
        return res.status(400).json({ error: "Email already exists"});
    }

    //hash he password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    //create a user object and save in the DB
    const userObject = new user({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password
    });

    try {
        const savedUser = await userObject.save();
        res.json({ error: null, data: savedUser._id});
    }
    catch (error) {
        res.status(400).json({ error})
    }

});

//Login

module.exports = router;