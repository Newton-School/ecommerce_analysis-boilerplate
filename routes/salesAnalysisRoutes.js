const express = require('express');
const router = express.Router();
const salesAnalysisController = require('../controllers/salesAnalysisController');

router.get(
  '/sales-analysis/top-products',
  salesAnalysisController.getTopProducts
);
router.get(
  '/revenue-by-category',
  salesAnalysisController.getRevenueByCategory
);

module.exports = router;
