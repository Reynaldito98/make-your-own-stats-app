import mongoose from "mongoose";
import validator from "validator";

const pitcherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    position: {
        type: String,
        required: true,
        enum: ['SP', 'RP', 'CP']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (v)=>validator.isURL(v),
            message: 'You must enter a valid URL.'
        }
    },
    IP: {
        type: Number,
        default: 0.0
    },
    ER: {
        type: Number,
        default: 0
    },
    K: {
        type: Number,
        default: 0
    },
    BB: {
        type: Number,
        default: 0
    },
    W: {
        type: Number,
        default: 0
    },
    L: {
        type: Number,
        default: 0
    },
    SV: {
        type: Number,
        default: 0
    }
})

const Pitcher = mongoose.model('Pitcher', pitcherSchema);
export default Pitcher