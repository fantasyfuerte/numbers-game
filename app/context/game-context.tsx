"use client";

import { createContext } from "react";
import { Socket } from "socket.io-client";



export const GameContext = createContext({
  onlinePeople: 0,
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  return (
    <GameContext.Provider value={{ onlinePeople: 0 }}>
      {children}
    </GameContext.Provider>
  );
}
