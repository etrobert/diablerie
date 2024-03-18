import Image from "next/image";

const MeetTheTeam = () => (
  <section className="grid gap-4 px-4 py-8 text-primary">
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      Meet the Team
    </h1>
    <ul className="grid gap-4">
      <li className="grid place-items-center gap-2">
        <Image
          className="w-full max-w-[30rem]"
          src="/ratboi_ttt.jpeg"
          width={1280}
          height={1600}
          alt="Portrait of Ratboi"
        />
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Ratboi
        </h2>
      </li>
      <li className="grid place-items-center gap-2">
        <Image
          className="w-full max-w-[30rem]"
          src="/cagoule_girl.jpeg"
          width={1440}
          height={1800}
          alt="Portrait of Cagoule Girl"
        />
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Cagoule Girl
        </h2>
      </li>
    </ul>
  </section>
);
export default MeetTheTeam;
