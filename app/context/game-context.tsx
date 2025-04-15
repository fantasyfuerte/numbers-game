"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Stages } from "../stages/00-stages";

const socket = io("https://numbers-game-fppg.onrender.com/");

export const GameContext = createContext<ReturnType<typeof GetGame>>({
  createGame: () => {},
  joinGame: () => {},
  setSecretNumber: () => {},
  finishGame: () => {},
  onlinePeople: 0,
  ready: false,
  rivalIsReady: false,
  secretNumberFromSocket: "",
  appStage: Stages.INITIAL,
});

const GetGame = () => {
  const [onlinePeople, setOnlinePeople] = useState(0);
  const [ready, setReady] = useState(false);
  const [rivalIsReady, setRivalIsReady] = useState(false);
  const [secretNumberFromSocket, setSecretNumberFromSocket] = useState("");
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);

  const createGame = (code: string) => {
    socket.emit("create-game", code);
  };

  const joinGame = (code: string) => {
    socket.emit("join-game", code);
  };

  const setSecretNumber = (number: string, gameCode: string) => {
    socket.emit("set-number", { code: gameCode, number });
  };

  const finishGame = (gameCode: string) => {
    socket.emit("finish-game", gameCode);
    setAppStage(Stages.INITIAL);
  };

  useEffect(() => {
    socket.on("online-status", (users) => {
      setOnlinePeople(() => users);
    });
    socket.on("game-created", () => {
      setAppStage(Stages.WAITING);
    });
    socket.on("joined-to-game", (game) => {
      setAppStage(Stages.PLAYING);
      setReady(true);
    });
    socket.on("number-setted", (number: string) => {
      setSecretNumberFromSocket(number);
      console.log("number-setted");
    });
    socket.on("rival-is-ready", () => {
      console.log("rival is ready");
      setRivalIsReady(true);
    });
    socket.on("game-ready", () => {
      console.log("game started");
    });
    socket.on("error", (e) => {
      console.log(e);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return {
    createGame,
    joinGame,
    setSecretNumber,
    finishGame,
    onlinePeople,
    ready,
    secretNumberFromSocket,
    rivalIsReady,
    appStage,
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
