const express=require('express');
const path=require('path');
const expenceController=require('../controllers/expence');
 const router=express.Router();

 router.post('/add-user',expenceController.postUser);
 router.get('/get',expenceController.getUser);
 router.delete('/delete/:id',expenceController.deleteUser);
router.post('/edit/:id',expenceController.editExpence);
 module.exports=router;