const express=require('express');
const path=require('path');
const rootdir=require('../util/path');
const Product=require('../models/product');


exports.getAddProduct=(req, res, next) => {
    res.sendFile(path.join(rootdir,'views','add-product.html'));
}

exports.postAddProduct= (req, res, next) => {
    
    const product=new Product(req.body);
    product.save();
    res.redirect('/shop');
}


exports.getProducts= (req, res, next) => {
    const product=Product.fetchAll();
    res.sendFile(path.join(rootdir,'views','shop.html'));
}

exports.postProduct=(req,res,next)=>{
    const product=Product.fetchAll();
    console.log(product);
}

exports.getCart=(req,res,next)=>{
res.sendFile(path.join(rootdir,'views','cart.html'));
}