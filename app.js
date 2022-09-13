const express = require('express');
const bodyParsed = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contact');
// const loginRoutes=require('./routes/login');
// const messageRoutes=require('./routes/message');

app.use(bodyParsed.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use(contactRoutes);

app.use('/success',(req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'err404.html'));
})

app.listen(3000);
























/*app.use('/login',(req,res,next)=>{
    res.send('<html><body><form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="GET"><input id="username" type="text" name="title"><button type="submit">add</button></form></body></html>')
   
});
app.get('/',(req,res,next)=>{
    res.send('<html><body><form action ="/"onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" method="POSt"><lable>Message:</lable><input type="text" id="message" name="message"/><input type="hidden" name="username" id="username" /><button typt="submit">Send Message</button></form></body></html>')
});

app.post('/',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
//     fs.writeFileSync("chat.text",`${Buffer.concat(req.body.username).toString().split('=')[1]}:`,`${Buffer.concat(req.body.message).toString().split('=')[1]}`,err=>{
//        err?console.log(err):re
//     })
 })*/