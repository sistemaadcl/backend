import { Router } from 'express';
const router = Router();
import { addProductsCatalog, createCatalog, getAllCatalogs } from '../controllers/catalogs.controller.js';

router.post('/catalog', createCatalog)
router.get( '/catalog', getAllCatalogs )
router.post('/add/product', addProductsCatalog)

export default router;