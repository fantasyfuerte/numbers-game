"use client";

import { createContext, useEffect, useState } from "react";

export const GameContext = createContext({
  onlinePeople: 0,
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [onlinePeople, setOnlinePeople] = useState(0);

  useEffect(() => {
    setOnlinePeople(1);
  }, []);
  // useEffect(() => {
  //     const socket = new Socket("https://numbers-game-fppg.onrender.com");
  //     socket.on("connect", () => {
  //         console.log("connected");
  //     });
  //     socket.on("disconnect", () => {
  //         console.log("disconnected");
  //     });
  //     socket.on("onlinePeople", (data) => {
  //         setOnlinePeople(data);
  //     });
  // }, []);

  return (
    <GameContext.Provider value={{ onlinePeople: onlinePeople }}>
      {children}
    </GameContext.Provider>
  );
}
