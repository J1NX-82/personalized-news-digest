const COLOR_MAP = {
  emerald: {
    bg: "linear-gradient(135deg, #10b981, #34d399)",
    text: "#064e3b",
  },
  amber: {
    bg: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    text: "#78350f",
  },
  sky: {
    bg: "linear-gradient(135deg, #38bdf8, #7dd3fc)",
    text: "#0c4a6e",
  },
};

const StatsCard = ({ label, value, variant }) => {
  const color = COLOR_MAP[variant];

  return (
    <div
      style={{
        background: color.bg,
        padding: "22px",
        borderRadius: "18px",
        boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
        color: color.text,
      }}
    >
      <p style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>
        {label}
      </p>
      <h1 style={{ margin: "6px 0 0", fontSize: "32px" }}>
        {value}
      </h1>
    </div>
  );
};

export default StatsCard;
