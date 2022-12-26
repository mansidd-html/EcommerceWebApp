import express from 'express';
const router = express.Router();
import '../Model/database.js';
import {registerUser,loginUser} from '../Controller/authController.js';
/**
 * Routes
 */
router.post('/register',registerUser);
router.post('/login',loginUser);

export default router;