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

  const createGame = (code: string) => {
    socket.emit("create-game", code);
  };

  const joinGame = (code: string) => {
    socket.emit("join-game", code);
  };

  const setSecretNumber = (number: string, gameCode: string) => {
    console.log(number + gameCode);
    socket.emit("set-number", number, gameCode);
  };

  useEffect(() => {
    socket.on("online-status", (users) => {
      setOnlinePeople(() => users);
    });
    socket.on("joined-to-game", (game) => {
      setReady(true);
    });
    socket.on("number-setted", (number: string) => {
      setSecretNumberFromSocket(number);
      console.log("number-setted");
    });
    socket.on("rival-is-ready", () => {
      console.log("rival is ready");
    });
    socket.on("game-started", () => {
      console.log("game started");
    });
    return () => {
      socket.disconnect();
    };
  }, []);

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
