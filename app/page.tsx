"use client";

import { useEffect, useState } from "react";
import Initial from "./stages/1-initial";
import Waiting from "./stages/2-waiting-rival";
import { Stages } from "./stages/00-stages";
import { useGame } from "./context/game-context";
import Playing from "./stages/3-playing";

export default function Home() {
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);
  const [code, setCode] = useState<string>("");
  const { ready } = useGame();

  useEffect(() => {
    if (ready) {
      setAppStage(Stages.PLAYING);
    }
  }, [ready]);

  function cancelMatch() {
    setAppStage(Stages.INITIAL);
    setCode("");
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
      {appStage === Stages.PLAYING && <Playing code={code} />}
    </main>
  );
}
