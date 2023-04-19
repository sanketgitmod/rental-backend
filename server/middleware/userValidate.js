const Joi = require("joi");

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    numberOfWheels: Joi.string().required(),
    typeOfVehicle: Joi.string().required(),
    specificModel: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
  });

  return schema.validate(user);
}

exports.validateUser = validateUser;
