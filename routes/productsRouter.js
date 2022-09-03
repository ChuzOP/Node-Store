const express = require('express');
const ProductsService = require('../services/productServices');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
    // Traemos los datos desde nuestros servicios
    const products = service.find();

    res.json(products); // Respuesta
});

router.get('/filter', (req, res) => {
    //primero las rutas estaticas
    res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
    const { id } = req.params; // Destructuracion del parametro
    const product = service.findOne(id); // Lo trae del servicio

    res.json(product); // Respuesta con el parametro
});

router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const rta = service.delete(id);
    res.json(rta);
});

module.exports = router;
