import express from "express";
import { createVideo, getVideos, updateVideo, deleteVideo } from "../controllers/videosController.js";
export const router = express.Router();
router.get("/", getVideos);
router.post("/", createVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);