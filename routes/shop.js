const express = require('express');
const path = require('path');
const getProduct = require('../controllers/product');
const router = require('./admin');
const routers = express.Router();

routers.get('/', getProduct.getProducts);
routers.get('/:productId', getProduct.getDetails);
//routers.use('/details',getProduct.postProduct);
module.exports = routers;