import { Saira_Stencil_One } from "next/font/google";
import GameCards from "./components/game-cards";

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h4 className="text-xl text-primary font-bold">Welcome to</h4>
        <h1
          className={`text-6xl font-bold gradient-text ${sairaStencilOne.className}`}
        >
          Numbers Game
        </h1>
      </div>
      <section className="flex gap-4 justify-around">
        <GameCards
          title="Create New Game"
          description="Invite a friend to guess your number. The first one to guess wins"
          img=""
          cta="Create"
        />
        <GameCards
          title="Join Game"
          description="Join a game created by a friend"
          img=""
          cta="Join"
        />
      </section>
    </main>
  );
}
