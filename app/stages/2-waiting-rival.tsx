import { useGame } from "../context/game-context";

interface Props {
  code: string;
}

function Waiting({ code }: Props) {
  const { finishGame } = useGame();

  return (
    <article className="rounded-xl p-4 flex flex-col items-center gap-8">
      <h4 className="text-primary font-bold text-center">Waiting for rival</h4>
      <h4 className="text-primary font-bold text-center text-3xl gradient-text">
        {code}
      </h4>
      <button
        className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit"
        onClick={() => finishGame(code)}
      >
        Cancel
      </button>
    </article>
  );
}

export default Waiting;
