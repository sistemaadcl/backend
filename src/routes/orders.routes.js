import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/orders.controllers.js';
const router = Router();

router.post( '/create/order', createOrder )
router.get('/orders', getOrders )

export default router;