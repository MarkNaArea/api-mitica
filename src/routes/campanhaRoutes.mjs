import express from "express";
import { getCampanhas, getCampanhaById, createCampanha, updateCampanha } from "../controllers/campanhaControllers.mjs";

const router = express.Router();

router.get("/", getCampanhas);
router.get("/search", getCampanhaById);
router.post("/", createCampanha);
router.patch("/", updateCampanha)


export default router;