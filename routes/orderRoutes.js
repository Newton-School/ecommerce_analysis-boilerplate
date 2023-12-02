const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route for creating an order
router.post('/orders', orderController.createOrder);

// Export the router
module.exports = router;
