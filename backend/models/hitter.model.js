import mongoose from "mongoose";

const hitterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    position: {
        type: String,
        required: true,
        enum: ['C', '1B', '2B', '3B', 'SS', 'RF', 'LF', 'CF', 'DH']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (v)=>validator.isURL(v),
            message: 'You must enter a valid URL'
        }
    },
    AB: {
        type: Number,
        default: 0
    },
    H: {
        type: Number,
        default: 0
    },
    Doubles: {
        type: Number,
        default: 0
    },
    Triples: {
        type: Number,
        default: 0
    },
    HR: {
        type: Number,
        default: 0
    },
    RBI: {
        type: Number,
        default: 0
    },
    R: {
        type: Number,
        default: 0
    },
    SB: {
        type: Number,
        default: 0
    },
    CS: {
        type: Number,
        default: 0
    }
})

const Hitter = mongoose.model('Hitter', hitterSchema);
export default Hitter