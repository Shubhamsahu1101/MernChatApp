import express from 'express';
import { getMesssages, sendMessage } from '../controllers/messageControllers.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/send/:id', protectRoute, sendMessage);
router.get('/:id', protectRoute, getMesssages);

export default router;