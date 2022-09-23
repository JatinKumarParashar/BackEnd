const express = require('express');
const path = require('path');
const rootdir = require('../util/path');
const Product = require('../models/product');
const Cart = require('../models/cart');


exports.postCart = (req, res, next) => {
  console.log(req.body.productId);
  Cart.addProduct(req.body.productId);
}

exports.getCart = (req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', 'contact.html'));
}