import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const LandingPage = () => (
  <section className="h-screen grid place-content-center gap-4 justify-items-center">
    <Image
      className="absolute object-cover h-full z-[-1] brightness-50"
      src="/studio-4.jpeg"
      width={1440}
      height={1477}
      alt="Picture of the studio"
    />
    <h1 className="scroll-m-20 text-6xl lg:text-5xl text-primary font-hot-winner-team">
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
