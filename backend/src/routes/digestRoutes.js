import express from "express";
import { generatePersonalizedDigest } from "../services/digestService.js";

const router = express.Router();

router.get("/preview", async (req, res) => {
  try {
    const digest = await generatePersonalizedDigest();
    res.json(digest);
  } catch (error) {
    console.error("DIGEST ERROR:", error);
    res.status(500).json({
      message: "Failed to generate digest",
      error: error.message,
    });
  }
});


export default router;
