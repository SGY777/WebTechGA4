
const mongoose = require('mongoose');
const Product = require('./product');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    },
    product: {
        type : mongoose.Schema.Types.ObjectId, required: true, ref: 'Product',
    },
    quantity: { type: Number, required: true, default: 1 },
    createdAt: { type: Date, default: Date.now }
})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;