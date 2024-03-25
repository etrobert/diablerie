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
  <section className="grid gap-8 text-primary lg:gap-16">
    <h1
      id="meet-the-team"
      className="relative top-12 z-10 pl-4 text-4xl font-extrabold tracking-tight lg:top-24 lg:pl-8 lg:text-8xl"
    >
      MEET THE TEAM
    </h1>
    <ul className="grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1">
      {team.map(({ name, image }) => (
        <li key={name} className="relative">
          <Image
            className="h-[24vh] w-full object-cover brightness-75 lg:h-[90vh]"
            src={image}
            placeholder="blur"
            alt={`Portrait of ${name}`}
          />
          <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
            {name}
          </h2>
        </li>
      ))}
    </ul>
  </section>
);
export default MeetTheTeam;
