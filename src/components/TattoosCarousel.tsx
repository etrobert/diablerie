import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { Tattooer } from "@/data/getTeam";

type Props = {
  tattoos: NonNullable<Tattooer["fields"]["tattoos"]>;
};

const TattoosCarousel = ({ tattoos }: Props) => (
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
);

export default TattoosCarousel;
