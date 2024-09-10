// models/product.model.js
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a product name']
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true // Corrected the typo to use 'timestamps'
    }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
