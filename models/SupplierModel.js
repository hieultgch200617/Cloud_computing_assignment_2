const mongoose = require('mongoose');
const SupplierSchema = mongoose.Schema(
    {
        supplierName: String,
        phone : Number,
        email : String,
        address : String,
        description : String
    }
);

const SupplierModel = mongoose.model("suppliers", SupplierSchema);
module.exports = SupplierModel;