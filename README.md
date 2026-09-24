# Ascendia Racing Team — site vitrine

Site Astro de la team de simracing (iRacing / Le Mans Ultimate).

## Lancer le site sur ton PC

```
npm run dev
```
Puis ouvre http://localhost:4321

## Où modifier quoi

| Je veux changer…                     | Fichier                                   |
|--------------------------------------|-------------------------------------------|
| Les couleurs de la team              | `src/styles/global.css` (`--accent`, `--accent-2`) |
| Le logo                              | `src/assets/logo/` (+ `public/favicon.png`) |
| Sponsors                             | `src/data/sponsors.ts` (logos dans `src/assets/sponsors/`) |
| Les liens Facebook / Instagram / TikTok / X | `src/components/Social.astro`      |
| Ajouter / modifier un pilote         | un fichier `.md` dans `src/content/pilotes/` |
| Calendrier des courses               | `src/data/courses.ts`                     |
| Textes de la page d'accueil          | `src/pages/index.astro`                   |

## Pages

- `/` accueil · `/calendrier`
