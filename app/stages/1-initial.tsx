import GameCards from "@/app/components/game-cards";
import { Saira_Stencil_One } from "next/font/google";
import { useState } from "react";
import { useGame } from "@/app/context/game-context";
import JoinGameModal from "../components/join-game-modal";

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  setCode: (code: string) => void;
  code: string;
}

function HomePage({ setCode, code }: Props) {
  const [modal, setModal] = useState<boolean>(false);

  const { createGame, joinGame } = useGame();

  function createMatch() {
    const code = crypto.randomUUID().slice(0, 4);
    setCode(code);
    createGame(code);
  }

  return (
    <section className="flex flex-col gap-20">
      {modal ? (
        <JoinGameModal
          code={code}
          setCode={setCode}
          cancel={() => setModal(false)}
          joinGame={joinGame}
        />
      ) : (
        <>
          <div className="flex flex-col items-center -mt-10">
            <h4 className="text-lg md:text-xl text-primary font-bold">
              Welcome to
            </h4>
            <h1
              className={`text-5xl md:text-6xl font-bold gradient-text ${sairaStencilOne.className}`}
            >
              Numbers Game
            </h1>
          </div>
          <section className="flex gap-8 justify-around flex-wrap">
            <GameCards
              title="Create New Game"
              description="Invite a friend to guess your number. The first one to guess wins"
              cta="Create"
              action={createMatch}
            />
            <GameCards
              title="Join Game"
              description="Join a game created by a friend"
              cta="Join"
              action={() => setModal(true)}
            />
          </section>
        </>
      )}
    </section>
  );
}

export default HomePage;
