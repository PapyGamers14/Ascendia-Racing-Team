import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';

import ifrnWuilmus from '../assets/resultats/ifrn-chicagoland-wuilmus.webp';
import ifrnBaligant from '../assets/resultats/ifrn-chicagoland-baligant.webp';
import plmDark from '../assets/resultats/petit-le-mans-dark.webp';
import plmAcademy1 from '../assets/resultats/petit-le-mans-academy-1.webp';
import plmAstra from '../assets/resultats/petit-le-mans-astra.webp';
import plmComete from '../assets/resultats/petit-le-mans-comete.webp';
import plmBlaze from '../assets/resultats/petit-le-mans-blaze.webp';
import suzukaBlaze from '../assets/resultats/suzuka-1000-blaze.webp';
import suzukaAstra from '../assets/resultats/suzuka-1000-astra.webp';
import suzukaComete from '../assets/resultats/suzuka-1000-comete.webp';

// Résultats de la team, regroupés par course (de la plus récente à la plus ancienne).
// Seules les 3 dernières courses sont affichées : quand une nouvelle course arrive,
// supprimer la plus ancienne ici ET son/ses affiche(s) dans src/assets/resultats/.
// Pour ajouter un résultat : dépose l'affiche dans src/assets/resultats/,
// importe-la ci-dessus puis ajoute un équipage dans la bonne course (ou une nouvelle course).

export interface Pilote { nom: string; pays?: Pays }

export interface Equipage {
  equipe?: string;       // nom de l'équipage Ascendia : Astra, Blaze… (vide pour une course en solo)
  position: number | 'DNF'; // classement final, ou 'DNF' en cas d'abandon
  split?: string;        // split iRacing, ex. "8/15"
  voiture: string;
  categorie: string;     // GTP, GT3, NASCAR…
  pilotes?: Pilote[];    // facultatif si l'affiche ne les nomme pas ; en solo, le pilote sert de titre
  affiche: ImageMetadata;
}

export interface Course {
  nom: string;
  jeu?: 'iRacing' | 'LMU'; // iRacing par défaut (sert au palmarès)
  serie?: string;        // ex. "Global Endurance Series"
  note?: string;         // ex. "Course de consolation"
  debut: string;         // AAAA-MM-JJ
  fin: string;
  circuit: string;
  equipages: Equipage[];
}

export const courses: Course[] = [
  {
    nom: 'Petit Le Mans', serie: 'iRacing Special Event', debut: '2026-09-25', fin: '2026-09-27', circuit: 'Michelin Raceway Road Atlanta',
    equipages: [
      { equipe: 'Dark', position: 2, split: '20/23', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: plmDark,
        pilotes: [{ nom: 'François Lambrecq', pays: 'FR' }, { nom: 'Jérôme Zaracki', pays: 'FR' }, { nom: 'Alain Bertschy', pays: 'CH' }] },
      { equipe: 'Academy 1', position: 7, split: '8/9', voiture: 'Porsche 911 GT3 R (992)', categorie: 'GT3', affiche: plmAcademy1,
        pilotes: [{ nom: 'Damien Wuilmus', pays: 'BE' }, { nom: 'Bruno Marchica', pays: 'BE' }] },
      { equipe: 'Astra', position: 8, split: '3/10', voiture: 'Aston Martin Valkyrie', categorie: 'GTP', affiche: plmAstra,
        pilotes: [{ nom: 'Mickael Scherdel', pays: 'FR' }, { nom: 'Julien Castro', pays: 'FR' }, { nom: 'Jules Castro', pays: 'FR' }] },
      { equipe: 'Comète', position: 'DNF', split: '10/23', voiture: 'McLaren 720S GT3', categorie: 'GT3', affiche: plmComete,
        pilotes: [{ nom: 'Michel Tonnon', pays: 'BE' }, { nom: 'Elie Tinog', pays: 'FR' }, { nom: 'Otch Massari', pays: 'MA' }] },
      { equipe: 'Blaze', position: 'DNF', split: '7/9', voiture: 'Aston Martin Valkyrie', categorie: 'GTP', affiche: plmBlaze,
        pilotes: [{ nom: 'Antoine Barbosa', pays: 'FR' }, { nom: 'Mathéo Manaranche', pays: 'FR' }, { nom: 'Lukas Da Rocha', pays: 'FR' }] },
    ],
  },
  {
    nom: 'I-FRN · Chicagoland', serie: 'Rookie Series · Fall 2026', note: 'Course de consolation',
    debut: '2026-09-17', fin: '2026-09-17', circuit: 'Chicagoland Speedway',
    equipages: [
      { position: 4, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: ifrnWuilmus,
        pilotes: [{ nom: 'Damien Wuilmus', pays: 'BE' }] },
      { position: 'DNF', voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: ifrnBaligant,
        pilotes: [{ nom: 'François Baligant', pays: 'BE' }] },
    ],
  },
  {
    nom: 'Suzuka 1000km', serie: 'iRacing Special Event', debut: '2026-09-10', fin: '2026-09-15', circuit: 'Suzuka Circuit',
    equipages: [
      { equipe: 'Blaze', position: 1, split: '7/11', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: suzukaBlaze,
        pilotes: [{ nom: 'Elie Tinog', pays: 'FR' }, { nom: 'Felipe Allongue', pays: 'BE' }] },
      { equipe: 'Astra', position: 6, split: '6/8', voiture: 'Ford Mustang GT3', categorie: 'GT3', affiche: suzukaAstra,
        pilotes: [{ nom: 'François Baligant', pays: 'BE' }, { nom: 'Damien Wuilmus', pays: 'BE' }] },
      { equipe: 'Comète', position: 30, split: '5/8', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: suzukaComete,
        pilotes: [{ nom: 'Alexis Darsy', pays: 'FR' }, { nom: 'Eddy Velez', pays: 'FR' }] },
    ],
  },
];
