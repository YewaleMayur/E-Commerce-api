const express = require('express');
const router = express.Router();
const Product = require('../model/productmodel');

//create  a new product
router.post('products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        req.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Get a product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a product By ID
router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
