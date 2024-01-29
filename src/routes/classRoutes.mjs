import express from "express";
import { createClass, getClassById, getClasses, updateClass } from "../controllers/classesControllers.mjs";

const router = express.Router();

router.get("/", getClasses);
router.get("/search", getClassById);
router.post("/", createClass);
router.patch("/", updateClass);

export default router;
