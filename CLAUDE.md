## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Mise en ligne

Le site est hébergé sur Vercel (projet `ascendia-racing`, adresse https://ascendia-racing.vercel.app).
Pour publier les dernières modifications : `vercel deploy --prod --yes` depuis ce dossier.

## Mise à jour du calendrier

Quand l'utilisateur fournit une nouvelle affiche/image de calendrier (ex. iRacing Special Events),
retranscrire les événements dans `src/data/courses.ts` en **ne gardant que les courses des catégories
NASCAR, IndyCar, GTP, LMP2, LMP3, GT3 et GT4** (liste `CATEGORIES_SUIVIES`). Ignorer toutes les autres
catégories (Supercars, Sprint Car, Dirt, FF1600, Super Formula Lights, Touring seul, etc.).
Les courses sur Dallara IR-18 s'écrivent `IndyCar (Dallara IR-18)` pour être reconnues.
Le filtre dans `courses.ts` applique aussi cette règle automatiquement.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
