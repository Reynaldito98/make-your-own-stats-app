import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { connectDB } from './config/db.js';
import teamRouter from './routes/team.route.js';
import hitterRoutes from './routes/hitter.route.js';
import pitcherRoutes from './routes/pitcher.route.js';
import { auth } from './middleware/auth.js';
import {createUser, loginUser} from './controllers/user.controller.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use(cors());

app.post('/api/signup', createUser);
app.post('/api/signin', loginUser);

app.use(auth);

app.use('/api/team', teamRouter);
app.use('/api/hitter', hitterRoutes);
app.use('/api/pitcher', pitcherRoutes);

app.listen(4000, () => {s
    console.log("Server started at http://localhost:4000");
})
