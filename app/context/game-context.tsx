"use client";

import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://numbers-game-fppg.onrender.com/");

export const GameContext = createContext({
  onlinePeople: 0,
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [onlinePeople, setOnlinePeople] = useState(0);

  useEffect(() => {
    socket.on("online-status", (socket) => {
      setOnlinePeople(socket);
    });
  }, []);

  return (
    <GameContext.Provider value={{ onlinePeople: onlinePeople }}>
      {children}
    </GameContext.Provider>
  );
}
