import React, { useState } from "react";
import InterestChip from "../components/InterestChip";
import api from "../services/api";

const INTERESTS = [
  "Technology",
  "AI",
  "Finance",
  "Startups",
  "Sports",
  "Health",
  "Politics",
  "Science",
];

const Onboarding = ({ onSaved }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [keywords, setKeywords] = useState("");

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    try {
      await api.post("/users/profile", {
        interests: selectedInterests,
        keywords: keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean),
      });

      alert("Preferences saved successfully!");

      if (onSaved) onSaved();
    } catch (error) {
      alert("Failed to save preferences");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "60px auto",
        background: "#ffffff",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
      }}
    >
      <h2>Choose your interests</h2>
      <p style={{ color: "#6b7280" }}>
        We’ll personalize your daily news digest.
      </p>

      <div style={{ marginTop: "20px" }}>
        {INTERESTS.map((interest) => (
          <InterestChip
            key={interest}
            label={interest}
            selected={selectedInterests.includes(interest)}
            onClick={() => toggleInterest(interest)}
          />
        ))}
      </div>

      <div style={{ marginTop: "24px" }}>
        <label>Keywords (comma separated)</label>
        <input
          type="text"
          placeholder="AI, OpenAI, Startups"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "28px",
          padding: "12px",
          width: "100%",
          backgroundColor: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Save Preferences
      </button>
    </div>
  );
};

export default Onboarding;
