"use client";

import { CSSProperties, useEffect, useState } from "react";
import { shuffle } from "lodash";

import { Team } from "@/data/getTeam";

import MeetTheTeamTattooer from "./MeetTheTeamTattooer";

const MeetTheTeam = ({ team }: { team: Team }) => {
  const teamSize = team.items.length;
  const [shuffledTeam, setShuffledTeam] = useState(team.items);

  useEffect(() => setShuffledTeam(() => shuffle(team.items)), [team]);

  return (
    <section className="grid h-full grid-rows-[auto_1fr] text-primary">
      <h1
        id="meet-the-team"
        className="relative top-3 z-10 pl-4 text-4xl font-extrabold tracking-tight lg:top-8 lg:pl-8 lg:text-8xl"
      >
        MEET THE TEAM
      </h1>
      <ul
        className="grid h-full lg:grid-cols-[repeat(var(--team-size),_minmax(0,_1fr))] lg:grid-rows-1"
        style={{ "--team-size": teamSize } as CSSProperties}
      >
        {shuffledTeam.map((tattooer) => (
          <MeetTheTeamTattooer key={tattooer.fields.name} tattooer={tattooer} />
        ))}
      </ul>
    </section>
  );
};

export default MeetTheTeam;
