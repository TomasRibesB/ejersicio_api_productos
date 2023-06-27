const express = require('express');
const routerProductos = express.Router();

routerProductos.get('/', (req, res) => {
    res.send('Hello World!');
});

routerProductos.get('/get', (req, res) => { //para enviar uno o multiples recursos
    const categoria = req.query.categoria;
    const stock = req.query.stock;
    res.send(`Lista de productos de la categoría: ${categoria}, con stock: ${stock}`);
});

routerProductos.get('/get/:id', (req, res) => { //para enviar un unico recurso
    const id = req.params.id;
    res.send(`Producto con id: ${id}`);
});

routerProductos.get('/', (req, res) => { //para autenticar
    const auth = req.headers['auth'];
    res.send(`Token de acceso: ${auth}`);
});

routerProductos.get('/json', (req, res) => { //para enviar un JSON
    const productos = [
    {id: 1, nombre: 'Escuadra', precio: 323.45, foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'},
    {id: 2, nombre: 'Calculadora', precio: 234.56, foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'},
    {id: 3, nombre: 'Globo Terráqueo', precio: 45.67, foto: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'},
    ];
    res.json(productos);
});

routerProductos.post('/post', (req, res) => { //para crear un recurso
    res.send('Producto creado correctamente');
});

routerProductos.post('/', (req, res) => { //ejemplo con JSON (importar const app = express(); app.use(express.json());
    const producto = req.body;
    res.send(`Guardar nuevo producto ${JSON.stringify(producto)}`);
});

routerProductos.put('/put', (req, res) => { //para editar un recurso
    res.send('Producto editado correctamente');
});


module.exports = routerProductos;