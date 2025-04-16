import { GiDoubled } from "react-icons/gi";
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
    <section className="rounded-xl p-4 flex flex-col items-center gap-6">
      <h4 className="text-primary/80 font-bold text-center">
        Waiting for rival to join
      </h4>
      <div className="text-primary animate-spin">
        <GiDoubled size={40} />
      </div>
      <h4 className="text-primary font-bold text-center text-4xl gradient-text">
        {code}
      </h4>
      <button
        className="border-2 border-primary text-primary hover:bg-primary hover:text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit"
        onClick={finishMatch}
      >
        Cancel
      </button>
    </section>
  );
}

export default Waiting;
