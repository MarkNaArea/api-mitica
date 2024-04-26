const express = require("express");
const userRouter = require('./routes/usersRoutes')
const campaignRouter = require('./routes/campaignsRoutes')
const characterRouter = require('./routes/charactersRoutes')
const skillRouter = require('./routes/skillsRoutes')
const wikiraceRouter = require('./routes/wikiRacesRoutes')
//const classes = require("./src/routes/classesRoutes.js");

const app = express();

// Load the routes
app.use("/users/", userRouter);
app.use("/campaigns/", campaignRouter);
app.use("/characters/", characterRouter);
app.use("/skills/", skillRouter);
app.use("/wikiraces/", wikiraceRouter);
//app.use("/classes/", classes);

module.exports = app;
