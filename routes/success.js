const express=require('express');
const path=require('path');
const router = express.Router();
const formSuccess=require('../controllers/contact');

router.use('/success',formSuccess.success);

module.exports=router;