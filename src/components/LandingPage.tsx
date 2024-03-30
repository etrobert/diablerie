import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import LearnMoreButton from "./LearnMoreButton";
import studioImage from "../images/studio-4.jpeg";

const LandingPage = () => (
  <section className="grid h-full place-content-center justify-items-center gap-4 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-[80%] after:bg-gradient-to-b after:from-transparent after:to-black">
    <Image
      className="absolute z-[-1] h-full object-cover brightness-50"
      src={studioImage}
      placeholder="blur"
      alt="Picture of the studio"
    />
    <h1 className="scroll-m-20 font-hot-winner-team text-6xl text-primary lg:text-8xl">
      LA DIABLERIE
    </h1>
    <div className="flex gap-2">
      <Link
        href="https://www.instagram.com/ladiablerietattoo"
        className={buttonVariants()}
      >
        Book Now
      </Link>
      <LearnMoreButton />
    </div>
  </section>
);

export default LandingPage;
