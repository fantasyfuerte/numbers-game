import { useState } from "react";
import { NumberInput } from "../components/number-setter.tsx";
import { useGame } from "../context/game-context";
import { GiDoubled } from "react-icons/gi";

interface Props {
  code: string;
}

function SetNumber({ code }: Props) {
  const [choosenNumber, setChosenNumber] = useState<string>();
  const [submited, setSubmited] = useState<boolean>(false);
  const { setSecretNumber } = useGame();

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (choosenNumber && choosenNumber.length == 4) {
      setSecretNumber(choosenNumber, code);
      setSubmited(true);
    }
  }

  return (
    <form className="flex flex-col items-center" onSubmit={Submit}>
      <h4 className="text-2xl md:text-3xl font-bold text-primary mb-10">
        Choose your secret number
      </h4>
      <NumberInput onNumberChange={setChosenNumber} />
      {!submited ? (
        <button
          className={`text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block ${
            !choosenNumber || choosenNumber?.length !== 4
              ? "opacity-40 bg-none"
              : "bg-primary hover:bg-primary/80"
          }`}
        >
          Submit
        </button>
      ) : (
        <div
          className={`text-backgroundSecondary rounded-lg font-bold mx-auto mt-4 bg-primary w-[86px] h-[40px] flex justify-center items-center animate-pulse`}
        >
          <GiDoubled className="animate-spin" size={30} />
        </div>
      )}
    </form>
  );
}

export default SetNumber;
