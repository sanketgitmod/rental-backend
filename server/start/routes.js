const express = require("express");

const users = require("../routes/users.routes");
const category = require("../routes/category.routes");
const subCategory = require("../routes/subCategory.routes");
const masterSpecification = require("../routes/masterSpecification.routes");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/category", category);
  app.use("/api/sub-category", subCategory);
  app.use("/api/master-specification", masterSpecification);
};
