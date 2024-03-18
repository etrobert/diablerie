import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const hotWinnerTeam = localFont({
  src: "./hot_winner_team/Hot-Winner-Team_DEMO.otf",
  display: "swap",
  variable: "--font-hot-winner-team",
});

export const metadata: Metadata = {
  title: "La Diablerie",
  description: "Tattoo studio in Bordeaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(inter.className, hotWinnerTeam.variable, "dark h-full")}
      >
        {children}
      </body>
    </html>
  );
}
