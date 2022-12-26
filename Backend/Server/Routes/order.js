import express from 'express';
import { verifyAdmin, verifyToken, verifyTokenAndAuthorization } from '../../Utils/verifyToken.js';
import { createOrder, deleteOrder, getAllOrders, getOrders, getOrderStats, updateOrder } from '../Controller/orderController.js';
const router = express.Router();
import '../Model/database.js';

/**
 * Routes
 */
router.post('/', verifyToken, createOrder);
router.put('/:id', verifyAdmin, updateOrder);
router.delete('/:id', verifyAdmin, deleteOrder);
router.get('/find/:id', verifyTokenAndAuthorization, getOrders);
router.get('/', verifyAdmin, getAllOrders);
router.get('/income', verifyAdmin, getOrderStats);

export default router;