const { User } = require("../models/user.model");
const validate = require("../middleware/validate");
const { validateUser } = require("../middleware/userValidate");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

router.post("/", validate(validateUser), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      numberOfWheels,
      typeOfVehicle,
      specificModel,
      startDate,
      endDate,
    } = req.body;

    const user = new User({
      firstName,
      lastName,
      numberOfWheels,
      typeOfVehicle,
      specificModel,
      startDate,
      endDate,
    });

    await user.save();

    res.send(user);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
});

module.exports = router;
