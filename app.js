
const express = require('express');
const app = express();
const bodyParsed = require('body-parser');


app.use(bodyParsed.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/product" method="POST"><lable>Product:</lable><input type="text" name="title"/><lable>Size:</lable><input type="size" name="number"/><button type="submit">Add Product</button></form></body></html>');

})

app.use('/product', (req, res, next) => {
    
    console.log(req.body);
    
    res.redirect('/');
})
app.use('/', (req, res, next) => {
    res.send('<h1>This is hello from express.js</h1>');
});


app.listen(3000);