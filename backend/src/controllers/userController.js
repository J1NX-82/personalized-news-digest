import User from "../models/User.js";

export const saveUserProfile = async (req, res) => {
  try {
    const { interests, keywords } = req.body;

    if (!interests || interests.length === 0) {
      return res.status(400).json({ message: "Interests are required" });
    }

    // For now: delete existing demo user & create new
    await User.deleteMany({ email: "demo@news.ai" });

    const user = await User.create({
      interests,
      keywords,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
