"use client";

import HomePage from "./stages/Home";

enum Stages {
  INITIAL = "initial",
  WAITING = "waiting",
  PLAYING = "playing",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
      <HomePage />
    </main>
  );
}
