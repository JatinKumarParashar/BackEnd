const express = require('express');
const path=require('path');
const router = express.Router();
const productController=require('../controllers/product');

router.get('/add-product',productController.getAddProduct)

router.post('/add-product',productController.postAddProduct);
//console.log(productController.postAddProduct)

module.exports = router;