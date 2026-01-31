const DigestCard = ({ item }) => {
  return (
    <div className="digest-card">
      <h3 className="digest-title">{item.title}</h3>

      <pre className="digest-summary">{item.summary}</pre>

      <a href={item.url} target="_blank" rel="noreferrer" className="digest-link">
        Read full article →
      </a>
    </div>
  );
};

export default DigestCard;
