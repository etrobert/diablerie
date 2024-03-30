"use client";

import { useEffect, useState } from "react";
import { shuffle } from "lodash";

import { Team } from "@/data/getTeam";
import { cn } from "@/lib/utils";

import MeetTheTeamTattooer from "./MeetTheTeamTattooer";

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

const MeetTheTeam = ({ team }: { team: Team }) => {
  const teamSize = team.items.length;
  const [shuffledTeam, setShuffledTeam] = useState<Team["items"]>([]);

  useEffect(() => setShuffledTeam(() => shuffle(team.items)), [team]);

  return (
    <section className="grid gap-8 text-primary lg:gap-16">
      <h1
        id="meet-the-team"
        className="relative top-12 z-10 pl-4 text-4xl font-extrabold tracking-tight lg:top-24 lg:pl-8 lg:text-8xl"
      >
        MEET THE TEAM
      </h1>
      <ul className={cn(getGridCss(teamSize), "grid lg:grid-rows-1")}>
        {shuffledTeam.map((tattooer) => (
          <MeetTheTeamTattooer
            key={tattooer.fields.name}
            tattooer={tattooer}
            teamSize={teamSize}
          />
        ))}
      </ul>
    </section>
  );
};

export default MeetTheTeam;
