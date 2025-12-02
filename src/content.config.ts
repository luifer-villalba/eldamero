import { defineCollection, z } from 'astro:content';

const planchasCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        grado: z.string(),
        tema: z.string(),
        simbolo: z.string().optional(),
        autor: z.string(),
        logia: z.string().optional(),
        valle: z.string().optional(),
        orden: z.number(),
        tags: z.array(z.string()).default([])
    })
});

export const collections = {
    planchas: planchasCollection
};