import express from "express";
import { getUsers, getLatestPosts, getSinglePost, addDocument, deleteDocument } from "../controllers/userControllers.mjs";

const router = express.Router();

router.get("/", getUsers); // Get a list of 50 posts
router.get("/latest", getLatestPosts); // Fetches the latest posts
router.get("/:id", getSinglePost); // Get a single post
router.post("/", addDocument); // Add a new document to the collection
router.delete("/:id", deleteDocument); // Delete an entry

export default router;
