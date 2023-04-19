const mongoose = require("mongoose");

const masterSpecificationSchema = new mongoose.Schema({
  masterSpecificationName: {
    type: String,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategories",
  },
  booked: {
    type: Boolean,
    default: false,
  },
});

const masterSpecification = mongoose.model(
  "masterSpecification",
  masterSpecificationSchema
);

exports.masterSpecification = masterSpecification;
