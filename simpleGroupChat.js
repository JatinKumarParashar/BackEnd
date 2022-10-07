const express=require('express');

const bodyParsed = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParsed.urlencoded({ extended: false}));


app.use('/login',(req,res,next)=>{
    res.send(`<html><body><form action="/message" onsubmit="localStorage.setItem('username', document.getElementById('username').value)"  method="GET">
    <input id="username" type="text" name="title">
    <button type="submit">add</button></form>
    </body></html>`)
   
});
app.get('/message',(req,res,next)=>{
    console.log('jatin',req.body);
    res.send(`<html><body>
    <form action ="/postMessage" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <lable>Message:</lable>
    <input type="text" id="message" name="message"/>
    <input type="text" name="username" id="username" />
    <button type="submit">Send Message</button></form>
    </body></html>`)
});

app.post('/postMessage',(req,res,next)=>{
    console.log('123',req.body.username);
    console.log('456',req.body.message);
    // console.log(req.body.message);
    fs.writeFileSync("chat.text",`${req.body.username}:`,`${req.body.message}`,err=>{
       err?console.log(err):res.redirect('/');
    })
 })

 app.listen(4000);



























