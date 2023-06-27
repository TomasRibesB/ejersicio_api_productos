const express = require('express');
const app = express();
const routerProductos = require('./routes/productos');
app.use(express.json());

app.use((err, req, res, next) => {
res.status(err.status || 500);
res.json({error: err.message,});
});

app.use('/productos', routerProductos);

const port = 3000;

app.listen(port, () => {
    console.log(`Server Express.js running on port ${port}`);
});