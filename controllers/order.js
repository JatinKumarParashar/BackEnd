const express = require('express');
const path = require('path');
const rootdir = require('../util/path');
const Product = require('../models/product');
const Order = require('../models/order');
const ITEM_PER_PAGE = 1;

exports.postOrder=(req,res,next)=>{
    
  let fetchedCart;
  let newQuantity = 1;
  if(req.body.productId){
    const prodId = req.body.productId;
    req.customer
    .getCart()
    .then(cart=>{
        fetchedCart=cart;
        return cart.getProducts({where:{id:prodId}});
    }).then(product=>{
        return req.customer.createOrder().then(order=>{
            return order.addProducts(product,{through:{quantity:newQuantity}});
        })
    }).then(result=>{
        res.status(200).json(result);
    }).catch(err=>console.log(err));
  }
  else{
    req.customer
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then(products => {
      return req.customer
        .createOrder()
        .then(order => {
          return order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity };
              return product;
            })
          );
        }).then(result=>{
            res.status(201).json(result)
        })
        .catch(err => console.log(err));
    })
    .then(result => {
      return fetchedCart.setProducts(null);
    })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => console.log(err));
  }
 
}




exports.getOrder = (req, res, next) => {
  req.customer
    .getOrders({include: ['products']})
    .then(orders => {
      res.status(201).json(orders);
      // res.render('shop/orders', {
      //   path: '/orders',
      //   pageTitle: 'Your Orders',
      //   orders: orders
      // });
    })
    .catch(err => console.log(err));
};