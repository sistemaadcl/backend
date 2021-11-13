import { Router } from 'express';
const router = Router();
import { addCatalogCotization,addClientCotization,cotizationsPay,createCotization,getAllCotizations, getClientsCotization } from '../controllers/cotization.controller.js';

router.post('/cotization', createCotization);
router.post('/add/catalog', addCatalogCotization);
router.post('/add/client', addClientCotization)
router.get('/cotization', getAllCotizations)
router.get('/cotization/client/:id', getClientsCotization)
router.get('/cotization/pay', cotizationsPay)

export default router