import { Router } from 'express';
const router = Router();
import { newClient, searchClient } from '../controllers/clients.controllers.js';

router.post('/client', newClient)
router.get('/client', searchClient)

export default router;