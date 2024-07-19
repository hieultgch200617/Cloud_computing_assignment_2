const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        productName: String,
        price : Number,
        description : String,
        avatar : String,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories'
        },
        supplier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'suppliers'
        }
    }
);

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;