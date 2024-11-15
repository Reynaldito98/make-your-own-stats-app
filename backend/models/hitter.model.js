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
        required: true
    },
    H: {
        type: Number,
        required: true
    },
    Doubles: {
        type: Number,
        required: true
    },
    Triples: {
        type: Number,
        required: true
    },
    HR: {
        type: Number,
        required: true
    },
    RBI: {
        type: Number,
        required: true
    },
    R: {
        type: Number,
        required: true
    },
    SB: {
        type: Number,
        required: true
    },
    CS: {
        type: Number,
        required: true
    },
    timestamps: true
})

const Hitter = mongoose.model('Hitter', hitterSchema);
export default Hitter