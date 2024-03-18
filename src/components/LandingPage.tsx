import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const LandingPage = () => (
  <section className="grid h-screen place-content-center justify-items-center gap-4">
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
    <Link
      href="https://www.instagram.com/ladiablerietattoo"
      className={buttonVariants()}
    >
      Book Now
    </Link>
  </section>
);

export default LandingPage;
