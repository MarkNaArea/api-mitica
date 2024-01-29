import express from "express";
import { createRace, getRaceById, getRaces, updateRace } from "../controllers/wikiRaceControllers.mjs";

const router = express.Router();

router.get("/", getRaces);
router.get("/search", getRaceById);
router.post("/", createRace);
router.patch("/", updateRace);

export default router;
