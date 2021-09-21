'use strict';
const productService = require("../data/productService")

const list_all_products = function(req, res) {
    res.json(productService.getProducts());
};

const create_a_product = function(req, res) {
    var result = productService.addProduct(req.body);
    res.json(result);
};

// exports.read_a_product = function(req, res) {
//   productService.get
// };

const update_a_product = function(req, res) {
    var result = productService.updateProduct(req.body);
    res.json(result);
};


const delete_a_product = function(req, res) {
    const result = productService.deleteProduct(req.body);

    if(result)
        res.json({ message: 'Product successfully deleted' });
    else
        res.json({ message: 'Error deleting product' });
};


module.exports = {
    list_all_products,
    create_a_product,
    update_a_product,
    delete_a_product
}