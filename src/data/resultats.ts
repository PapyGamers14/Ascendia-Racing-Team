import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';

import ifrnWuilmus from '../assets/resultats/ifrn-chicagoland-wuilmus.webp';
import ifrnBaligant from '../assets/resultats/ifrn-chicagoland-baligant.webp';
import leMansAstra from '../assets/resultats/le-mans-24h-astra.webp';
import leMansAcademy2 from '../assets/resultats/le-mans-24h-academy-2.webp';
import leMansBlaze from '../assets/resultats/le-mans-24h-blaze.webp';
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
  serie?: string;        // ex. "Global Endurance Series"
  note?: string;         // ex. "Course de consolation"
  debut: string;         // AAAA-MM-JJ
  fin: string;
  circuit: string;
  equipages: Equipage[];
}

export const courses: Course[] = [
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
  {
    nom: '24 Heures du Mans', serie: 'iRacing', debut: '2026-09-05', fin: '2026-09-06', circuit: 'Circuit des 24 Heures du Mans',
    equipages: [
      { equipe: 'Blaze', position: 1, split: '8/15', voiture: 'Porsche 963 GTP', categorie: 'GTP', affiche: leMansBlaze },
      { equipe: 'Academy 2', position: 3, split: '13/15', voiture: 'Porsche 963 GTP', categorie: 'GTP', affiche: leMansAcademy2 },
      { equipe: 'Astra', position: 11, split: '4/15', voiture: 'McLaren 720S GT3', categorie: 'GT3', affiche: leMansAstra },
    ],
  },
];
