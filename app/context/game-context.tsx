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
  rivalIsReady: false,
  secretNumberFromSocket: "",
  // endGame: () => {},
});

const GetGame = () => {
  const [onlinePeople, setOnlinePeople] = useState(0);
  const [ready, setReady] = useState(false);
  const [rivalIsReady, setRivalIsReady] = useState(false);
  const [secretNumberFromSocket, setSecretNumberFromSocket] = useState("");

  useEffect(() => {
    socket.on("online-status", (socket) => {
      setOnlinePeople(socket);
    });
    socket.on("joined-to-game", (game) => {
      setReady(true);
    });
    socket.on("number-setted", (number: string) => {
      setSecretNumberFromSocket(number);
      console.log(number);
    });
    socket.on("rival-is-ready", () => {});
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
    console.log(number + gameCode);
    socket.emit("set-secret-number", number, gameCode);
  };

  return {
    onlinePeople,
    ready,
    createGame,
    joinGame,
    setSecretNumber,
    secretNumberFromSocket,
    rivalIsReady,
  };
};

export function GameProvider({ children }: { children: React.ReactNode }) {
  return (
    <GameContext.Provider value={GetGame()}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
