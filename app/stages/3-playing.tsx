import { useState } from "react";

function Playing() {
  const [secretNumber, setSecretNumber] = useState<null | number>(null);

  return <>
    {!secretNumber && (
      <div className="flex flex-col items-center">
        <h4 className="text-3xl md:text-4xl font-bold text-primary">
          Waiting for the rival to choose a secret number
        </h4>
      </div>
    )}
  </>;
}

export default Playing;
