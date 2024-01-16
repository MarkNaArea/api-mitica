import express from "express";
import { createCharacter, getCharacter, getCharacterById, updateCharacter } from "../controllers/characterControllers.mjs";

const router = express.Router();

router.get("/", getCharacter);
router.get("/search", getCharacterById);
router.post("/", createCharacter);
router.patch("/", updateCharacter)


export default router;