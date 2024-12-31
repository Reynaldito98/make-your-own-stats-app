import mongoose from "mongoose";
import Hitter from "../models/hitter.model.js";

const createHitter = async (req, res) => {
    const hitter = {...req.body, owner: req.user._id};

    if(!hitter.name || !hitter.position || !hitter.imageUrl) {
        return res.status(400).json({success: false, message: "Please, provide all fields"})
    }

    const newHitter = new Hitter(hitter);

    try {
        await newHitter.save();
        res.status(201).json({success: true, data: newHitter});
    } catch(error) {
        console.log("Error in Create hitter: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}

const getHitters = async (req, res) => {
    try {
        const hitters = await Hitter.find({});
        res.status(200).json({success: true, data: hitters});
    } catch(error) {
        console.log(`Error in fetching hitters: ${error.message}`)
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

const updateHitter = async (req, res) => {
    const {id} = req.params;
    const hitter = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "We didn't find this hitter"})
    }

    try{
        const updatedHitter = await Hitter.findByIdAndUpdate(id, hitter, {new: true});
        res.status(200).json({success: true, data: updatedHitter})
    } catch(error) {
        res.status(500).json({success: false, message: 'Server Error'});
    }
}

const deleteHitter = async (req, res) => {
    const {id} = req.params;

    try{
        await Hitter.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Hitter removed from roster"})
    } catch(error) {
        res.status(404).json({success: false, message: "We didn't find this hitter"})
    }
}

export {createHitter, getHitters, updateHitter, deleteHitter}