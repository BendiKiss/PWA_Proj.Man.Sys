// importing model and deps
const Router = require("express").Router();
const User = require("../models/Users");
const Bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const { registerValidation, loginValidation }= require('../validation');
