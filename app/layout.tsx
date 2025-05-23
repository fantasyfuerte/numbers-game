import type { Metadata } from "next";
import { Geist_Mono, Saira_Stencil_One } from "next/font/google";
import "./globals.css";
import PeopleOnline from "./components/people-online";
import { GameProvider } from "./context/game-context";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CocoGuess",
  description: "Next.js + Socket.IO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased bg-backgroundSecondary select-none`}
      >
        <GameProvider>
          <div className="bg-gradient-to-r from-backgroundPrimary to-backgroundSecondary min-h-screen">
            <header className="flex justify-between py-4 px-8">
              <h2
                className={`text-2xl text-primary font-bold ${sairaStencilOne.className}`}
              >
                CocoGuess
              </h2>
              <PeopleOnline />
            </header>
            {children}
          </div>
        </GameProvider>
      </body>
    </html>
  );
}
