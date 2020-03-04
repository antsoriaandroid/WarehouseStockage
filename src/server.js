const express = require('express');
const app = express();

app.use(express.json);

let morgan = require('morgan');
app.use(morgan('tiny'));

app.use("/productos", require('./routes/products.js'));

app.listen(8080, function(){
    console.log("Servidor escuchando en el puerto 8080");
});