import axios from "axios";
import Article from "../models/Article.js";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";

export const fetchAndStoreNews = async () => {
  try {
    const response = await axios.get(NEWS_API_URL, {
        params: {
        q: "technology",
        pageSize: 20,
        apiKey: process.env.NEWS_API_KEY,
        },
    });

    const articles = response.data.articles;

    for (const item of articles) {
    if (!item.url) continue;
      await Article.updateOne(
        { url: item.url },
        {
          $setOnInsert: {
            title: item.title,
            description: item.description,
            content: item.content,
            url: item.url,
            source: item.source.name,
            category: "technology",
            publishedAt: item.publishedAt,
          },
        },
        { upsert: true }
      );
    }

    console.log(`Fetched ${articles.length} articles`);
  } catch (error) {
    console.error("Error fetching news", error.message);
  }
};
