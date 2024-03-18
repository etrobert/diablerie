import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import LearnMoreButton from "./LearnMoreButton";

const LandingPage = () => (
  <section className="grid h-full place-content-center justify-items-center gap-4">
    <Image
      className="absolute z-[-1] h-full object-cover brightness-50"
      src="/studio-4.jpeg"
      width={1440}
      height={1477}
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
