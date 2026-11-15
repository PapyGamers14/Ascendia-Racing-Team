import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';

import indyComete from '../assets/resultats/indy-8h-comete.webp';
import indyAstra from '../assets/resultats/indy-8h-astra.webp';
import indyBlaze from '../assets/resultats/indy-8h-blaze.webp';
import indyDark from '../assets/resultats/indy-8h-dark.webp';
import indyAcademy1 from '../assets/resultats/indy-8h-academy-1.webp';
import indyAcademy2 from '../assets/resultats/indy-8h-academy-2.webp';
import leMansAcademy1 from '../assets/resultats/le-mans-24h-academy-1-lmu.png';
import leMansGalaxy from '../assets/resultats/le-mans-24h-galaxy-lmu.png';
import oxfordBaligant from '../assets/resultats/oxford-baligant.png';
import oxfordWuilmus from '../assets/resultats/oxford-wuilmus.png';
import oxfordRumen from '../assets/resultats/oxford-rumen.png';
import vlnBaligant from '../assets/resultats/vln-baligant.png';
import vlnWuilmus from '../assets/resultats/vln-wuilmus.png';
import vlnBertschy from '../assets/resultats/vln-bertschy.png';
import vlnLambrecq from '../assets/resultats/vln-lambrecq.png';
import bahrainEclipse from '../assets/resultats/bahrain-eclipse.png';
import bahrainAcademy3 from '../assets/resultats/bahrain-academy-3.png';

// Résultats de la team, regroupés par course (de la plus récente à la plus ancienne).
// La page Résultats affiche les 3 dernières courses ; les entrées plus anciennes restent
// ici pour conserver l'historique et alimenter les podiums du Palmarès.
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
    nom: '8 Heures de Bahreïn', jeu: 'LMU', serie: 'Le Mans Ultimate', debut: '2026-11-14', fin: '2026-11-14', circuit: 'Bahrain International Circuit',
    equipages: [
      { equipe: 'Academy 3', position: 1, split: '3/9', voiture: 'Hypercar', categorie: 'Hypercar', affiche: bahrainAcademy3,
        pilotes: [{ nom: 'Antoine Barbosa', pays: 'FR' }] },
      { equipe: 'Eclipse', position: 14, split: '4/9', voiture: 'Mercedes-AMG GT3', categorie: 'LMGT3', affiche: bahrainEclipse,
        pilotes: [{ nom: 'Eric Legrand', pays: 'FR' }, { nom: 'Mickael Nakazuma', pays: 'BE' }] },
    ],
  },
  {
    nom: '4 Heures de la VLN', debut: '2026-11-07', fin: '2026-11-08', circuit: 'Nürburgring Nordschleife',
    equipages: [
      { position: 2, split: '11/15', voiture: 'Mercedes-AMG GT3', categorie: 'GT3', affiche: vlnWuilmus,
        pilotes: [{ nom: 'Damien Wuilmus', pays: 'BE' }] },
      { position: 6, split: '9/15', voiture: 'Aston Martin Vantage GT3', categorie: 'GT3', affiche: vlnLambrecq,
        pilotes: [{ nom: 'François Lambrecq', pays: 'FR' }] },
      { position: 'DNF', split: '6/15', voiture: 'Mercedes-AMG GT3', categorie: 'GT3', affiche: vlnBaligant,
        pilotes: [{ nom: 'François Baligant', pays: 'BE' }] },
      { position: 'DNF', split: '12/20', voiture: 'Aston Martin Vantage GT3', categorie: 'GT3', affiche: vlnBertschy,
        pilotes: [{ nom: 'Alain Bertschy', pays: 'CH' }] },
    ],
  },
  {
    nom: '24 Heures du Mans', jeu: 'LMU', serie: 'Le Mans Ultimate', debut: '2026-10-24', fin: '2026-10-25', circuit: 'Circuit de la Sarthe',
    equipages: [
      { equipe: 'Academy 1', position: 15, split: '9/34', voiture: 'Lexus RC F GT3', categorie: 'LMGT3', affiche: leMansAcademy1,
        pilotes: [{ nom: 'Vivien Pochon', pays: 'FR' }, { nom: 'Kévin Souyri', pays: 'FR' }, { nom: 'Mickaël Nakazuma', pays: 'BE' }] },
      { equipe: 'Galaxy', position: 6, split: '14/34', voiture: 'Hypercar', categorie: 'Hypercar', affiche: leMansGalaxy,
        pilotes: [{ nom: 'Antoine Barbosa', pays: 'FR' }, { nom: 'Nicolas Rigobert', pays: 'FR' }, { nom: 'Jules Castro', pays: 'FR' }, { nom: 'Yohan Van den Bosch', pays: 'BE' }] },
    ],
  },
  {
    nom: 'I-FRN · Oxford Speedway', serie: 'Rookie Series · Fall 2026', debut: '2026-10-22', fin: '2026-10-22', circuit: 'Oxford Speedway',
    equipages: [
      { position: 15, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: oxfordWuilmus, note: 'Course principale',
        pilotes: [{ nom: 'Damien Wuilmus', pays: 'BE' }] },
      { position: 16, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: oxfordRumen, note: 'Course principale',
        pilotes: [{ nom: 'Nicolas Rumen', pays: 'FR' }] },
      { position: 17, voiture: 'Ford Mustang NASCAR', categorie: 'NASCAR', affiche: oxfordBaligant, note: 'Course principale',
        pilotes: [{ nom: 'François Baligant', pays: 'BE' }] },
    ],
  },
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
];
