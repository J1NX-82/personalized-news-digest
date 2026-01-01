import cron from "node-cron";
import { fetchAndStoreNews } from "../services/newsService.js";

export const startNewsJob = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("Running hourly news fetch...");
    await fetchAndStoreNews();
  });
};
