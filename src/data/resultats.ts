import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';

import indyComete from '../assets/resultats/indy-8h-comete.webp';
import indyAstra from '../assets/resultats/indy-8h-astra.webp';
import indyBlaze from '../assets/resultats/indy-8h-blaze.webp';
import indyDark from '../assets/resultats/indy-8h-dark.webp';
import indyAcademy1 from '../assets/resultats/indy-8h-academy-1.webp';
import indyAcademy2 from '../assets/resultats/indy-8h-academy-2.webp';
import bullringBaligant from '../assets/resultats/ifrn-bullring-baligant.webp';
import bullringBarbosa from '../assets/resultats/ifrn-bullring-barbosa.webp';
import bullringWuilmus from '../assets/resultats/ifrn-bullring-wuilmus.webp';
import fujiGalaxy from '../assets/resultats/fuji-6h-galaxy.webp';
import fujiAcademy1 from '../assets/resultats/fuji-6h-academy-1.webp';
import fujiEclipse from '../assets/resultats/fuji-6h-eclipse.webp';

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
  note?: string;         // mention propre à cette carte, ex. « Course de consolation »
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
    nom: "8 Heures d'Indianapolis", serie: 'iRacing Special Event', debut: '2026-10-16', fin: '2026-10-18', circuit: 'Indianapolis Motor Speedway',
    equipages: [
      { equipe: 'Dark', position: 5, split: '5/6', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: indyDark,
        pilotes: [{ nom: 'François Lambrecq', pays: 'FR' }, { nom: 'Alain Bertschy', pays: 'CH' }] },
      { equipe: 'Astra', position: 7, split: '4/6', voiture: 'Chevrolet Corvette Z06 GT3.R', categorie: 'GT3', affiche: indyAstra,
        pilotes: [{ nom: 'Antoine Barbosa', pays: 'FR' }, { nom: 'Nicolas Rumen', pays: 'FR' }] },
      { equipe: 'Academy 2', position: 24, split: '6/6', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: indyAcademy2,
        pilotes: [{ nom: 'Vincent Coomans', pays: 'BE' }, { nom: 'François Mahé', pays: 'FR' }] },
      { equipe: 'Academy 1', position: 31, split: '5/6', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: indyAcademy1,
        pilotes: [{ nom: 'Bruno Marchica', pays: 'BE' }, { nom: 'Michaël Wieczorek', pays: 'FR' }] },
      { equipe: 'Blaze', position: 34, split: '2/6', voiture: 'Ferrari 296 GT3', categorie: 'GT3', affiche: indyBlaze,
        pilotes: [{ nom: 'Christophe Vannobel', pays: 'FR' }, { nom: 'Eddy Velez', pays: 'FR' }] },
      { equipe: 'Comète', position: 'DNF', voiture: 'Porsche 911 GT3 R (992)', categorie: 'GT3', affiche: indyComete,
        pilotes: [{ nom: 'Damien Wuilmus', pays: 'BE' }, { nom: 'Thomas Doyen', pays: 'BE' }] },
    ],
  },
  {
    nom: 'I-FRN · Bullring', serie: 'Rookie Series · Fall 2026', debut: '2026-10-08', fin: '2026-10-08', circuit: 'Las Vegas Bullring',
    equipages: [
      { position: 3, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: bullringBaligant, note: 'Course principale',
        pilotes: [{ nom: 'François Baligant', pays: 'BE' }] },
      { position: 5, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: bullringBarbosa, note: 'Course principale',
        pilotes: [{ nom: 'Antoine Barbosa', pays: 'FR' }] },
      { position: 6, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: bullringWuilmus, note: 'Course de consolation',
        pilotes: [{ nom: 'Damien Wuilmus', pays: 'BE' }] },
    ],
  },
  {
    nom: '6 Heures de Fuji', jeu: 'LMU', serie: 'Le Mans Ultimate', debut: '2026-10-03', fin: '2026-10-03', circuit: 'Fuji Speedway',
    equipages: [
      { equipe: 'Galaxy', position: 2, split: '7/11', voiture: 'Hypercar', categorie: 'Hypercar', affiche: fujiGalaxy,
        pilotes: [{ nom: 'Antoine Barbosa', pays: 'FR' }, { nom: 'Nicolas Rigobert', pays: 'FR' }] },
      { equipe: 'Academy 1', position: 3, split: '6/11', voiture: 'McLaren 720S GT3 Evo', categorie: 'LMGT3', affiche: fujiAcademy1,
        pilotes: [{ nom: 'Vivien Pochon', pays: 'FR' }, { nom: 'Matys Dumange', pays: 'FR' }, { nom: 'Kevin Souyri', pays: 'FR' }] },
      { equipe: 'Eclipse', position: 7, split: '6/11', voiture: 'Hypercar', categorie: 'Hypercar', affiche: fujiEclipse,
        pilotes: [{ nom: 'Mickael Nakazuma', pays: 'BE' }, { nom: 'Yohan Van den Bosch', pays: 'BE' }] },
    ],
  },
];
