import { Saira_Stencil_One } from "next/font/google";
import GameCards from "./components/game-cards";

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-30 md:p-20 pt-24 md:pt-20">
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
      <section className="flex gap-4 justify-around flex-wrap">
        <GameCards
          title="Create New Game"
          description="Invite a friend to guess your number. The first one to guess wins"
          cta="Create"
        />
        <GameCards
          title="Join Game"
          description="Join a game created by a friend"
          cta="Join"
        />
      </section>
    </main>
  );
}
