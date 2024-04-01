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

type DialogProps = {
  tattoos: NonNullable<Tattooer["fields"]["tattoos"]>;
};

const DialogDemo = ({ tattoos }: DialogProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        variant="outline"
      >
        Tattoos
      </Button>
    </DialogTrigger>
    <DialogContent>
      <Carousel>
        <CarouselContent>
          {tattoos.map((tattoo) => {
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

type Props = {
  tattooer: Tattooer;
};

const MeetTheTeamTattooer = ({ tattooer }: Props) => {
  const { name } = tattooer.fields;
  const coverPicture = tattooer.fields.coverPicture.fields.file;
  const tattoos = tattooer.fields.tattoos;

  return (
    <li key={name} className="relative h-full">
      <div
        className="h-full w-full bg-[image:var(--url)] bg-cover bg-center brightness-75"
        style={{ "--url": `url(https:${coverPicture.url})` } as CSSProperties}
      >
        {tattoos && <DialogDemo tattoos={tattoos} />}
      </div>
      <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
        {name}
      </h2>
    </li>
  );
};

export default MeetTheTeamTattooer;
