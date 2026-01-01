import cron from "node-cron";
import { sendDailyDigest } from "../services/digestService.js";

export const startDigestJob = () => {
  cron.schedule("0 8 * * *", async () => {
    console.log("Running daily digest job...");
    try {
      await sendDailyDigest();
    } catch (error) {
      console.error("Digest job failed:", error.message);
    }
  });
};
