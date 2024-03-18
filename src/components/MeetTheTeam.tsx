import Image from "next/image";
import ratboiImage from "../images/ratboi_ttt.jpeg";
import cagouleGirlImage from "../images/cagoule_girl.jpeg";
import rosarioImage from "../images/rosario.jpeg";
import marieVenenaImage from "../images/marie-venena.jpeg";

const team = [
  {
    name: "Ratboi",
    image: ratboiImage,
  },
  {
    name: "Cagoule Girl",
    image: cagouleGirlImage,
  },
  {
    name: "Rosario",
    image: rosarioImage,
  },
  {
    name: "Marie Venena",
    image: marieVenenaImage,
  },
];

const MeetTheTeam = () => (
  <section
    id="meet-the-team"
    className="grid gap-8 px-4 py-8 text-primary lg:gap-16 lg:py-16"
  >
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      Meet the Team
    </h1>
    <ul className="grid gap-4 lg:grid-cols-2">
      {team.map(({ name, image }) => (
        <li key={name} className="grid place-items-center gap-2">
          <Image
            className="w-full max-w-[30rem]"
            src={image}
            placeholder="blur"
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
