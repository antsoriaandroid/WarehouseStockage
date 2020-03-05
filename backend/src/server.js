const express = require('express');
const app = express();

var morgan = require('morgan');
app.use(morgan('tiny'));

// static files

app.use(express.static('public_html'));

// routes

app.use(express.json());

app.use("/productos", require('./routes/products.js'));

app.listen(8080, function () {
    console.log("Servidor escuchando en el puerto 8080");
});