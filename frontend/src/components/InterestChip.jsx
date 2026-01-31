import React from "react";

const InterestChip = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`chip ${selected ? "selected" : ""}`}
    >
      {label}
    </button>
  );
};

export default InterestChip;
