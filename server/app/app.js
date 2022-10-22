const express = require("express");
const morgan = require("morgan");
const cors = require("morgan");
const bodyParser = require("body-parser");

const routes = require("../routes/routes")

const app = express();

app.set(morgan("tiny"));
app.set(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes)

module.exports = app