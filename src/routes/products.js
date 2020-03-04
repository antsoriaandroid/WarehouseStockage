const express = require('express');
const router = express.Router();

var controller = require('../controllers/products.js');

var products = require('../models/products.js');

router.param("id", function(req, res, next, id){
    products.getById(id).
        then(producto=>{
                            req.producto = producto;
                            next();
                        }
        ).catch(()=>res.status(404).send("Not Found"));
});

router.get('/', controller.getProductList);
router.get('/:id', controller.getProduct);
router.post('/', controller.addProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;