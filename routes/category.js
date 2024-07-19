const express = require('express');
const multer = require('multer');
const CategoryModel = require('../models/CategoryModel');
const ProductModel = require('../models/ProductModel');
const router = express.Router();

router.get('/', async (req, res) => {
    let categoryList = await CategoryModel.find({});
    
    res.render('category', {categoryList});
})

router.get('/add', async (req, res) => {
    var categories = await CategoryModel.find({});
    res.render('category/add', { categories });
})

router.post('/add', async (req, res) => {
    var categories = req.body;
    await CategoryModel.create(categories);
    res.redirect('/category');
})

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var categories = await CategoryModel.findById(id);
    res.render('category/edit', { categories });
})

router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var categories = req.body;
    await CategoryModel.findByIdAndUpdate(id,categories);
    res.redirect('/category');
})

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await ProductModel.deleteMany({ category: id})
    await CategoryModel.findByIdAndDelete(id);
    res.redirect('/category');
})

module.exports = router;