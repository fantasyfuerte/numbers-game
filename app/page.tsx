"use client";

import { useState } from "react";
import { useGame } from "./context/game-context";
import Initial from "./stages/1-initial";
import Waiting from "./stages/2-waiting-rival";

enum Stages {
  INITIAL = "initial",
  WAITING = "waiting",
  PLAYING = "playing",
}

export default function Home() {
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);
  const [code, setCode] = useState<string>("");

  const { createGame } = useGame();

  function createMatch() {
    setAppStage(Stages.WAITING);
    const code = crypto.randomUUID().slice(0, 5);
    setCode(code);
    createGame(code);
  }

  function cancelMatch() {
    setAppStage(Stages.INITIAL);
  }

  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      {appStage === Stages.INITIAL && <Initial createGame={createMatch} />}
      {appStage === Stages.WAITING && <Waiting code={code} cancelMatch={cancelMatch} />}
    </main>
  );
}
