const { Category } = require("../models/Category.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const category = await Category.find();
    res.send(category);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { categoryName } = req.body;

    const newCategory = new Category({ categoryName });

    const category = await newCategory.save();
    res.send(category);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
