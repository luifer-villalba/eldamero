import { defineCollection, z } from 'astro:content';

const planchas = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        grado: z.enum(['Aprendiz', 'Compañero', 'Maestro']),
        tema: z.string(),
        simbolo: z.string().optional(),
        autor: z.string(),
        logia: z.string().optional(),
        valle: z.string().optional(),
    }),
});

export const collections = {
    planchas,
};