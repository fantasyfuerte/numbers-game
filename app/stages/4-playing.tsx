import { useGame } from "../context/game-context";

function Playing() {
  const { isMyTurn } = useGame();

  return (
    <section className="flex flex-col gap-10 items-center">
      <h4 className="text-xl text-primary font-bold">
        {isMyTurn ? "It's your turn" : "The rival is thinking fons"}
      </h4>
    </section>
  );
}

export default Playing;
