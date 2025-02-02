const express = require('express');
const orderController = require('../controllers/order.controller');
const router = express.Router();

router.get('/orders/:id', orderController.getUserOrders);

module.exports = router;
