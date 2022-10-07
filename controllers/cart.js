const express = require('express');
const path = require('path');
const rootdir = require('../util/path');
const Product = require('../models/product');
const Cart = require('../models/cart');


exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.customer
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
     res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  req.customer
  .getCart()
  .then(cart => {
    return cart
      .getProducts()
      .then(products => {
        res.render('cart', {
          path: '/cart',
          prods: products
        });
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
}


exports.deleteCart=(req,res,next)=>{
  const prodId = req.body.productId;
  Product.findByPk(prodId, product => {
    Cart.deleteProduct(prodId,product.title);
    res.redirect('/cart');
  });
}