import Image from "next/image";
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

const MeetTheTeam = async () => {
  const team = await getTeam();
  return (
    <section className="grid gap-8 text-primary lg:gap-16">
      <h1
        id="meet-the-team"
        className="relative top-12 z-10 pl-4 text-4xl font-extrabold tracking-tight lg:top-24 lg:pl-8 lg:text-8xl"
      >
        MEET THE TEAM
      </h1>
      <ul className="grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1">
        {team.items.map(({ fields: { name, coverPicture } }) => (
          <li key={name} className="relative">
            <Image
              className="h-[24vh] w-full object-cover brightness-75 lg:h-[90vh]"
              src={"https:" + coverPicture.fields.file?.url}
              width={coverPicture.fields.file?.details.image.width}
              height={coverPicture.fields.file?.details.image.height}
              alt={`Portrait of ${name}`}
            />
            <h2 className="absolute bottom-0 px-2 text-2xl font-semibold tracking-tight lg:px-4 lg:pb-2 lg:text-4xl">
              {name}
            </h2>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MeetTheTeam;
