import { useGame } from "../context/game-context";

const { results } = useGame();
function Results() {
  return (
    <section>
      <h4 className="text-xl text-primary font-bold">
        {results == "winner" ? "You won!" : "You lost!"}
      </h4>
    </section>
  );
}

export default Results;
