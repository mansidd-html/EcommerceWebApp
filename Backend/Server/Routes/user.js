import express from 'express';
import { verifyAdmin, verifyToken, verifyTokenAndAuthorization } from '../../Utils/verifyToken.js';
import { deleteUser, getAllUser, getUser, getUserStats, updateUser } from '../Controller/userController.js';
const router = express.Router();
import '../Model/database.js';

/**
 * Routes
 */
router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);
router.get('/find/:id', verifyAdmin, getUser);
router.get('/', verifyAdmin, getAllUser);
router.get('/stats', verifyAdmin, getUserStats);


export default router;