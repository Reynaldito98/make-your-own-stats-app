import mongoose from 'mongoose';
import Pitcher from "../models/pitcher.model.js";

const createPitcher = async (req, res) => {
    const pitcher = req.body;

    if(!pitcher.name || !pitcher.position || !pitcher.imageUrl) {
        return res.status(400).json({success: false, message: "Please, provide all fields"});
    }

    const newPitcher = new Pitcher(pitcher);

    try{
        await newPitcher.save();
        res.status(201).json({success: true, data: newPitcher});
    } catch(error) {
        console.error("Error in Create Product: ", error.message);
        res.status(500).json({success: true, message: "Server Error"})
    }
}

const getPitchers = async (req, res) => {
    try {
        const pitchers = await Pitcher.find({});
        res.status(200).json({success: true, data: pitchers})
    } catch(error) {
        console.log(`Error in fetching pitchers: ${error.message}`)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

const updatePitcher = async (req, res) => {
    const {id} = req.params;
    const pitcher = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({success: false, message: "Pitcher ID not found"})
    }

    try {
        const updatedPitcher = await Pitcher.findByIdAndUpdate(id, pitcher, {new: true})
        res.status(200).json({success: true, data: updatedPitcher});
    } catch(error) {
        res.status(500).json({success: false, message: "Server Error"})
    }  
}

const deletePitcher = async (req, res) => {
    const {id} = req.params;

    try {
        await Pitcher.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Pitcher removed from roster'});
    } catch(error) {
        res.status(404).json({success: false, message: "Pitcher not found"})
    }
}

export {createPitcher, getPitchers, updatePitcher, deletePitcher}