import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';
import { courses } from './resultats';

import suzukaBlaze from '../assets/palmares/suzuka-1000-blaze.webp';
import spa24Academy1 from '../assets/palmares/spa-24h-academy-1.webp';
import nurburgringBlaze from '../assets/palmares/nurburgring-24h-blaze.webp';
import monzaNebula from '../assets/palmares/monza-6h-nebula.webp';
import leMansMajorsBlaze from '../assets/palmares/le-mans-24h-majors-blaze.webp';
import indyBarbosa from '../assets/palmares/indy-500-barbosa.webp';
import daytonaAcademy1 from '../assets/palmares/daytona-24-academy-1.webp';
import daytonaAcademy2 from '../assets/palmares/daytona-24-academy-2.webp';
import daytonaComete from '../assets/palmares/daytona-24-comete.webp';
import leMansAcademy2 from '../assets/palmares/le-mans-24h-academy-2.webp';
import leMansBlaze from '../assets/palmares/le-mans-24h-blaze.webp';
import bathurstAcademy from '../assets/palmares/bathurst-12h-academy.webp';
import spa6hDark from '../assets/palmares/spa-6h-dark.webp';
import sebringComete from '../assets/palmares/sebring-12h-comete.webp';
import bahrainBarbosa from '../assets/palmares/bahrain-4h-barbosa.webp';
import barceloneBarbosa from '../assets/palmares/barcelone-2h20-barbosa.webp';

// Palmarès : les meilleurs résultats de la team (victoires et podiums), à garder sur la durée
// (contrairement à la page Résultats qui ne montre que les 3 dernières courses).
// Pour ajouter un trophée : dépose l'affiche dans src/assets/palmares/, importe-la ci-dessus,
// puis ajoute une ligne ci-dessous. La page les classe automatiquement (victoires d'abord).
// Comme sur la page Résultats : pas de numéros de voiture ; les pilotes servent au texte alternatif.

export type Jeu = 'iRacing' | 'LMU';
export type Position = number | 'DNF';

export interface Trophee {
  course: string;
  jeu: Jeu;
  equipe?: string;            // équipage Ascendia (vide pour un pilote en solo)
  position: Position;         // meilleur classement de la course
  split?: string;
  voiture?: string;
  pilotes?: [string, Pays?][]; // nom affiché sur l'affiche + pays
  // affiche avec plusieurs équipages (ex. Daytona) : un résultat par équipage
  resultats?: { equipe: string; position: Position; split?: string }[];
  annee?: number;             // année de la course (2026 par défaut si non précisée)
  affiche?: ImageMetadata;    // sans affiche : la carte affiche un visuel aux couleurs du jeu
}

