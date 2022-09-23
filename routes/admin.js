const express = require('express');
const path = require('path');
const router = express.Router();
const adminController = require('../controllers/product');

router.get('/add-product', adminController.getAddProduct)

router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:productId', adminController.getEditProduct);
router.get('/product', adminController.getProduct);
router.post('/edit-product', adminController.postEditProduct);
router.post('/delete/:productId', adminController.postDeleteProduct);
//console.log(productController.postAddProduct)

module.exports = router;