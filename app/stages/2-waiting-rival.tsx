import { useGame } from "../context/game-context";

interface Props {
  code: string;
  setCode: (code: string) => void;
}

function Waiting({ code, setCode }: Props) {
  const { finishGame } = useGame();

  function finishMatch() {
    finishGame(code);
    setCode("");
  }

  return (
    <section className="rounded-xl p-4 flex flex-col items-center gap-8">
      <h4 className="text-primary font-bold text-center">Waiting for rival</h4>
      <h4 className="text-primary font-bold text-center text-3xl gradient-text">
        {code}
      </h4>
      <button
        className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit"
        onClick={finishMatch}
      >
        Cancel
      </button>
    </section>
  );
}

export default Waiting;
