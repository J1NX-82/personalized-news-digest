const DigestCard = ({ item }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #ffffff, #f9fafb)",
        borderTop: "4px solid #6366f1",
        borderRadius: "18px",
        padding: "22px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(0,0,0,0.06)";
      }}
    >
      <h3 style={{ marginBottom: "10px", lineHeight: 1.3 }}>
        {item.title}
      </h3>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          color: "#374151",
          fontSize: "14px",
          marginBottom: "12px",
        }}
      >
        {item.summary}
      </pre>

      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#4f46e5",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        Read full article →
      </a>
    </div>
  );
};

export default DigestCard;
