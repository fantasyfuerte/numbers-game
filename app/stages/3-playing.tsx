import { useEffect, useState } from "react";
import { Numbers } from "../components/number-setter.tsx";
import { useGame } from "../context/game-context";

interface Props {
  code: string;
}

function Playing({ code }: Props) {
  const [choosenNumber, setChosenNumber] = useState<string>();
  const [readyToPlay, setReadyToPlay] = useState(false);

  const { setSecretNumber, rivalIsReady } = useGame();

  function Submit() {
    if (choosenNumber) {
      setSecretNumber(choosenNumber, code);
    }
  }

  useEffect(() => {
    if (!rivalIsReady) return;
    alert("rival is ready");
  }, [rivalIsReady]);

  return (
    <>
      {!readyToPlay && (
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-10">
            Choose your secret number
          </h4>
          <Numbers setSecretCode={setChosenNumber} />
          <button
            className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block"
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
