"use client";

import { useContext } from "react";
import { GameContext } from "../context/game-context";
import { GiTargetDummy } from "react-icons/gi";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Component to show the number of people online.
 *
 * @returns A react component containing a small, rounded rectangle with a
 *          gradient background and a bold, large font with the number of
 *          people online. The component is wrapped in a larger, slightly
 *          rounded rectangle with a pulse animation.
 */
/*******  25934c22-84f6-40e7-8e73-b10112f03c17  *******/ function PeopleOnline() {
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
