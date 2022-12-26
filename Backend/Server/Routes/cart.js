import express from 'express';
import { verifyAdmin, verifyToken, verifyTokenAndAuthorization } from '../../Utils/verifyToken.js';
import { createCart, deleteCart, getAllCart, getCart, updateCart } from '../Controller/cartController.js';
const router = express.Router();
import '../Model/database.js';



/**
 * Routes
 */
router.post('/', verifyToken, createCart);
router.put('/:id', verifyTokenAndAuthorization, updateCart);
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);
router.get('/find/:id', verifyTokenAndAuthorization, getCart);
router.get('/', verifyAdmin, getAllCart);



export default router;