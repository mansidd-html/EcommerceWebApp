import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to mongodb"))
    .catch((err) => console.log(err));

/**
 * Models Import
 */
import User from './User.js';
import Cart from './Cart.js';
import Order from './Order.js';
import Product from './Product.js';