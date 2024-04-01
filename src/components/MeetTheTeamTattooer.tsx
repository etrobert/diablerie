import { CSSProperties } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Tattooer } from "@/data/getTeam";

type Props = {
  tattooer: Tattooer;
};

const DialogDemo = ({ tattooer }: Props) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Tattoos</Button>
    </DialogTrigger>
    <DialogContent>
      <Carousel>
        <CarouselContent>
          {tattooer.fields.tattoos?.map((tattoo) => {
            const { file, description } = tattoo.fields;
            const { width, height } = file.details.image;
            const url = "https:" + file.url;
            return (
              <CarouselItem key={url}>
                <Image
                  key={url}
                  src={url}
                  width={width}
                  height={height}
                  alt={description}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </DialogContent>
  </Dialog>
);

const MeetTheTeamTattooer = ({ tattooer }: Props) => {
  const { name } = tattooer.fields;
  const coverPicture = tattooer.fields.coverPicture.fields.file;

  return (
    <li key={name} className="relative h-full">
      <div
        className="h-full w-full bg-[image:var(--url)] bg-cover bg-center brightness-75"
        style={{ "--url": `url(https:${coverPicture.url})` } as CSSProperties}
      >
        <DialogDemo tattooer={tattooer} />
      </div>
      <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
        {name}
      </h2>
    </li>
  );
};

export default MeetTheTeamTattooer;
