import express from "express";
import { saveUserProfile, getUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/profile", saveUserProfile);
router.get("/profile", getUserProfile);

export default router;
