import express from "express";
import { fetchAndStoreNews } from "../services/newsService.js";

const router = express.Router();

router.get("/fetch", async (req, res) => {
  await fetchAndStoreNews();
  res.json({ message: "News fetched successfully" });
});

export default router;
