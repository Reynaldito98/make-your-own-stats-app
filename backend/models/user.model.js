import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        validator: (v)=>validator.isEmail(v),
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
})

userSchema.statics.findUserByCredentials = function (email, password) {
    return this.findOne({email})
        .then(user => {
            if(!user) {
                return Promise.reject(new Error('Incorrect email or password'))
            }
            return bcrypt.compare(password, user.password)
                .then(matched => {
                    if(!matched) {
                        return Promise.reject(new Error('Incorrect email or password'));
                    }
                    return user;
                })
        })
}

const User = mongoose.model('User', userSchema);
export default User;