"use client";

import { useEffect, useState } from "react";
import Initial from "./stages/1-initial";
import Waiting from "./stages/2-waiting-rival";
import { Stages } from "./stages/00-stages";
import { useGame } from "./context/game-context";
import Playing from "./stages/3-playing";

export default function Home() {
  const [code, setCode] = useState<string>("");
  const { appStage } = useGame();

  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      {appStage === Stages.INITIAL && <Initial code={code} setCode={setCode} />}
      {appStage === Stages.WAITING && <Waiting code={code} />}
      {appStage === Stages.PLAYING && <Playing code={code} />}
    </main>
  );
}
