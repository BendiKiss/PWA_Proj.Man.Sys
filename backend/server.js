const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
//create out express app
const app = express()

// Handle CORS + middleware
app.use(function( req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//swagger


//routes
app.get("/", (req, res) => {
    res.status(200).send({message: "Welcome to the PWA project"});
})

// // Import project routes
// const ProjectsRoute = require("./routes/Projects");
// app.use("/projects", ProjectsRoute);
// // Import list routes
// const ListsRoute = require("./routes/Lists");
// app.use("/lists", ListsRoute);
// // Import task routes
// const TasksRoute = require("./routes/Tasks");
// app.use("/tasks", TasksRoute);
// // Import user routes
// const UserRoute = require("./routes/Users");
// app.use("/users", UserRoute);

// parse request of content type JSON
app.use(bodyParser.json());

//database connection
const uri = "mongodb+srv://dbuser:053ARzzE7kP2nTfc@restapiproj.utxokik.mongodb.net/boards_dev?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected")
})
  .catch(err => console.log(err))
    
    
// start server
//app.listen(PORT, () => {
//     console.log("Server is running on port" + PORT)
// });

module.exports = app;
