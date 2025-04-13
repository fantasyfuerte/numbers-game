"use client";

import { useState } from "react";
import HomePage from "./stages/1-initial";
import { useGame } from "./context/game-context";

enum Stages {
  INITIAL = "initial",
  WAITING = "waiting",
  PLAYING = "playing",
}

export default function Home() {
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);

  const { createGame } = useGame();

  function createMatch() {
    setAppStage(Stages.WAITING);
    const code = crypto.randomUUID().slice(0, 5);
    createGame(code);
  }

  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      {appStage === Stages.INITIAL && <HomePage createGame={createMatch} />}

    </main>
  );
}
