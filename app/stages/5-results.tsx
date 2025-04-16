import { useGame } from "../context/game-context";

interface Props {
  code: string;
}

function Results({ code }: Props) {
  const { results, finishGame } = useGame();

  return (
    <section>
      <h4 className="text-xl text-primary font-bold">
        {results == "winner" ? "You won!" : "You lost!"}
      </h4>
      <button
        onClick={() => finishGame(code)}
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        Play again
      </button>
    </section>
  );
}

export default Results;
