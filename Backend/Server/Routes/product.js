import express from 'express';
import { verifyAdmin } from '../../Utils/verifyToken.js';
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from '../Controller/productController.js';
const router = express.Router();
import '../Model/database.js';

/**
 * Routes
 */
router.post('/',verifyAdmin,createProduct);
router.put('/:id',verifyAdmin,updateProduct);
router.delete('/:id',verifyAdmin,deleteProduct);
router.get('/find/:id',getProduct);
router.get('/',getAllProduct);





export default router;