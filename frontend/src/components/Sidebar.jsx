import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseStyle = {
    padding: "12px 16px",
    borderRadius: "12px",
    fontWeight: 600,
    color: "#fff",
  };

  return (
    <div
      style={{
        width: "260px",
        background:
          "linear-gradient(180deg, #4338ca 0%, #6366f1 60%, #818cf8 100%)",
        padding: "28px 20px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "48px", fontWeight: 800 }}>
        News<span style={{ color: "#e0e7ff" }}>AI</span>
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...baseStyle,
            background: isActive
              ? "rgba(255,255,255,0.3)"
              : "rgba(255,255,255,0.12)",
          })}
        >
          📌 Today’s Digest
        </NavLink>

        <NavLink
          to="/preferences"
          style={({ isActive }) => ({
            ...baseStyle,
            background: isActive
              ? "rgba(255,255,255,0.3)"
              : "rgba(255,255,255,0.12)",
          })}
        >
          ⚙️ Preferences
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
