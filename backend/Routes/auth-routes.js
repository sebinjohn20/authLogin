import express from "express";
import {
  login,
  logout,
  register,
  sendVerifyOtp,
  verifiedEmail,
} from "../Controllers/auth_controller.js";
import userAuth from "../Middleware/userAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-verify-otp", userAuth, sendVerifyOtp);
router.post("/verify-account", userAuth, verifiedEmail);

export default router;
