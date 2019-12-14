const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProfileUpdate(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.fname = !isEmpty(data.fname) ? data.fname : "";
  data.lname = !isEmpty(data.lname) ? data.lname : "";

  // Name checks
  if (Validator.isEmpty(data.fname)) {
    errors.fname = "First Name field is required";
  }

  if (Validator.isEmpty(data.lname)) {
    errors.lname = "Last Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
