const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path')

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"], //included origin as true
  credentials: true, //included credentials as true
}))
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const form = require("./routes/formRoute");

app.use("/api/v1", form);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;