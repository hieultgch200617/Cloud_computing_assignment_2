const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema(
    {
        categoryName: String,
        description : String
    }
);

const CategoryModel = mongoose.model("categories", CategorySchema);
module.exports = CategoryModel;