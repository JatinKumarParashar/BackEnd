const express = require('express');
const path=require('path');
const getProduct=require('../controllers/product');
const routers = express.Router();

routers.get('/',getProduct.getProducts);

module.exports = routers;