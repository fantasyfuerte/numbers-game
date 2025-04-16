"use client";

import { useState } from "react";
import { useGame } from "./context/game-context";
import { Stages } from "./stages/0-stages";
import Initial from "./stages/1-initial";
import Waiting from "./stages/2-waiting-rival";
import SetNumber from "./stages/3-set-number";
import Playing from "./stages/4-playing";
import Results from "./stages/5-results";

export default function Home() {
  const { appStage } = useGame();
  const [code, setCode] = useState<string>("");

  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      {appStage === Stages.INITIAL && <Initial code={code} setCode={setCode} />}
      {appStage === Stages.WAITING && <Waiting code={code} setCode={setCode} />}
      {appStage === Stages.SET_NUMBER && <SetNumber code={code} />}
      {appStage === Stages.PLAYING && <Playing code={code} />}
      {appStage === Stages.RESULTS && <Results />}
    </main>
  );
}
