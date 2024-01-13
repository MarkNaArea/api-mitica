import express from "express";
import { getUsers, getLatestPosts, getSinglePost, registerUser, deleteDocument, loginUser } from "../controllers/authControllers.mjs";

const router = express.Router();

router.post("/login/", loginUser); // Get a list of 50 posts
router.post("/register/", registerUser); // Add a new document to the collection

export default router;
