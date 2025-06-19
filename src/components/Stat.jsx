function Stat({ number, title }) {
  const className = `stat__number ${number < 0 ? "stat__number--limit" : ""}`;

  return (
    <div className="stat">
      <span className={className}>{number}</span>
      <h2 className="second-heading">{title}</h2>
    </div>
  );
}

export default Stat;
