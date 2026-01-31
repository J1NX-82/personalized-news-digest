import express from "express";
import { generatePersonalizedDigest } from "../services/digestService.js";

const router = express.Router();

router.get("/preview", async (req, res) => {
  try {
    const limit = Math.max(1, parseInt(req.query.limit, 10) || 8);
    const digest = await generatePersonalizedDigest(limit);
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
