import express from 'express';
import { createServer } from 'http';
import { connect } from 'mongoose';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

import { projectRouter } from './routers/projectRouter';
import { commentRouter } from './routers/commentRouter';

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/projects', projectRouter);
app.use('/comments', commentRouter);

const server = createServer(app);
export const io = new Server(server, {
  cors: { origin: 'http://localhost:5173' },
});

server.listen(PORT, async () => {
  try {
    await connect(DATABASE_URL!);

    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  } catch (e) {
    console.log(e);
  }
});
