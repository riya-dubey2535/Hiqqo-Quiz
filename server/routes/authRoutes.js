const express = require("express");
const router = express.Router();
const { signup, login, forgotpass, verifyotp } = require("../controllers/authController");
const {
  validateSignupInput,
  validateLoginInput,
  validateForgotInput,
  validateVerifyOTPInput,
  handleValidationErrors,
} = require("../middleware/authMiddleware");

router.post("/signup", validateSignupInput, handleValidationErrors, signup);
router.post("/login", validateLoginInput, handleValidationErrors, login);
router.post("/forgotpass", validateForgotInput, handleValidationErrors, forgotpass);
router.post("/verify_otp_passreset", validateVerifyOTPInput, handleValidationErrors, verifyotp);

module.exports = router;


