"use client";

import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import Image from "next/image";

const socket = io("https://numbers-game-fppg.onrender.com/");

export const GameContext = createContext<ReturnType<typeof getGame>>({
  onlinePeople: 0,
  createGame: () => {},
  joinGame: () => {},
  setSecretNumber: () => {},
  endGame: () => {},
});

const getGame = () => {
  const [onlinePeople, setOnlinePeople] = useState(0);

  useEffect(() => {
    socket.on("online-status", (socket) => {
      setOnlinePeople(socket);
    });
  }, []);
  const createGame = (code: string) => {
    socket.emit("create-game", code);
  };

  const joinGame = (code: string) => {
    socket.emit("join-game", code);
  };

  const setSecretNumber = (number: number, gameCode: string) => {
    socket.emit("set-secret-number", number, gameCode);
  };

  return { onlinePeople, createGame };
};

export function GameProvider({ children }: { children: React.ReactNode }) {
  return (
    <GameContext.Provider value={getGame()}>{children}</GameContext.Provider>
  );
}
