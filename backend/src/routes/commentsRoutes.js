import express from "express"
import { createComment, getComment, updateComment, deleteComment } from "../controllers/commentsController.js"

export const router = express.Router();

router.get("/", getComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);