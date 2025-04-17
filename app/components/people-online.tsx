"use client";

import { useContext } from "react";
import { GameContext } from "../context/game-context";
import { GiTargetDummy } from "react-icons/gi";

function PeopleOnline() {
  const { onlinePeople } = useContext(GameContext);

  return (
    <div className="p-[2px] bg-gradient-to-r from-primary to-secondary rounded-lg X">
      <div className="px-3 py-1 rounded-lg flex gap-2 text-backgroundSecondary items-center justify-around animate-pulse">
        <GiTargetDummy size={20} />
        <span className="font-bold text-lg">{onlinePeople}</span>
      </div>
    </div>
  );
}

export default PeopleOnline;
