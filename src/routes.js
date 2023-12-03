import express from 'express';
import { createCustomer, createPaymentMethodForCustomer } from './forteController/forte.controller.js';

const router = express.Router();

router.post('/forte/customer',createCustomer);
post.post('/forte/paymentMethod', createPaymentMethodForCustomer)

export default router;