import { useState } from "react";
import { useGame } from "../context/game-context";
import { Numbers } from "../components/number-setter.tsx";

function Playing() {
  const [number, setNumber] = useState<string>();
  const { isMyTurn } = useGame();

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(number);
  }

  return (
    <section className="flex flex-col gap-10 items-center">
      <h4 className="text-xl text-primary font-bold">
        {isMyTurn ? "It's your turn" : "The rival is thinking"}
      </h4>
      <form onSubmit={Submit}>
        <Numbers onNumberChange={setNumber} />
      </form>
    </section>
  );
}

export default Playing;
