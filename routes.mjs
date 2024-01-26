import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import users from "./src/routes/authRoutes.mjs";
import campanhas from "./src/routes/campanhaRoutes.mjs"
import characters from "./src/routes/characterRoutes.mjs"
import characterInvites from "./src/routes/characterRoutes.mjs"
import skills from "./src/routes/skillRoutes.mjs"

const app = express();

// Load the routes
app.use("/auth", users);
app.use("/campanhas", campanhas);
app.use("/characters", characters);
app.use("/characterinvites", characterInvites)
app.use("/skills", skills)

export default app