import { GiDeadHead, GiPodiumWinner } from "react-icons/gi";
import { useGame } from "../context/game-context";
import Confetti from "react-confetti";

interface Props {
  code: string;
  setCode: (code: string) => void;
}

function Results({ code, setCode }: Props) {
  const { results, finishGame } = useGame();

  return (
    <section className="flex flex-col gap-8 items-center text-primary">
      {results == "winner" ? (
        <>
          <GiPodiumWinner size={100} />
          <Confetti colors={["#dba465", "#c42626"]} />
        </>
      ) : (
        <GiDeadHead size={100} />
      )}
      <h4 className="text-2xl text-primary font-bold">
        {results == "winner" ? "You won!" : "You lost!"}
      </h4>
      <button
        onClick={() => {
          finishGame(code);
          setCode("");
        }}
        className="bg-primary hover:bg-primary/80 text-backgroundSecondary font-bold px-4 py-2 rounded-lg w-fit"
      >
        Play again
      </button>
    </section>
  );
}

export default Results;
