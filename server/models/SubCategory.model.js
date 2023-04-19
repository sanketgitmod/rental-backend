const mongoose = require("mongoose");

const subCategoriesSchema = new mongoose.Schema({
  subCategoryName: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
});

const subCategories = mongoose.model("subCategories", subCategoriesSchema);

exports.subCategories = subCategories;
