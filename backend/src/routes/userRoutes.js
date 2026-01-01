import express from "express";
import { saveUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/profile", saveUserProfile);

export default router;
