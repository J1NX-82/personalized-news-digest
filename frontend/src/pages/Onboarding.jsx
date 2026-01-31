import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const normalizeInterest = (s) =>
    typeof s === "string" && s.length > 0
      ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
      : s;

  useEffect(() => {
    api
      .get("/users/profile")
      .then((res) => {
        const data = res.data || {};
        const interests = Array.isArray(data.interests)
          ? data.interests.map(normalizeInterest)
          : [];
        setSelectedInterests(interests);
        setKeywords(Array.isArray(data.keywords) ? data.keywords.join(", ") : "");
      })
      .catch(() => {
        setSelectedInterests([]);
        setKeywords("");
      })
      .finally(() => setLoading(false));
  }, []); // ✅ ESLint OK

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await api.post("/users/profile", {
        interests: selectedInterests,
        keywords: keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean),
      });

      const saved = response.data || {};
      setSelectedInterests(
        Array.isArray(saved.interests)
          ? saved.interests.map(normalizeInterest)
          : selectedInterests
      );
      setKeywords(Array.isArray(saved.keywords) ? saved.keywords.join(", ") : keywords);

      alert("Preferences saved successfully!");

      if (onSaved) onSaved();
    } catch (error) {
      alert("Failed to save preferences");
    } finally {
      setLoading(false);
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
      <p style={{ color: "#6b7280" }}>We’ll personalize your daily news digest.</p>

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
        disabled={loading}
        style={{
          marginTop: "28px",
          padding: "12px",
          width: "100%",
          backgroundColor: loading ? "#9ca3af" : "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: 600,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Saving..." : "Save Preferences"}
      </button>
    </div>
  );
};

export default Onboarding;
