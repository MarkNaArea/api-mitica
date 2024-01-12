import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import users from "./src/routes/users.mjs";

const app = express();

// Load the routes
app.use("/auth", users);

export default app