import express from "express";
import { logIn, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route('/signup').post(register);
router.route('/login').post(logIn);
router.route('/profile/update').post(isAuthenticated,updateProfile);

export default router;