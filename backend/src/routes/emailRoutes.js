import express from "express";
import { sendDailyDigest } from "../services/digestService.js";

const router = express.Router();

router.get("/send", async (req, res) => {
  try {
    const digest = await sendDailyDigest();
    res.json({ message: "Digest email sent", digest });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default router;
