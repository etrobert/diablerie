import Image from "next/image";
import { Rye } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const rye = Rye({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="dark h-screen grid place-content-center gap-4 justify-items-center">
      <Image
        className="absolute object-cover h-full z-[-1] brightness-50"
        src="/studio-4.jpeg"
        width={1440}
        height={1477}
        alt="Picture of the studio"
      />
      <h1
        className={cn(
          rye.className,
          "scroll-m-20 text-4xl lg:text-5xl text-primary",
        )}
      >
        LA DIABLERIE
      </h1>
      <Button>Book Now</Button>
    </main>
  );
}
