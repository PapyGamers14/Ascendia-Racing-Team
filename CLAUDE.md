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

## Membres et portraits (page Team)

Les membres sont dans `src/data/team.ts` (groupe, rôle, pays). Le drapeau du `pays` est posé
automatiquement en fond de chaque portrait par `src/components/PortraitDrapeau.astro` (pas de petit
drapeau à côté du nom). Pays disponibles dans `src/data/pays.ts` (ajouter une ligne pour un nouveau pays).

Pour un nouveau portrait ou un portrait modifié :
1. le copier dans `src/assets/team/originaux/` nommé `prenom-nom.webp` (sans accents, en minuscules) ;
2. lancer `npm run portraits` (détoure automatiquement vers `src/assets/team/detoures/`) ;
3. rien d'autre : la page retrouve le portrait par le nom. Sans portrait → avatar casqué (`detoures/avatar.webp`).

## Mise à jour des résultats

Les résultats ne sont PAS récupérés automatiquement depuis Instagram (choix de l'utilisateur) :
l'utilisateur partage directement les affiches de résultats. Pour chacune :
- copier l'affiche dans `src/assets/resultats/` (nom : `course-equipage.webp`) ;
- l'ajouter dans `src/data/resultats.ts`, dans la course concernée (ou créer la course) :
  équipage, position, split, voiture, catégorie, pilotes + pays si l'affiche les nomme ;
- ne garder que les **3 dernières courses** : quand une nouvelle course est ajoutée, supprimer
  la plus ancienne de `resultats.ts` ET ses affiches dans `src/assets/resultats/`
  (la page coupe aussi automatiquement à 3 courses, constante `NB_COURSES`) ;
- course en **solo** (pas d'équipage sur l'affiche) : laisser `equipe` vide et mettre le pilote
  dans `pilotes` (il sert alors de titre de carte, avec son drapeau) ; abandon : `position: 'DNF'` ;
  mention type « Course de consolation » : champ `note` de la course ;
- ne PAS saisir les numéros de voiture (fictifs) ; les noms des pilotes ne sont pas affichés
  sur la carte (déjà sur l'affiche) mais restent dans les données pour le texte alternatif.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
