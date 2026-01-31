const StatsCard = ({ label, value, variant }) => {
  return (
    <div className={`stats-card ${variant}`}>
      <p>{label}</p>
      <h1>{value}</h1>
    </div>
  );
};

export default StatsCard;
