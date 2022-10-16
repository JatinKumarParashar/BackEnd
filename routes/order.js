const express=require('express');
const orderController=require('../controllers/order');
router=express.Router();

router.post('/post-order',orderController.postOrder);
router.get('/get-order',orderController.getOrder);

module.exports=router;