const liste: Trophee[] = [
  // ---------- iRacing ----------
  { course: '24 Heures du Mans', jeu: 'iRacing', equipe: 'Blaze', position: 1, split: '8/15', annee: 2026, affiche: leMansBlaze },
  { course: 'Suzuka 1000 km', jeu: 'iRacing', equipe: 'Blaze', position: 1, split: '7/11', voiture: 'Ferrari 296 GT3', annee: 2026,
    pilotes: [['Elie Tinog', 'FR'], ['Felipe Allongue', 'BE']], affiche: suzukaBlaze },
  { course: '24 Heures de Spa', jeu: 'iRacing', equipe: 'Academy 1', position: 1,
    pilotes: [['François Lambrecq', 'FR'], ['Alain Bertschy', 'CH'], ['Damien Rivet', 'FR'], ['Felipe Allongue', 'BE']], affiche: spa24Academy1 },
  { course: '24 Heures du Nürburgring', jeu: 'iRacing', equipe: 'Blaze', position: 1, voiture: 'Aston Martin Vantage GT3', affiche: nurburgringBlaze },
  { course: '500 Miles d\'Indianapolis', jeu: 'iRacing', position: 1, voiture: 'Dallara IR-18',
    pilotes: [['Antoine Barbosa', 'FR']], affiche: indyBarbosa },
  { course: '12 Heures de Sebring', jeu: 'iRacing', equipe: 'Comète', position: 1, voiture: 'Ford Mustang GT3',
    pilotes: [['Damien Wuilmus', 'BE'], ['Ulrich Jacoby', 'BE'], ['Yohan Van den Bosch', 'BE']], affiche: sebringComete },
  // Daytona : une affiche par équipage (positions reprises des affiches)
  { course: '24 Heures de Daytona', jeu: 'iRacing', equipe: 'Academy 1', position: 2, voiture: 'Dallara P217 (LMP2)', affiche: daytonaAcademy1 },
  { course: '24 Heures de Daytona', jeu: 'iRacing', equipe: 'Comète', position: 3, split: '28', voiture: 'Aston Martin Vantage GT3', affiche: daytonaComete },
  { course: '24 Heures de Daytona', jeu: 'iRacing', equipe: 'Academy 2', position: 3, voiture: 'Porsche 911 GT3 R', affiche: daytonaAcademy2 },
  { course: '24 Heures du Mans', jeu: 'iRacing', equipe: 'Academy 2', position: 3, split: '13/15', annee: 2026, affiche: leMansAcademy2 },
  { course: '12 Heures de Bathurst', jeu: 'iRacing', equipe: 'Academy 1', position: 3, split: '22', voiture: 'Porsche 992 GT3',
    pilotes: [['Damien Wuilmus', 'BE'], ['Lukas Da Rocha', 'FR'], ['Killian Marie', 'FR']], affiche: bathurstAcademy },
  { course: '24 Heures du Mans — Majors Series', jeu: 'iRacing', equipe: 'Blaze', position: 3, split: '12', voiture: 'Porsche 911 GT3 R',
    pilotes: [['François Lambrecq', 'FR'], ['Christopher Salingros', 'BE'], ['Jérémy Gorré', 'FR'], ['Christophe Vannobel', 'FR'], ['Joseph Assez', 'BE']],
    affiche: leMansMajorsBlaze },
  { course: '6 Heures de Spa-Francorchamps', jeu: 'iRacing', equipe: 'Dark', position: 3, split: '5/11',
    pilotes: [['Thomas Doyen', 'BE'], ['Elie Tinog', 'FR']], affiche: spa6hDark },
  { course: '24 Heures de Fuji', jeu: 'iRacing', equipe: 'Alpha', position: 1, annee: 2025 },

  // ---------- Le Mans Ultimate ----------
  { course: '6 Heures de Fuji', jeu: 'LMU', position: 1, annee: 2025,
    resultats: [
      { equipe: 'Galaxy', position: 1 },
      { equipe: 'Eclipse', position: 3 },
      { equipe: 'Nebula', position: 3 },
    ] },
  { course: 'ELMS Silverstone', jeu: 'LMU', equipe: 'Galaxy', position: 2, voiture: 'LMP3', annee: 2025 },
  { course: '4 Heures de Bahreïn', jeu: 'LMU', position: 2, voiture: 'Porsche 911 GT3 R (LMGT3)',
    pilotes: [['Antoine Barbosa', 'FR']], affiche: bahrainBarbosa },
  { course: '6 Heures de Monza', jeu: 'LMU', equipe: 'Nebula', position: 3, affiche: monzaNebula },
  { course: '2h20 de Barcelone', jeu: 'LMU', position: 3, voiture: 'Ferrari 499P',
    pilotes: [['Antoine Barbosa', 'FR']], affiche: barceloneBarbosa },
];

// ---------- Podiums repris automatiquement de la page Résultats ----------
// Tout équipage classé P1, P2 ou P3 dans src/data/resultats.ts apparaît ici sans rien faire.
// Une course déjà présente dans la liste ci-dessus (même course + même équipage) n'est pas doublée.
const cle = (course: string, equipe?: string) =>
  `${course}|${equipe ?? ''}`.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9|]/g, '');
const dejaLa = new Set(liste.map((t) => cle(t.course, t.equipe ?? t.pilotes?.[0]?.[0])));

const depuisResultats: Trophee[] = courses.flatMap((c) =>
  c.equipages
    .filter((e) => typeof e.position === 'number' && e.position <= 3)
    .map((e): Trophee => ({
      course: c.nom,
      jeu: c.jeu ?? 'iRacing',
      equipe: e.equipe || undefined,
      position: e.position,
      split: e.split,
      voiture: e.voiture,
      annee: Number(c.debut.slice(0, 4)),
      pilotes: e.pilotes?.map((p): [string, Pays?] => [p.nom, p.pays]),
      affiche: e.affiche,
    }))
    .filter((t) => !dejaLa.has(cle(t.course, t.equipe ?? t.pilotes?.[0]?.[0]))),
);

// année par défaut : une course dont l'affiche ne précise pas l'année compte pour 2026
export const trophees: Trophee[] = [...liste, ...depuisResultats].map((t) => ({ annee: 2026, ...t }));
