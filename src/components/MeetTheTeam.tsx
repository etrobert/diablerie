import Image from "next/image";
import getTeam from "@/data/getTeam";

import { cn } from "@/lib/utils";

const getGridCss = (teamSize: number) => {
  switch (teamSize) {
    case 1:
      return "grid-rows-1 lg:grid-cols-1";
    case 2:
      return "grid-rows-2 lg:grid-cols-2";
    case 3:
      return "grid-rows-3 lg:grid-cols-3";
    case 4:
      return "grid-rows-4 lg:grid-cols-4";
    default:
      throw new Error("Unsupported team size");
  }
};

const getImgCss = (teamSize: number) => {
  switch (teamSize) {
    case 2:
      return "h-[48vh]";
    case 3:
      return "h-[32vh]";
    case 4:
      return "h-[24vh]";
    default:
      throw new Error("Unsupported team size");
  }
};

const MeetTheTeam = async () => {
  const team = await getTeam();
  const teamSize = team.items.length;

  return (
    <section className="grid gap-8 text-primary lg:gap-16">
      <h1
        id="meet-the-team"
        className="relative top-12 z-10 pl-4 text-4xl font-extrabold tracking-tight lg:top-24 lg:pl-8 lg:text-8xl"
      >
        MEET THE TEAM
      </h1>
      <ul className={cn(getGridCss(teamSize), "grid lg:grid-rows-1")}>
        {team.items.map((tattooer) => {
          const { name } = tattooer.fields;
          const coverPicture = tattooer.fields.coverPicture.fields.file;

          return (
            <li key={name} className="relative">
              <Image
                className={cn(
                  getImgCss(teamSize),
                  "w-full object-cover brightness-75 lg:h-[90vh]",
                )}
                src={"https:" + coverPicture.url}
                width={coverPicture.details.image.width}
                height={coverPicture.details.image.height}
                alt={`Portrait of ${name}`}
              />
              <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
                {name}
              </h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MeetTheTeam;
