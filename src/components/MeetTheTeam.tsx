import Image from "next/image";

const MeetTheTeam = () => (
  <section className="grid gap-4 p-4">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Meet the Team
    </h1>
    <ul className="grid gap-4">
      <li>
        <Image
          className="max-w-[30rem]"
          src="/ratboi_ttt.jpeg"
          width={1280}
          height={1600}
          alt="Portrait of Ratboi"
        />
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Ratboi
        </h2>
      </li>
      <li>
        <Image
          className="max-w-[30rem]"
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
