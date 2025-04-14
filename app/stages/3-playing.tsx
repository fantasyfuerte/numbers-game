import { useState } from "react";
import { Numbers } from "../components/number-setter.tsx";

function Playing() {
  const [secretNumber, setSecretNumber] = useState<null | number>(null);

  return (
    <>
      {!secretNumber && (
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-primary mb-10">
            Choose your secret number
          </h4>
          <Numbers />
        </div>
      )}
    </>
  );
}

export default Playing;
