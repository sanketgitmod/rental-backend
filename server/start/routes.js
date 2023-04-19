const express = require("express");

const category = require("../routes/category.routes");
const subCategory = require("../routes/subCategory.routes");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/category", category);
  app.use("/api/sub-category", subCategory);
};
