var express = require('express');
const multer = require('multer');
const ProductModel = require('../models/ProductModel');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  let productList = await ProductModel.find({}).populate('category').populate('supplier');
  res.render('index', { productList });
});

module.exports = router;
