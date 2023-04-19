const mongoose = require("mongoose");

const masterSpecificationSchema = new mongoose.Schema({
  masterSpecificationName: {
    type: String,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategories",
  },
});

const masterSpecification = mongoose.model(
  "masterSpecification",
  masterSpecificationSchema
);

exports.masterSpecification = masterSpecification;
