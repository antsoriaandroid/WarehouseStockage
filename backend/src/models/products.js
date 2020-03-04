let listaProductos = [];
let lastId = 0;

exports.getAll = function () {
    return Promise.resolve(listaProductos);
};

exports.getById = function (id) {
    return new Promise(function (resolve, reject) {
        var producto = listaProductos.find(p => p.id == id);
        if (producto) {
            resolve(producto);
        } else { 
            reject();
        }
    });
};

exports.create = function (producto) {
    var id = ++lastId;
    producto.id = id;
    listaProductos.push(producto);
    return Promise.resolve(id);
};

exports.update = function (id, contacto) {
    return new Promise(function (resolve, reject) {
        var index = listaProductos.findIndex(p => p.id == id);
        if (index != -1) {
            producto.id = id;
            listaProductos[index] = producto;
            resolve();
        } else {
            reject();
        }
    });
};

exports.delete = function (id) {
    return new Promise(function (resolve, reject) {
        var index = contactos.findIndex(c => c.id == id);
        if (index != -1) {
            contactos.splice(index, 1);
            resolve();
        } else {
            reject();
        }
    });
};