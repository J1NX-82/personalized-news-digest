import Article from "../models/Article.js";
import User from "../models/User.js";
import Digest from "../models/Digest.js";
import { summarizeArticle } from "./aiService.js";
import { sendDigestEmail } from "./emailService.js";

/**
 * Generate personalized summaries (no DB write)
 */
export const generatePersonalizedDigest = async () => {
  const user = await User.findOne({ email: "demo@news.ai" });

  if (!user) {
    throw new Error("Demo user not found");
  }

let articles = await Article.find({
  $or: [
    { title: { $regex: user.interests.join("|"), $options: "i" } },
    { description: { $regex: user.interests.join("|"), $options: "i" } },
  ],
})
  .sort({ publishedAt: -1 })
  .limit(5);

if (articles.length === 0) {
  articles = await Article.find({})
    .sort({ publishedAt: -1 })
    .limit(5);
}

const summaries = [];

  for (const article of articles) {
    const summary = await summarizeArticle(
      article,
      user.interests,
      user.keywords
    );

    summaries.push({
      title: article.title,
      summary,
      source: article.source,
      url: article.url,
    });
  }

  return summaries;
};

/**
 * Generate + store digest
 */
export const generateAndStoreDigest = async () => {
  const items = await generatePersonalizedDigest();

  const today = new Date().toISOString().split("T")[0];

  return await Digest.create({
    userEmail: "demo@news.ai",
    date: today,
    items,
    sent: false,
  });
};

/**
 * Send digest email and mark as sent
 */
export const sendDailyDigest = async () => {
  const digest = await generateAndStoreDigest();

  await sendDigestEmail(digest.userEmail, digest);

  digest.sent = true;
  await digest.save();

  return digest;
};
