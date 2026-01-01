import React from "react";

const InterestChip = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        margin: "6px",
        borderRadius: "20px",
        border: selected ? "1px solid #2563eb" : "1px solid #d1d5db",
        backgroundColor: selected ? "#eff6ff" : "#fff",
        color: "#111827",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default InterestChip;
