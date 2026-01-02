import { useEffect, useState } from "react";
import api from "../services/api";
import DigestCard from "../components/DigestCard";
import StatsCard from "../components/StatsCard";
import TopBar from "../components/TopBar";

const Digest = () => {
  const [digest, setDigest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/digest/preview")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setDigest(res.data);
        } else {
          setDigest([]); // fallback to empty array
          console.error("Unexpected digest response:", res.data);
        }
      })
      .catch((err) => {
        console.error("Digest fetch failed:", err);
        setDigest([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <TopBar />
<button
  onClick={() => {
    setLoading(true);
    api.get("/digest/preview")
      .then((res) => setDigest(res.data))
      .finally(() => setLoading(false));
  }}
  style={{
    marginBottom: "24px",
    padding: "10px 16px",
    borderRadius: "10px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  }}
>
  🔄 Refresh Digest
</button>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  }}
>
  <StatsCard
    label="Articles Today"
    value={digest.length}
    variant="emerald"
  />
  <StatsCard
    label="Categories"
    value="Technology"
    variant="amber"
  />
  <StatsCard
    label="Digest Status"
    value="Generated"
    variant="sky"
  />
</div>


      {/* CONTENT */}
      {loading ? (
        <p style={{ color: "#6b7280" }}>Loading your digest…</p>
      ) : digest.length === 0 ? (
        <p>No articles available yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {digest.map((item) => (
            <DigestCard key={item.url} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Digest;
