const express = require('express');
const path=require('path');
const getProduct=require('../controllers/product');
const router = require('./admin');
const routers = express.Router();

routers.use('/',getProduct.getProducts);
//routers.use('/details',getProduct.postProduct);
module.exports = routers;