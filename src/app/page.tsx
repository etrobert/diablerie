import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="dark text-white h-screen grid place-items-center">
      <Image
        // className="absolute right-0 top-0 h-screen w-auto"
        className="absolute object-cover h-full z-[-1]"
        src="/studio-4.jpeg"
        width={1440}
        height={1477}
        alt="Picture of the studio"
      />
      <div>
        <TypographyH1 text="La Diablerie" />
        <Button>Book Now</Button>
      </div>
    </main>
  );
}
