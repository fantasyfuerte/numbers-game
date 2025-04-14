import { useState } from "react";
import { Numbers } from "../components/number-setter.tsx";

function Playing() {
  const [secretNumber, setSecretNumber] = useState<number>();
  const [readyToPlay, setReadyToPlay] = useState(false);

  return (
    <>
      {!readyToPlay && (
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-10">
            Choose your secret number
          </h4>
          <Numbers setSecretCode={setSecretNumber} />
        </div>
      )}
    </>
  );
}

export default Playing;
