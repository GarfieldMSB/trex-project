import { defineCollection, z } from "astro:content";

const services = defineCollection({
    schema: z.object({
        title: z.string(),
        projects: z.string(),
        icon: z.string(),
        description: z.string()
    })
})

export const collections = { services };