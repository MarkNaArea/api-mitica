import express from "express";
import {
    createSkill,
    getSkillById,
    getSkills,
    updateSkill
} from "../controllers/skillControllers.mjs";

const router = express.Router();

router.get("/", getSkills);
router.get("/search", getSkillById);
router.post("/", createSkill);
router.patch("/", updateSkill);

export default router;
