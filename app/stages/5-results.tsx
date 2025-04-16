import { useGame } from "../context/game-context";

interface Props {
  code: string;
  setCode: (code: string) => void;
}

function Results({ code, setCode }: Props) {
  const { results, finishGame } = useGame();

  return (
    <section className="flex flex-col gap-8 items-center">
      <h4 className="text-2xl text-primary font-bold">
        {results == "winner" ? "You won!" : "You lost!"}
      </h4>
      <button
        onClick={() => {
          finishGame(code);
          setCode("");
        }}
        className="bg-primary text-backgroundSecondary font-bold px-4 py-2 rounded-lg w-fit"
      >
        Play again
      </button>
    </section>
  );
}

export default Results;
