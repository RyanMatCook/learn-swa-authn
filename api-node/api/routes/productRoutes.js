'use strict';
module.exports = function(app) {
  var product = require('../controllers/productController');

  // product Routes
  app.route('/products')
    .get(product.list_all_products)
    .post(product.create_a_product);


  app.route('/products/:productId')
    .put(product.update_a_product)
    .delete(product.delete_a_product);
};