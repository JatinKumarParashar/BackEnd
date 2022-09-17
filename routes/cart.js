const express=require('express');
const path=require('path');

const router=express.Router();
const cartController=require('../controllers/product');


router.get('/cart',cartController.getCart);

module.exports=router;