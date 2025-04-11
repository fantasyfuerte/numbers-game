"use client";

import { useContext } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { GameContext } from "../context/game-context";

function PeopleOnline() {
  const {onlinePeople} = useContext(GameContext);

  return (
    <div className="border-primary border-2 px-4 py-2 rounded-lg flex gap-2 text-primary items-center justify-around">
      <IoPersonOutline size={20} />
      <span className="font-semibold">{onlinePeople}</span>
    </div>
  );
}

export default PeopleOnline;
