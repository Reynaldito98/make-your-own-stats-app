import mongoose from "mongoose";
import express from "express";
import { createTeam, getTeam, updateTeam } from "../controllers/team.controller.js";
const teamRouter = express.Router();
import { auth } from "../middleware/auth.js";

teamRouter.post('/',auth, createTeam)

teamRouter.get('/', auth, getTeam)

teamRouter.put('/:id', auth, updateTeam)


export default teamRouter;