const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv-flow").config();

// swagger dependencies
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");

// setup Swagger
const swaggerDefinition = yaml.load("./swagger.yaml");
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

// Use CORS middleware
app.use(cors());

// Import routes
const projectRoutes = require("./routes/project");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");

// routes
app.get("/api/welcome", (req, res) => {
  res.status(200).send({ message: "Welcome to the PWA project" });
});

// parse request of content type JSON
app.use(bodyParser.json());

// post, put, delete -> CRUD
app.use("/api/project", projectRoutes);
app.use("/api/user", authRoutes);
app.use("/api/task", taskRoutes);

// database connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DBHOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log("Error connecting to MongoDB: " + error));

mongoose.connection.once("open", () =>
  console.log("MongoDB connected successfully")
);

// start-up server
const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

module.exports = app;
