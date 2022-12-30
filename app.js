require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes")
const ConnectToDB = require("./config/db")

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//For connecting to DB
ConnectToDB();

app.use("/", userRoutes);
// app.get("/aboutus", userRoutes);
module.exports = app; 