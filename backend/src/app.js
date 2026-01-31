import userRoutes from "./routes/userRoutes.js";
import express from "express";
import cors from "cors";
import newsRoutes from "./routes/newsRoutes.js";
import digestRoutes from "./routes/digestRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

// Log incoming requests (method, url, origin) to help debug CORS / network issues
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} ${req.url} Origin: ${req.headers.origin || "<none>"}`);
  next();
});

app.use(cors({
  // Allow local development origin plus the deployed app origin
  origin: ["http://localhost:3000", "https://personalized-news-digest-rahul-goalas-projects.vercel.app"],
  credentials: true
}));
app.use(express.json());
app.use("/api/news", newsRoutes);
app.use("/api/digest", digestRoutes);
app.use("/api/users", userRoutes);
app.use("/api/email", emailRoutes);



app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

export default app;
