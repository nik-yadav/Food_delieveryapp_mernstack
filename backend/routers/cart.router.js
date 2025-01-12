const express = require('express')
const router = express.Router();
const cartDataController = require('../controllers/cartData.controller')

router.post('/createcart', cartDataController.createcart);
router.get('/createcart1/:id', cartDataController.getCartData);

module.exports = router
