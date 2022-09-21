const express=require('express');
const path=require('path');
const rootdir=require('../util/path');
const Product=require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const image = req.body.image;
    // const price = req.body.price;
    // const description = req.body.description;
    const product = new Product(title, image/*, description, price*/);
    product.save();
    res.redirect('/shop');
  };


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop', {
        prods: products,
        pageTitle: 'All Products',
        path: '/shop'
      });
    });
  };

  exports.getDetails=(req,res,next)=>{
    console.log(req.params.productId);
    Product.findById(req.params.productId,product=>{
        res.render('details',{
            product: product,
      //pageTitle: product.title,
      path: '/shop'
         })
  })
  }

 


exports.postProduct=(req,res,next)=>{
    const product=Product.fetchAll();
    console.log(product);
}

