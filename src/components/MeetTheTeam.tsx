import Image from "next/image";

const team = [
  {
    name: "Ratboi",
    image: { src: "/ratboi_ttt.jpeg", width: 1280, height: 1600 },
  },
  {
    name: "Cagoule Girl",
    image: { src: "/cagoule_girl.jpeg", width: 1440, height: 1800 },
  },
  {
    name: "Rosario",
    image: { src: "/rosario.jpeg", width: 320, height: 320 },
  },
  {
    name: "Marie Venena",
    image: { src: "/marie-venena.jpeg", width: 1440, height: 810 },
  },
];

const MeetTheTeam = () => (
  <section className="grid gap-4 px-4 py-8 text-primary">
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      Meet the Team
    </h1>
    <ul className="grid gap-4">
      {team.map(({ name, image }) => (
        <li key={name} className="grid place-items-center gap-2">
          <Image
            className="w-full max-w-[30rem]"
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`Portrait of ${name}`}
          />
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {name}
          </h2>
        </li>
      ))}
    </ul>
  </section>
);
export default MeetTheTeam;
