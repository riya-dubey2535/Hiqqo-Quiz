const validator = require("validator");
const { body, validationResult } = require("express-validator");

// Middleware to validate signup inputs
const validateSignupInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

// Middleware to validate login inputs
const validateLoginInput = [
  body("email").isEmail().withMessage("Invalid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Middleware to validate forgot inputs
const validateForgotInput = [
  body("email").isEmail().withMessage("Invalid email"),
];

// Middleware to validate verifyOTP inputs
const validateVerifyOTPInput = [
  body("otp").notEmpty().withMessage("Please enter OTP"),
  body("newpassword").notEmpty().withMessage("Password is required"),
  body("confirmpassword")
  .notEmpty()
  .withMessage("Confirm password is required")
  .custom((value, { req }) => {
    if (value !== req.body.newpassword) {
      throw new Error("Password and confirm password do not match");
    }
    return true;
  }),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateSignupInput,
  validateLoginInput,
  validateForgotInput,
  validateVerifyOTPInput,
  handleValidationErrors,
};
