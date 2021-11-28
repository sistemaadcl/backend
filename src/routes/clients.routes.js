import { Router } from 'express';
const router = Router();
import { addCotizationClient, getCotizationClient, newClient, searchClient } from '../controllers/clients.controllers.js';

router.post('/client', newClient)
router.post('/add/cotization', addCotizationClient)
router.get('/client', searchClient)
router.get('/client/cotization/:id', getCotizationClient)

export default router;