const express = require('express');
const bodyParsed = require('body-parser');
const fs = require('fs');
const path = require('path');

const db=require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const err = require('./controllers/error');

const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');
const cartRoutes = require('./routes/cart');

const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');

app.use(bodyParsed.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

db.execute('SELECT * FROM product')




app.use(contactRoutes);
app.use(successRoutes);
app.use(cartRoutes);
app.use(err.error404);
app.listen(3000);



































































/*
app.use('/login',(req,res,next)=>{
    res.send('<html><body><form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"  method="GET"><input id="username" type="text" name="title"><button type="submit">add</button></form></body></html>')
   
});
app.get('/',(req,res,next)=>{
    res.send('<html><body><form action ="/" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)" method="POSt"><lable>Message:</lable><input type="text" id="message" name="message"/><input type="hidden" name="username" id="username" /><button typt="submit">Send Message</button></form></body></html>')
});

app.post('/',(req,res,next)=>{
    console.log(req.bodyuser);
    console.log(req.body.message);
    

    // fs.writeFileSync("chat.text",`${req.body.username}:`,`${req.body.message}`,err=>{
    //    err?console.log(err):res.redirect('/');
    // })
 })
*/























