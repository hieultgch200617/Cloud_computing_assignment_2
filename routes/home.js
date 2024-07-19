var express = require('express');
const ProductModel = require('../models/ProductModel');
var router = express.Router();

router.get('/', async (req, res) => {
    let productList = await ProductModel.find({}).populate('category').populate('supplier');
    res.render('home', { productList });
})



module.exports = router;