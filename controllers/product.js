
const { where } = require('sequelize');
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  res.render('edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  // const description = req.body.description;

  console.log('Jatin Kumar parashar');
  console.log('123', req.customer.id);
  req.customer
  .createProduct({
    title: title,
    image: image,
    price: price

  })
    .then(result => {
      // console.log(result);
      console.log('created product');
      res.redirect('/shop');
    }).catch(err => res.json(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.params.productId;
  console.log(id);
  Product.findByPk(id)
  .then((product) => {
    return product.destroy(product);

  })
    .then(result => {
      res.redirect('/admin/product');
    })
    .catch((err) => {
      console.log(err);
    })

}

exports.postEditProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const id = req.body.productId;
  console.log(id);
  // const price = req.body.price;
  // const description = req.body.description;

  Product.findByPk(id).then(product => {
    product.title = title;
    product.image = image;
    return product.save();
  })
    .then(() => {
      res.redirect('/shop');
    })
    .catch(err => console.log(err));

}

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  req.customer
  .getProducts({where:{id:prodId}})
  .then((products) => {
    const product=products[0]
    if (!product) {
      return res.redirect('/');
    }
    res.render('edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true,
      product: product
    });
  }).catch(err => console.log(err));

};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(rows => {
    res.json(rows);
  //   res.render('shop', {
  //     prods: rows,
  //     pageTitle: 'All Products',
  //     path: '/shop'
  //  })
  }).catch((err) => {
    console.log(err);
  })

};


exports.getProduct = (req, res, next) => {
  req.customer
  .getProducts()
  .then(rows => {
    res.render('products', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/shop'
    })
  }).catch((err) => {
    console.log(err);
  })
};

exports.getDetails = (req, res, next) => {
  var id = req.params.productId;
  Product.findByPk(id).then((row) => {
    res.render('details', {
      product: row,
      path: '/shop'
    })
  }).catch((err) => {
    console.log(err);
  })


}
  //Product.findById(






// exports.postProduct = (req, res, next) => {
//   const product = Product.fetchAll();
//   console.log(product);
// }

