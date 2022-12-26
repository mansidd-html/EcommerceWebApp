import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import cors from 'cors';

/**
 * Import Routes
 */
import userRoute from './Server/Routes/user.js';
import authRoute from './Server/Routes/auth.js';
import productRoute from './Server/Routes/product.js';
import cartRoute from './Server/Routes/cart.js';
import orderRoute from './Server/Routes/order.js';
import stripeRoute from './Server/Routes/stripe.js';

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/stripe', stripeRoute);

/**
 * app listen
 */
app.listen(process.env.port || 5000, () => {
    console.log("running at port 5000");
})