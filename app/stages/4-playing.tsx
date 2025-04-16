import { useState } from "react";
import { useGame } from "../context/game-context";
import { Numbers } from "../components/number-setter.tsx";

interface Props {
  code: string;
}

function Playing({ code }: Props) {
  const [number, setNumber] = useState<string>();
  const { isMyTurn, testNumber } = useGame();

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!number) return;
    testNumber(number, code);
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
