import React from "react";

interface Props {
  code: string;
  cancelMatch: () => void;
}

function Waiting({ code, cancelMatch }: Props) {
  return (
    <article className="rounded-xl p-4 flex flex-col items-center gap-8">
      <h3 className="text-primary font-bold text-center">Waiting for rival</h3>
      <h3 className="text-primary font-bold text-center text-3xl gradient-text">
        {code}
      </h3>
      <button
        className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit"
        onClick={cancelMatch}
      >
        Cancel
      </button>
    </article>
  );
}

export default Waiting;
