import { Router } from 'express';
import { createOrder, getOrderByCotization, getOrders } from '../controllers/orders.controllers.js';
const router = Router();

router.post( '/create/order', createOrder )
router.get('/orders', getOrders )
router.get('/orders/cotization/:id', getOrderByCotization )

export default router;