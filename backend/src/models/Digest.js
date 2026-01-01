import mongoose from "mongoose";

const digestSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    date: {
      type: String, // YYYY-MM-DD
      required: true,
    },
    items: [
      {
        title: String,
        summary: String,
        source: String,
        url: String,
      },
    ],
    sent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Digest = mongoose.model("Digest", digestSchema);

export default Digest;
