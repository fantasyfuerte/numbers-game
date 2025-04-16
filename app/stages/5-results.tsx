import { useGame } from "../context/game-context";

function Results() {
  const { results } = useGame();

  return (
    <section>
      <h4 className="text-xl text-primary font-bold">
        {results == "winner" ? "You won!" : "You lost!"}
      </h4>
    </section>
  );
}

export default Results;
