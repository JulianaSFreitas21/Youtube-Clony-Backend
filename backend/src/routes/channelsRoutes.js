import express from "express"
import { createChannel, getChannels, updateChannel, deleteChannel } from "../controllers/channelsController.js"

export const router = express.Router();

router.get("/", getChannels)
router.post("/", createChannel)
router.put("/:id", updateChannel)
router.delete("/:id", deleteChannel)