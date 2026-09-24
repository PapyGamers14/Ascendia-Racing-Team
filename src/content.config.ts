import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Chaque pilote = un fichier .md dans src/content/pilotes/
const pilotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pilotes' }),
  schema: z.object({
    pseudo: z.string(),
    nom: z.string(),
    numero: z.number(),
    pays: z.string(),                       // code pays, ex. "FR"
    role: z.string().default('Pilote'),
    jeux: z.array(z.enum(['iRacing', 'LMU'])),
    categorie: z.string(),                  // ex. "GT3", "Hypercar"
    irating: z.number().optional(),         // iRacing uniquement
    licence: z.string().optional(),         // ex. "A 3.87"
    lmuRating: z.string().optional(),       // ex. "Gold / SR A"
    ordre: z.number().default(99),          // ordre d'affichage
  }),
});

export const collections = { pilotes };
