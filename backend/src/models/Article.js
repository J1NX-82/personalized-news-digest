import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    url: {
      type: String,
      unique: true,
    },
    source: String,
    category: String,
    publishedAt: Date,
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
