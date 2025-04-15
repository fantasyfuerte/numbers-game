import { useState } from "react";
import { Numbers } from "../components/number-setter.tsx";
import { useGame } from "../context/game-context";

interface Props {
  code: string;
}

function Playing({ code }: Props) {
  const [choosenNumber, setChosenNumber] = useState<string>();
  const { setSecretNumber, gameIsReady } = useGame();

  function Submit() {
    if (choosenNumber && choosenNumber.length == 4) {
      setSecretNumber(choosenNumber, code);
    }
  }

  return (
    <>
      {!gameIsReady && (
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-10">
            Choose your secret number
          </h4>
          <Numbers setSecretCode={setChosenNumber} />
          <button
            className={`text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block ${
              !choosenNumber || choosenNumber?.length !== 4
                ? "opacity-40 bg-none"
                : "bg-primary hover:bg-primary/80"
            }`}
            onClick={Submit}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default Playing;
