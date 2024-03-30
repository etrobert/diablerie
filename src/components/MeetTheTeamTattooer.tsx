import Image from "next/image";
import { Tattooer } from "@/data/getTeam";
import { cn } from "@/lib/utils";

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

type Props = {
  tattooer: Tattooer;
  teamSize: number;
};

const MeetTheTeamTattooer = ({ tattooer, teamSize }: Props) => {
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
};

export default MeetTheTeamTattooer;
