const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePasswordUpdate(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.newpassword = !isEmpty(data.newpassword) ? data.newpassword : "";
  data.newpassword2 = !isEmpty(data.newpassword2) ? data.newpassword2 : "";

  // Password checks
  if (Validator.isEmpty(data.newpassword)) {
    errors.newpassword = "Password field is required";
  }

  if (Validator.isEmpty(data.newpassword2)) {
    errors.newpassword2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.newpassword, { min: 6, max: 30 })) {
    errors.newpassword = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.newpassword, data.newpassword2)) {
    errors.newpassword2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
