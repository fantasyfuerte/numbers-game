import { useState } from "react";

interface Props {
  code: string;
  setCode: (code: string) => void;
  cancel: () => void;
  joinGame: (code: string) => void;
}

function JoinGameModal({ code, setCode, cancel, joinGame }: Props) {
  const [showError, setShowError] = useState<boolean>(false);

  function joinMatch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!code || code.length !== 4) {
      setShowError(true);
      return;
    }
    const codeFixed = code.toLowerCase();
    joinGame(codeFixed);
  }

  return (
    <div>
      <h4 className="text-primary text-2xl font-bold text-center">
        Match Code
      </h4>
      <form className="flex gap-2 mt-4" onSubmit={joinMatch}>
        <input
          type="text"
          placeholder="Type code here..."
          className="border-2 border-primary rounded-lg px-4 py-2 outline-none font-bold gradient-text text-center placeholder:opacity-45"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          autoFocus
        />
        <button
          className="bg-primary hover:bg-primary/80 text-backgroundSecondary p-4 rounded-lg font-bold w-fit mx-auto"
          type="submit"
        >
          Join
        </button>
      </form>
      <button
        className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block"
        onClick={() => {
          setCode("");
          cancel();
        }}
      >
        Cancel
      </button>
      {showError && (
        <p className="text-red-500 text-center mt-2">Invalid Code</p>
      )}
    </div>
  );
}

export default JoinGameModal;
