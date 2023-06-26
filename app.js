const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/productos/get', (req, res) => {
    const categoria = req.query.categoria;
    res.send(`Lista de productos de la categoría: ${categoria}`);
});

app.post('/productos/post', (req, res) => {
    res.send('Producto creado correctamente');
});

app.put('/productos/put', (req, res) => {
    res.send('Producto editado correctamente');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server Express.js running on port ${port}`);
    });