const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/product" method="POST"><lable>Product:</lable><input type="text" name="title"/><lable>Size:</lable><input type="size" name="number"/><button type="submit">Add Product</button></form></body></html>');
    console.log('Jatin')
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;