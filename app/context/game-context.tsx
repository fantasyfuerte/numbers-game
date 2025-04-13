"use client";

import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const GameContext = createContext({
  onlinePeople: 0,
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [onlinePeople, setOnlinePeople] = useState(0);

  useEffect(() => {
    const socket = io("https://numbers-game-fppg.onrender.com");
    socket.on("online-status ", (socket) => {
      setOnlinePeople(socket);
    });
  }, []);

  return (
    <GameContext.Provider value={{ onlinePeople: onlinePeople }}>
      {children}
    </GameContext.Provider>
  );
}
