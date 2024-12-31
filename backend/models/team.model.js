import mongoose from "mongoose";
import validator from "validator";

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    logo: {
        type: String,
        required: true,
        validate: {
            validator: (v)=>validator.isURL(v),
            message: 'You must enter a valid URL'
        }
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    }, 
    owner: {
        type: String,
        required: true
    }
})

const Team = mongoose.model('Team', teamSchema);
export default Team;