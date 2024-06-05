const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: 'string', required: true },
    description: { type: 'string' },
    price: { type: 'number', required: true },
    category: { type: 'string', required: true },
    inStock: { type: 'boolean', required: true },
});

module.exports = mongoose.model("Product", productSchema);