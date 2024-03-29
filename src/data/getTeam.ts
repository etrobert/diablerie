import { z } from "zod";
import { createClient } from "contentful";

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

const tattoerSchema = z.object({
  fields: z.object({
    name: z.string(),
    coverPicture: contentfulImageSchema,
  }),
});

const teamSchema = z.object({ items: z.array(tattoerSchema) });

async function getTeam() {
  const client = createClient({
    space: "dqw11eartujo",
    environment: "master", // defaults to 'master' if not set
    accessToken: "Akp9d9MHCppcxCzN6AF4F07fQQxJE2Iridd1xeh_ALE",
  });

  const entries = await client.getEntries();
  return teamSchema.parse(entries);
}

export default getTeam;
