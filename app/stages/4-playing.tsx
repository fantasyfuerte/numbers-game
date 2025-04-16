import { useEffect, useState } from "react";
import { useGame } from "../context/game-context";
import { NumberInput } from "../components/number-setter.tsx";

interface Props {
  code: string;
}

function Playing({ code }: Props) {
  const [number, setNumber] = useState<string>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { isMyTurn, testNumber, notes } = useGame();

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
        <button
          type="submit"
          className={`text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block ${
            !number || number?.length !== 4
              ? "opacity-40 bg-none"
              : "bg-primary hover:bg-primary/80"
          }`}
        >
          Submit
        </button>
      </form>
      <article className="grid grid-cols-2 gap-4">
        <div>
          {notes.you.map((note, index) => (
            <p key={index} className="text-primary font-bold">
              {note[0]}: {note[1]}
            </p>
          ))}
        </div>
        <div>
          {notes.rival.map((note, index) => (
            <p key={index} className="text-primary font-bold">
              {note[0]}: {note[1]}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Playing;
