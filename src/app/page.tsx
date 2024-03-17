import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        <h1 className="text-5xl">La Diablerie</h1>
        <Button>Book Now</Button>
      </div>
    </main>
  );
}
