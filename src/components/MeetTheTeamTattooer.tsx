import type { CSSProperties } from "react";
import { Maximize2 } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import TattoosCarousel from "./TattoosCarousel";

import type { Tattooer } from "@/data/getTeam";

type Props = {
  tattooer: Tattooer;
};

const MeetTheTeamTattooer = ({ tattooer }: Props) => {
  const { name } = tattooer.fields;
  const coverPicture = tattooer.fields.coverPicture.fields.file;
  const tattoos = tattooer.fields.tattoos;

  return (
    <li key={name}>
      <Dialog>
        <DialogTrigger asChild>
          <div className="group relative h-full cursor-pointer">
            <div
              className="h-full w-full bg-[image:var(--url)] bg-cover bg-center brightness-75 transition-[filter] group-hover:brightness-50"
              style={
                { "--url": `url(https:${coverPicture.url})` } as CSSProperties
              }
            />
            <Maximize2
              size={64}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
            />
            <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
              {name}
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          {tattoos && <TattoosCarousel tattoos={tattoos} />}
        </DialogContent>
      </Dialog>
    </li>
  );
};

export default MeetTheTeamTattooer;
