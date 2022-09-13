const express=require('express');
const path=require('path');
const router = express.Router();
const rootdir=require('../util/path');

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'));
})

module.exports=router;