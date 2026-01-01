const TopBar = () => {
  return (
    <div
      style={{
        height: "72px",
        background: "#ffffff",
        borderRadius: "16px",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        marginBottom: "32px",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
          Personalized daily insights
        </p>
      </div>

      <div
        style={{
          padding: "8px 14px",
          background: "#eef2ff",
          color: "#4338ca",
          borderRadius: "999px",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Demo User
      </div>
    </div>
  );
};

export default TopBar;
