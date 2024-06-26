import Link from "next/link";
import {
  Maximize2,
  // TODO: Replace with an icon from somewhere else
  // See https://github.com/lucide-icons/lucide/issues/670
  Instagram,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import TattoosCarousel from "./TattoosCarousel";

import type { CSSProperties } from "react";
import type { Tattooer } from "@/data/getTeam";

type Props = {
  tattooer: Tattooer;
};

const MeetTheTeamTattooer = ({ tattooer }: Props) => {
  const { name } = tattooer.fields;
  const coverPicture = tattooer.fields.coverPicture.fields.file;
  const tattoos = tattooer.fields.tattoos;
  const instagramLink = tattooer.fields.instagramLink;

  const column = (
    <div className={cn("relative h-full", tattoos && "group cursor-pointer")}>
      <div
        className={cn(
          "h-full w-full bg-[image:var(--url)] bg-cover bg-center brightness-75 ",
          tattoos && "transition-[filter] group-hover:brightness-50",
        )}
        style={{ "--url": `url(https:${coverPicture.url})` } as CSSProperties}
      />
      {tattoos && (
        <Maximize2
          size={64}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
      <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
        {name}
      </h2>
      {instagramLink && (
        <Link href={instagramLink}>
          <Instagram className="absolute bottom-1 right-1 lg:bottom-3 lg:right-3 lg:h-8 lg:w-8" />
        </Link>
      )}
    </div>
  );

  return (
    <li key={name}>
      {tattoos ? (
        <Dialog>
          <DialogTrigger asChild>{column}</DialogTrigger>
          <DialogContent>
            <TattoosCarousel tattoos={tattoos} />
          </DialogContent>
        </Dialog>
      ) : (
        column
      )}
    </li>
  );
};

export default MeetTheTeamTattooer;
