import mongoose from "mongoose";
import express from "express";
import { createTeam, getTeam, updateTeam } from "../controllers/team.controller.js";
const teamRouter = express.Router();

teamRouter.post('/', createTeam)

teamRouter.get('/', getTeam)

teamRouter.put('/:id', updateTeam)


export default teamRouter;