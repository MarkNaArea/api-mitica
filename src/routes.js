const express = require("express");
const userRouter = require('./routes/usersRoutes')
const campaignRouter = require('./routes/campaignsRoutes')
const characterRouter = require('./routes/charactersRoutes')
const skillRouter = require('./routes/skillsRoutes')
const godsRouter = require('./routes/godsRoutes')
const godGroupRouter = require('./routes/godGroupRoutes')
const wikiRaceRouter = require('./routes/wikiRacesRoutes')
const wikiClassRouter = require('./routes/wikiClassesRoutes')
const wikiCityRouter = require('./routes/wikiCitiesRoutes')
const campaignsCharactersUsersRouter = require('./routes/campaignsCharactersUsersRoutes')
//const classes = require("./src/routes/classesRoutes.js");

const app = express();

// Load the routes
app.use("/users/", userRouter);
app.use("/campaigns/", campaignRouter);
app.use("/characters/", characterRouter);
app.use("/skills/", skillRouter);
app.use("/campaignsCharactersUsers/", campaignsCharactersUsersRouter);
app.use("/wikiraces/", wikiRaceRouter);
app.use("/wikiclasses/", wikiClassRouter);
app.use("/gods/", godsRouter);
app.use("/godgroups/", godGroupRouter);
app.use("/wikicities/", wikiCityRouter);
//app.use("/classes/", classes);

module.exports = app;
