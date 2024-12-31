import express from "express";
import { createHitter, getHitters, updateHitter, deleteHitter } from "../controllers/hitter.controller.js";
import { auth } from "../middleware/auth.js";

const hitterRoutes = express.Router();

hitterRoutes.post('/', auth, createHitter)

hitterRoutes.get('/', auth, getHitters)

hitterRoutes.put('/:id', auth, updateHitter)

hitterRoutes.delete('/:id', auth, deleteHitter)


export default hitterRoutes;