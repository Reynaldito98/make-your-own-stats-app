import express from 'express';
import { createPitcher, getPitchers, updatePitcher, deletePitcher } from '../controllers/pitcher.controller.js';
import { auth } from '../middleware/auth.js';

const pitcherRoutes = express.Router();

pitcherRoutes.post('/', auth, createPitcher)

pitcherRoutes.get('/', auth, getPitchers)

pitcherRoutes.put('/:id', auth, updatePitcher)

pitcherRoutes.delete('/:id', auth, deletePitcher)

export default pitcherRoutes;