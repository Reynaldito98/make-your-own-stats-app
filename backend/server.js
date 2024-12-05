import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import teamRouter from './routes/team.route.js';
import hitterRoutes from './routes/hitter.route.js';
import pitcherRoutes from './routes/pitcher.route.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/team', teamRouter);
app.use('/api/hitter', hitterRoutes);
app.use('/api/pitcher', pitcherRoutes);

app.listen(4000, () => {
    connectDB();
    console.log("Server started at http://localhost:4000");
})
