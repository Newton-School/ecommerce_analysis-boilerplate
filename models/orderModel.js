const mongoose = require('mongoose');

// TODO: Define the schema for the Order model
const orderSchema = new mongoose.Schema({
  // TODO: Define the user field with a reference to the 'User' model and required true
  // TODO: Define the products field as an array with references to the 'Product' model with required true
  // TODO: Define the orderDate field with a default value of the current date and time
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
