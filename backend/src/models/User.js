import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Demo User",
    },
    email: {
      type: String,
      default: "demo@news.ai",
    },
    interests: {
      type: [String],
      required: true,
    },
    keywords: {
      type: [String],
      default: [],
    },
    deliveryTime: {
      type: String,
      default: "08:00",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
