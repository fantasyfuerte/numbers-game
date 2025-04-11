import { Saira_Stencil_One } from "next/font/google";

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
      <section></section>
    </main>
  );
}
