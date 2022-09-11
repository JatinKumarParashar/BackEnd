
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('My name is Jatin Kumar');
    //res.send('<h1>This is hello from express.js</h1>');
    next();

});
app.use((req,res,next)=>{
    console.log('This is another app.use');
    res.send('<h1>hello from another app.use</h1>');
   // res.send( { 'key1': 'value' })
    next();
})
      
app.listen(3000);