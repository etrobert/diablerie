import { z } from "zod";
import { createClient } from "contentful";
import shuffle from "lodash/shuffle";

const contentfulImageSchema = z.object({
  fields: z.object({
    file: z.object({
      url: z.string(),
      details: z.object({
        image: z.object({
          width: z.number().positive().int(),
          height: z.number().positive().int(),
        }),
      }),
    }),
  }),
});

const tattooerSchema = z.object({
  fields: z.object({
    name: z.string(),
    coverPicture: contentfulImageSchema,
  }),
});

const teamSchema = z.object({ items: z.array(tattooerSchema) });

async function getTeam() {
  const client = createClient({
    space: "dqw11eartujo",
    environment: "master", // defaults to 'master' if not set
    accessToken: "Akp9d9MHCppcxCzN6AF4F07fQQxJE2Iridd1xeh_ALE",
  });

  const entries = await client.getEntries();
  const team = teamSchema.parse(entries);
  team.items = shuffle(team.items);
  return team;
}

export default getTeam;
