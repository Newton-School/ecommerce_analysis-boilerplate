const express = require('express');
const app = express();

const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');
const orderRoutes = require('../routes/orderRoutes');
const salesAnalysisRoutes = require('../routes/salesAnalysisRoutes');

app.use(express.json());

app.use('/api/v1', userRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', orderRoutes);
app.use('/api/v1', salesAnalysisRoutes);

module.exports = app;
