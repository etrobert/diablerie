import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const hotWinnerTeam = localFont({
  src: "../fonts/hot_winner_team/Hot-Winner-Team_DEMO.otf",
  display: "swap",
  variable: "--font-hot-winner-team",
});

const shockerous = localFont({
  src: "../fonts/shockerous/Shockerous.otf",
  display: "swap",
  variable: "--font-shockerous",
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
    <html lang="en" className="h-full dark">
      <body
        className={cn(
          inter.className,
          hotWinnerTeam.variable,
          shockerous.variable,
          "dark h-full",
        )}
      >
        {children}
      </body>
    </html>
  );
}
