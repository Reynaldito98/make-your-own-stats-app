import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
        }))
        .then(user => res.status(201).send({username: user.username, email: user.email}))
        .catch(err => res.status(400).send(err))
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    return User.findUserByCredentials(email, password)
        .then(user => {
            res.send({
                token: jwt.sign({_id: user._id}, 'some-secret-key', {expiresIn: '7d'}),
                email,
                username: user.username,
                _id: user._id
            });
        })
        .catch(err => {
          res.status(401).send({ message: err.message })
        })
}

export {createUser, loginUser};