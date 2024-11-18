import express from 'express';
import { createPitcher, getPitchers, updatePitcher, deletePitcher } from '../controllers/pitcher.controller.js';

const pitcherRoutes = express.Router();

pitcherRoutes.post('/', createPitcher)

pitcherRoutes.get('/', getPitchers)

pitcherRoutes.put('/:id', updatePitcher)

pitcherRoutes.delete('/:id', deletePitcher)

export default pitcherRoutes;