var express = require('express');
var router = express.Router();

var controller = require('../controllers/products.js');

var Productos = require('../models/products.js');

// autoload
router.param("id", function (req, res, next, id){
    Productos.getById(id)
        .then(function (producto) {
            req.producto = producto;
            next();
        })
        .catch(function () {
            res.status(404).send("Not Found");
        });
});

router.get('/', controller.getProductList);
router.get('/:id', controller.getProduct);
router.post('/', controller.addProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;