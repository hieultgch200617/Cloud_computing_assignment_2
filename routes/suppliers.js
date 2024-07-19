const express = require('express');
const SupplierModel = require('../models/SupplierModel');
const ProductModel = require('../models/ProductModel');
const router = express.Router();

router.get('/', async (req, res) => {
    let supplierList = await SupplierModel.find({});
    res.render('supplier', {supplierList});
})

router.get('/delete/:id', async (req, res) => {
    let id = req.params.id;
    await ProductModel.deleteMany({ supplier: id})
    await SupplierModel.findByIdAndDelete(id);
    res.redirect('/supplier');
})

router.get('/add', async(req, res) => {
    var suppliers = await SupplierModel.find({});
    res.render('supplier/add', { suppliers });
})

router.post('/add', async (req, res) => {
    var supplier = req.body;
    console.log(suppliers)
    await SupplierModel.create(suppliers);
    res.redirect('/supplier');
})

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var suppliers = await SupplierModel.findById(id);
    res.render('supplier/edit', { suppliers });
})

router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var suppliers = req.body;
    await SupplierModel.findByIdAndUpdate(id,suppliers);
    res.redirect('/supplier');
})


module.exports = router;