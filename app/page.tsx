"use client";

import { useState } from "react";
import HomePage from "./stages/Home";

enum Stages {
  INITIAL = "initial",
  WAITING = "waiting",
  PLAYING = "playing",
}

export default function Home() {
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);

  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      {appStage === Stages.INITIAL && <HomePage />}
    </main>
  );
}
