import Link from "next/link";
// TODO: Replace with an icon from somewhere else
// See https://github.com/lucide-icons/lucide/issues/670
import { Instagram } from "lucide-react";

import { Tattooer } from "@/data/getTeam";

import type { CSSProperties } from "react";

type Props = {
  tattooer: Tattooer;
};

const MeetTheTeamTattooer = ({ tattooer }: Props) => {
  const { name } = tattooer.fields;
  const coverPicture = tattooer.fields.coverPicture.fields.file;
  const instagramLink = tattooer.fields.instagramLink;

  return (
    <li key={name} className="relative h-full">
      <div
        className="h-full w-full bg-[image:var(--url)] bg-cover bg-center brightness-75"
        style={{ "--url": `url(https:${coverPicture.url})` } as CSSProperties}
      />
      <h2 className="absolute bottom-0 grid grid-flow-col items-center gap-1 px-2 text-2xl font-semibold tracking-tight lg:gap-2 lg:px-4 lg:pb-2 lg:text-4xl">
        {name}
        {instagramLink && (
          <Link href={instagramLink}>
            <Instagram className="lg:h-8 lg:w-8" />
          </Link>
        )}
      </h2>
    </li>
  );
};

export default MeetTheTeamTattooer;
