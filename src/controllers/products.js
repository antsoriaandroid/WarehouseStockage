var products = require('../models/products.js');

exports.getProductList = function (req, res){
    products.getAll()
        .then(productos=>{
            if (req.query.texto) {
                productos = productos.filter(p =>{ p.nombre.includes(req.query.texto)  || p.descripcion.includes(req.query.texto)});
            }

            res.json(productos);
        }).catch(()=> res.sendStatus(500));
};

exports.getProduct = function (req, res) {
    res.json(req.producto);
};

exports.addProduct = function (req, res) {
    var producto = req.body;
    products.create(producto)
        .then(function (id) {
            var location = '/productos/' + id;
            res.setHeader('Location', location);
            res.sendStatus(201);
        })
        .catch(function () {
            res.sendStatus(500);
        });
};

exports.updateProduct = function(req, res){
    let id = req.params.id;
    let product = req.body;

    products.update(id, producto)
    .then(function () {
        res.sendStatus(204);
    })
    .catch(function () {
        res.sendStatus(500);
    });
};

exports.deleteProduct = function (req, res) {
    var id = req.params.id;
    products.delete(id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function () {
            res.sendStatus(500);
        });
};