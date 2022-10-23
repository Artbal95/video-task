const fs = require('fs');
const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const routes = require("../routes/routes")

const app = express();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/static", express.static(path.join(__dirname, "../upload/")));

app.use("/api", routes)

module.exports = app