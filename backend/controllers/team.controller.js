import mongoose from "mongoose";
import Team from "../models/team.model.js";

const createTeam = async (req, res) => {
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
}

const getTeam = async (req, res) => {
    try {
        const teams = await Team.find({});
        res.status(200).json({success: true, data: teams})
    } catch(error) {
        console.log(`Error in fetching team: `, error.message);
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

const updateTeam = async (req, res) => {
    const {id} = req.params;
    const team = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid Team id"})
    }

    try{
        const updatedTeam = await Team.findByIdAndUpdate(id, team, {new: true});
        res.status(200).json({success: true, data: updatedTeam});
    } catch(error) {
        res.status(500).json({success: false, message: 'Server Error'});
    }
}

export {createTeam, getTeam, updateTeam}