const { subCategories } = require("../models/SubCategory.model");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res, next) => {
  try {
    const subCategory = await subCategories.find();
    res.send(subCategory);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const allCategory = await subCategories.aggregate([
      { $match: { categoryId: mongoose.Types.ObjectId(req.params.id) } },
      {
        $project: {
          _id: 1,
          subCategoryName: 1,
        },
      },
    ]);
    res.send(allCategory);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { subCategoryName, categoryId } = req.body;

    const newSubCategory = subCategories({ subCategoryName, categoryId });
    const category = await newSubCategory.save();
    res.send(category);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
