import express from 'express';
import cors from "cors";

import { router as usersRoutes } from './routes/usersRoutes.js';
import { router as channelsRoutes } from './routes/channelsRoutes.js';
import { router as videosRoutes } from './routes/videosRoutes.js';
import { router as commentsRoutes } from './routes/commentsRoutes.js';

export const app = express();
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json());

// routers
app.use("/users", usersRoutes);
app.use("/videos", videosRoutes);
app.use("/channels", channelsRoutes);
app.use("/comments", commentsRoutes);