require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("./database/dbConnect");
const patientRoute = require("./routes/patientRoute");
const hemodialisisRoute = require("./routes/hemodialisisRoute");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/patient", patientRoute);
app.use("/hemodialysis-sessions", hemodialisisRoute);

module.exports = app;
