const { masterSpecification } = require("../models/masterSpecification.model");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res, next) => {
  try {
    const masterSpecifications = await masterSpecification.find();
    res.send(masterSpecifications);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const allSpecification = await masterSpecification.aggregate([
      { $match: { subCategoryId: mongoose.Types.ObjectId(req.params.id) } },
      {
        $project: {
          _id: 0,
          masterSpecificationName: 1,
        },
      },
    ]);
    res.send(allSpecification);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { masterSpecificationName, subCategoryId } = req.body;

    const newMasterSpecification = masterSpecification({
      masterSpecificationName,
      subCategoryId,
    });
    const spec = await newMasterSpecification.save();
    res.send(spec);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
