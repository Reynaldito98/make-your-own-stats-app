import express from "express";
import { createHitter, getHitters, updateHitter, deleteHitter } from "../controllers/hitter.controller.js";

const hitterRoutes = express.Router();

hitterRoutes.post('/', createHitter)

hitterRoutes.get('/', getHitters)

hitterRoutes.put('/:id', updateHitter)

hitterRoutes.delete('/:id', deleteHitter)


export default hitterRoutes;