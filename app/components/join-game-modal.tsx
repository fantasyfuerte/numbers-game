import React from "react";

function JoinGameModal({code, setCode, joinMatch, showError,cancelMatch}: any) {
  return (
    <div>
      <h4 className="text-primary text-2xl font-bold text-center">
        Match Code
      </h4>
      <input
        type="text"
        placeholder="Type code here..."
        className="border-2 border-primary rounded-lg px-4 py-2 mt-4 outline-none font-bold gradient-text text-center placeholder:opacity-45"
        onChange={(e) => setCode(e.target.value)}
        value={code}
        autoFocus
      />
      <button
        className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block"
        onClick={joinMatch}
      >
        Join
      </button>
      <button className="bg-primary hover:bg-primary/80 text-backgroundSecondary px-4 py-2 rounded-lg font-bold w-fit mx-auto mt-4 block" onClick={cancelMatch}>
        Cancel
      </button>
      {showError && (
        <p className="text-red-500 text-center mt-2">Invalid Code</p>
      )}
    </div>
  );
}

export default JoinGameModal;
