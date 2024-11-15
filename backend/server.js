import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send()
})

app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3001");
})
