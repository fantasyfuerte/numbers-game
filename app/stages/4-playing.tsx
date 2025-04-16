import { useEffect, useState } from "react";
import { useGame } from "../context/game-context";
import { NumberInput } from "../components/number-setter.tsx";
import { GiCheckMark } from "react-icons/gi";

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
    <section className="flex flex-col gap-10 items-center md:grid md:grid-cols-2 md:gap-36">
      <form onSubmit={Submit} className="flex flex-col items-center gap-4">
        <p className="text-xl text-primary font-bold text-center">
          {isMyTurn ? "It's your turn" : "The rival is thinking"}
        </p>
        <NumberInput
          onNumberChange={setNumber}
          submitted={submitted}
          disabled={submitted}
        />
        <button
          type="submit"
          className={`text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-2 block ${
            !number || number?.length !== 4 || submitted
              ? "opacity-40 bg-none"
              : "bg-primary hover:bg-primary/80"
          }`}
        >
          Submit
        </button>
      </form>
      <article className="grid grid-cols-2 gap-10">
        <ul className="flex flex-col gap-4">
          <h4 className="text-primary font-bold text-center">You</h4>
          {notes.you.map((note, index) => (
            <li className="flex gap-2 items-center text-primary" key={index}>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-2 text-backgroundSecondary font-bold">
                {note[0]}
              </div>
              <p className="font-semibold -mr-[6px]">{note[1]} </p>
              <GiCheckMark size={15} />
            </li>
          ))}
        </ul>
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
