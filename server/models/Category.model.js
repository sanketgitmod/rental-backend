const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

exports.Category = Category;
