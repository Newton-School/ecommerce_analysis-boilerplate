const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// TODO: Implement logic to get top products based on total sales
exports.getTopProducts = async (req, res) => {
  try {
    // TODO: Use the aggregate pipeline to unwind products, group by product, and sort by total sales
    // TODO: Populate the topProducts with additional product details (if required)

    // TODO: Specify the field representing the product in the Order schema
    // TODO: Specify the fields to select from the Product model

    // TODO: Respond with the populatedTopProducts
    res.json(populatedTopProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// TODO: Implement logic to get revenue by product category
exports.getRevenueByCategory = async (req, res) => {
  try {
    // TODO: Use the aggregate pipeline to group products by category and calculate total revenue

    // TODO: Specify the field representing the category in the Product schema
    // TODO: Specify the field representing the price in the Product schema

    // TODO: Respond with the revenueByCategory
    res.json(revenueByCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
