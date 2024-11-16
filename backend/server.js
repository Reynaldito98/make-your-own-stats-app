import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Team from './models/team.model.js';
import Hitter from './models/hitter.model.js';
import Pitcher from './models/pitcher.model.js';

dotenv.config();
const app = express();
app.use(express.json());

app.post('/team', async (req, res) => {
    const team = req.body;

    if(!team.name || !team.logo) {
        return res.status(400).json({success: false, message: 'Please, provide all fields'})
    }

    const newTeam = new Team(team);

    try{
        await newTeam.save();
        res.status(201).json({success: true, data: newTeam})
    } catch(error) {
        console.error("Error in Create Team: ", error.message);
        res.status(500).json({success: false, message: 'Server Error'});
    }
})


app.listen(4000, () => {
    connectDB();
    console.log("Server started at http://localhost:4000")
})
