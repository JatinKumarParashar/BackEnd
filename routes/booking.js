const express=require('express');
const path=require('path');
const bookingController=require('../controllers/booking');
 const router=express.Router();

 router.post('/add-user',bookingController.postUser);
 router.get('/get',bookingController.getUser);
 router.delete('/delete/:id',bookingController.deleteUser);

 module.exports=router;