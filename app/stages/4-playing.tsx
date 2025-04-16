import { useEffect, useState } from "react";
import { useGame } from "../context/game-context";
import { NumberInput } from "../components/number-setter.tsx";

interface Props {
  code: string;
}

function Playing({ code }: Props) {
  const [number, setNumber] = useState<string>();
  const { isMyTurn, testNumber } = useGame();
  const [submitted, setSubmitted] = useState<boolean>(false);

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!number || number.length !== 4) return;
    testNumber(number, code);
    setSubmitted(true);
  }

  useEffect(() => {
    if (isMyTurn) setSubmitted(false);
  }, [isMyTurn]);

  return (
    <section className="flex flex-col gap-10 items-center">
      <h4 className="text-xl text-primary font-bold">
        {isMyTurn ? "It's your turn" : "The rival is thinking"}
      </h4>
      <form onSubmit={Submit}>
        <NumberInput
          onNumberChange={setNumber}
          submitted={submitted}
          disabled={submitted}
        />
      </form>
    </section>
  );
}

export default Playing;
