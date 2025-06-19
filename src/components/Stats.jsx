import Stat from "./Stat";

function Stats({
  numberOfChars,
  instNumberOfChars,
  facebookNumberOfChars,
  numberOfWords,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} title="Words" />
      <Stat number={numberOfChars} title="Characters" />
      <Stat number={instNumberOfChars} title="Instagram" />
      <Stat number={facebookNumberOfChars} title="Facebook" />
    </section>
  );
}

export default Stats;
