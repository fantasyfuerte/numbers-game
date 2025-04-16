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
  testNumber: () => {},
  onlinePeople: 0,
  ready: false,
  appStage: Stages.INITIAL,
  isMyTurn: false,
});

const GetGame = () => {
  const [onlinePeople, setOnlinePeople] = useState(0);
  const [ready, setReady] = useState(false);
  const [appStage, setAppStage] = useState<Stages>(Stages.INITIAL);
  const [isMyTurn, setIsMyTurn] = useState<boolean>(false);

  const createGame = (code: string) => {
    socket.emit("create-game", code);
  };

  const joinGame = (code: string) => {
    socket.emit("join-game", code);
  };

  const setSecretNumber = (number: string, gameCode: string) => {
    socket.emit("set-number", { code: gameCode, number });
  };

  const testNumber = (number: string, gameCode: string) => {
    socket.emit("test-number", { code: gameCode, number });
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
      setIsMyTurn(() => true);
    });
    socket.on("joined-to-game", () => {
      setAppStage(Stages.SET_NUMBER);
      setReady(true);
    });
    socket.on("game-ready", () => {
      setAppStage(Stages.PLAYING);
    });
    socket.on("has-played", (data) => {
      setIsMyTurn(data.youTurn);
      console.log(data);
      //data.number
      //data.asserts
    });
    socket.on("wait-timeout", () => {
      setAppStage(Stages.INITIAL);
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
    testNumber,
    onlinePeople,
    ready,
    appStage,
    isMyTurn,
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
