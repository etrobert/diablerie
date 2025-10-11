import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import LearnMoreButton from "./LearnMoreButton";
import studioImage from "../images/studio-4.jpeg";

const LandingPage = () => (
  <section className="relative h-[120%] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-[80%] after:bg-linear-to-b after:from-transparent after:to-black">
    <Image
      className="absolute z-[-1] h-full w-full object-cover brightness-40"
      src={studioImage}
      placeholder="blur"
      alt="Picture of the studio"
    />
    <div className="grid h-screen place-content-center gap-3">
      <h1 className="font-shockerous scroll-m-20 text-5xl text-primary lg:text-9xl">
        LA DIABLERIE
      </h1>
      <div className="flex justify-center gap-2">
        <Link
          href="https://www.instagram.com/ladiablerietattoo"
          className={buttonVariants()}
        >
          Prendre RDV
        </Link>
        <LearnMoreButton />
      </div>
    </div>
  </section>
);

export default LandingPage;
