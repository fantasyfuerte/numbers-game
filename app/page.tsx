"use client";

import { useState } from "react";
import Initial from "./stages/1-initial";
import Waiting from "./stages/2-waiting-rival";

export enum Stages {
  INITIAL = "initial",
  WAITING = "waiting",
  PLAYING = "playing",
}

export default function Home() {
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);
  const [code, setCode] = useState<string>("");

  function cancelMatch() {
    setAppStage(Stages.INITIAL);
  }

  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      {appStage === Stages.INITIAL && (
        <Initial
          setAppStage={setAppStage}
          code={code}
          setCode={setCode}
          cancelMatch={cancelMatch}
        />
      )}
      {appStage === Stages.WAITING && (
        <Waiting code={code} cancelMatch={cancelMatch} />
      )}
    </main>
  );
}
