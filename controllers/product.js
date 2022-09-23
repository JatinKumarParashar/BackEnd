const express = require('express');
const path = require('path');
const rootdir = require('../util/path');
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  res.render('edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  // const price = req.body.price;
  // const description = req.body.description;
  const product = new Product(null, title, image/*, description, price*/);
  product.save();
  res.redirect('/shop');
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.params.productId;
  console.log(id);
  Product.deleteProduct(id);
  res.redirect('/shop');
}

exports.postEditProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const id = req.body.productId;
  console.log(id);
  // const price = req.body.price;
  // const description = req.body.description;
  const product = new Product(id, title, image/*, description, price*/);
  product.save();
  res.redirect('/shop');
}

exports.getEditProduct = (req, res, next) => {
  //  const editMode = req.query.edit;
  // // if (!editMode) {
  // //   return res.redirect('/contactus');
  // // }
  const prodId = req.params.productId;
  console.log(prodId);
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      product: product
    });
  });
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


exports.getProduct = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('products', {
      prods: products,
      pageTitle: 'All Products',
      path: '/shop'
    });
  });
};

exports.getDetails = (req, res, next) => {
  console.log(req.params.productId);
  Product.findById(req.params.productId, product => {
    res.render('details', {
      product: product,
      //pageTitle: product.title,
      path: '/shop'
    })
  })
}






exports.postProduct = (req, res, next) => {
  const product = Product.fetchAll();
  console.log(product);
}

