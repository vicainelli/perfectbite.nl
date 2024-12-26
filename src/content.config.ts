import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const flavours = defineCollection({
  loader: file("src/data/brigadeiros.json", {
    parser: (text) => JSON.parse(text).flavours,
  }),
});

const events = defineCollection({
  loader: file("src/data/events.json", {
    parser: (text) => JSON.parse(text).events,
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    location: z.string(),
    image: z.string().optional(),
    detailsUrl: z.string().optional(),
  }),
});

export const collections = { flavours, events };
