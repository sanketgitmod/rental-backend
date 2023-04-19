const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  numberOfWheels: {
    type: String,
    required: true,
  },
  typeOfVehicle: {
    type: String,
    required: true,
  },
  specificModel: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
