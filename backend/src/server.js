import express from 'express';
import cors from "cors";

import { router as usersRoutes } from './routes/usersRoutes.js';
import { router as channelsRoutes } from './routes/channelsRoutes.js';
import { router as videosRoutes } from './routes/videosRoutes.js';
import { router as commentsRoutes } from './routes/commentsRoutes.js';

const app = express();
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json());

// routers
app.use("/users", usersRoutes);
app.use("/videos", videosRoutes);
app.use("/channels", channelsRoutes);
app.use("/comments", commentsRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:" + PORT));
