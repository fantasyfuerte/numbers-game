"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://numbers-game-fppg.onrender.com/");

export const GameContext = createContext<ReturnType<typeof GetGame>>({
  onlinePeople: 0,
  createGame: () => {},
  joinGame: () => {},
  setSecretNumber: () => {},
  ready: false,
  // endGame: () => {},
});

const GetGame = () => {
  const [onlinePeople, setOnlinePeople] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    socket.on("online-status", (socket) => {
      setOnlinePeople(socket);
    });
    socket.on("joined-to-game", () => {
      setReady(true);
    });
    return () => {
      socket.disconnect();
    };
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

  return { onlinePeople, ready, createGame, joinGame, setSecretNumber };
};

export function GameProvider({ children }: { children: React.ReactNode }) {
  return (
    <GameContext.Provider value={GetGame()}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
