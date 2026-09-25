import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';

// Membres de la team (source : tableau site-pilote.xlsx, mis à jour le 25/09/2026).
// Pour ajouter quelqu'un : ajoute une ligne dans son groupe (avec son `pays`).
//
// PORTRAITS — entièrement automatiques :
// 1. dépose le portrait d'origine dans src/assets/team/originaux/ en le nommant prenom-nom.webp
//    (sans accents, ex. matheo-manaranche.webp) ;
// 2. lance `npm run portraits` : il est détouré dans src/assets/team/detoures/ ;
// 3. c'est tout : la page le retrouve par le nom et pose le drapeau du pays derrière.
// Sans portrait, le membre reçoit l'avatar casqué Ascendia, lui aussi devant son drapeau.
// Dans chaque groupe (hors fondateurs et administrateurs), ordre alphabétique du nom.

export type Groupe = 'fondateur' | 'admin' | 'staff' | 'competition' | 'academie' | 'club';

export interface Membre {
  prenom?: string;       // vide pour un membre présenté par son pseudo
  nom: string;           // nom de famille ou pseudo
  groupe: Groupe;        // section de la page où il apparaît
  role: string;          // fonction dans la team
  pilote?: boolean;      // true = pilote en plus de son rôle (fondateur, staff)
  jeux: string[];
  pays?: Pays;           // drapeau en fond du portrait : 'BE', 'FR', 'CH', 'MA', 'IL'…
}

export const groupes: { id: Groupe; titre: string; accent: string; kicker: string }[] = [
  { id: 'fondateur', titre: 'Les ', accent: 'fondateurs', kicker: "À l'origine d'Ascendia" },
  { id: 'admin', titre: 'Les ', accent: 'administrateurs', kicker: "L'association" },
  { id: 'staff', titre: 'Le ', accent: 'staff', kicker: 'Dans les coulisses' },
  { id: 'competition', titre: 'Pilotes ', accent: 'compétition', kicker: 'Le line-up' },
  { id: 'academie', titre: 'Pilotes ', accent: 'Academy', kicker: 'La relève' },
  { id: 'club', titre: 'Pilotes ', accent: 'du club', kicker: 'La communauté' },
];

/** Groupes présentés en grandes fiches côte à côte (les autres en grille de cartes) */
export const GRANDES_FICHES: Groupe[] = ['fondateur', 'admin'];

// tous les portraits détourés, chargés automatiquement (nom de fichier = prenom-nom)
const detoures = import.meta.glob<{ default: ImageMetadata }>('../assets/team/detoures/*.{webp,png}', { eager: true });
const portraitParFichier = (fichier: string) =>
  (detoures[`../assets/team/detoures/${fichier}.webp`] ?? detoures[`../assets/team/detoures/${fichier}.png`])?.default;

/** "Mathéo Manaranche" → "matheo-manaranche" (nom attendu du fichier portrait) */
export const slugDe = (m: Membre) =>
  [m.prenom, m.nom].filter(Boolean).join(' ')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** true si le membre a son propre portrait détouré */
export const aPortrait = (m: Membre) => !!portraitParFichier(slugDe(m));

/** Portrait détouré du membre, ou l'avatar casqué Ascendia par défaut */
export const photoDe = (m: Membre): ImageMetadata => portraitParFichier(slugDe(m)) ?? portraitParFichier('avatar')!;

const ir = ['iRacing'];
const lmu = ['LMU'];
const irLmu = ['iRacing', 'LMU'];

// raccourci pour les pilotes sans rôle particulier : [prénom, nom, pays, jeux (iRacing par défaut)]
const pilotes = (groupe: Groupe, role: string, liste: [string, string, Pays, string[]?][]): Membre[] =>
  liste.map(([prenom, nom, pays, jeux = ir]) => ({ prenom, nom, pays, groupe, role, jeux }));

const tous: Membre[] = [
  // ---------- Fondateurs ----------
  { prenom: 'Damien', nom: 'Wuilmus', groupe: 'fondateur', role: "Fondateur de l'Ascendia", pilote: true, jeux: ir, pays: 'BE' },
  { prenom: 'Antoine', nom: 'Barbosa', groupe: 'fondateur', role: 'Co-fondateur', pilote: true, jeux: ir, pays: 'FR' },

  // ---------- Administrateurs ----------
  { prenom: 'François', nom: 'Baligant', groupe: 'admin', role: "Administrateur de l'association", pilote: true, jeux: ir, pays: 'BE' },
  { prenom: 'Michel', nom: 'Tonnon', groupe: 'admin', role: "Administrateur de l'association", pilote: true, jeux: ir, pays: 'BE' },

  // ---------- Staff ----------
  { prenom: 'Mathéo', nom: 'Manaranche', groupe: 'staff', role: 'Responsable réseaux sociaux', pilote: true, jeux: ir, pays: 'FR' },
  { prenom: 'Eric', nom: 'Legrand', groupe: 'staff', role: 'Responsable académie', pilote: true, jeux: ['iRacing', 'LMU'], pays: 'FR' },
  { prenom: 'Cédric', nom: 'Taillieu', groupe: 'staff', role: 'Staff', pilote: true, jeux: ir, pays: 'BE' },
  { prenom: 'Mickaël', nom: 'Scherdel', groupe: 'staff', role: 'Staff', pilote: true, jeux: ir, pays: 'FR' },
  { prenom: 'Elie', nom: 'Caron', groupe: 'staff', role: 'Staff', pilote: true, jeux: ir, pays: 'FR' },

  // ---------- Pilotes compétition ----------
  ...pilotes('competition', 'Pilote', [
    ['Jérôme', 'Zaracki', 'FR'], ['Christopher', 'Salingros', 'BE'], ['Christophe', 'Vannobel', 'FR'],
    ['François', 'Lambrecq', 'FR'], ['Alain', 'Berstchy', 'CH'], ['Thomas', 'Doyen', 'BE'],
    ['Kevin', 'Aernoudt', 'BE'], ['Yohan', 'Van den Bosch', 'BE', irLmu], ['Matthieu', 'Desirant', 'BE'],
    ['Ulrich', 'Jacoby', 'BE'], ['Julien', 'Araujo Costa', 'BE'], ['Otch', 'Massari', 'MA'],
    ['Nicolas', 'Rumen', 'FR'], ['Felipe', 'Allongue', 'BE'], ['Kevin', 'Castiau', 'BE'],
    ['Eddy', 'Velez', 'FR'], ['Gabriel', 'Moya Defargues', 'FR'], ['Julien', 'Castro', 'FR'],
    ['Jules', 'Castro', 'FR'],
    ['Nicolas', 'Rigobert', 'FR', lmu], ['Mickael', 'Nakazuma', 'BE', lmu],
    ['Pierre', 'Matzinger', 'FR', lmu], ['Florent', 'Montador', 'FR', lmu],
  ]),

  // ---------- Pilotes Academy ----------
  ...pilotes('academie', 'Pilote Academy', [
    ['Nolhan', 'Verhaegen', 'BE'], ['Cyril', 'Bonnemain', 'FR'], ['Damien', 'Rivet', 'FR'],
    ['François', 'Mahé', 'FR'], ['Evan', 'Mainguy', 'FR'], ['Théo', 'Nardini', 'FR', irLmu],
    ['Dror', 'Eini', 'IL'], ['Lukas', 'Da Rocha', 'FR'], ['Alexandre', 'Davin', 'BE'],
    ['Clément-Jérémy', 'Caroujel', 'FR'], ['William', 'Lejuste', 'BE'], ['Evan', 'Bazin', 'FR'],
    ['Arthur', 'Capelle', 'FR'], ['Adrien', 'Boccadoro', 'FR'], ['Jimmy', 'Janicot', 'FR'],
    ['Rudy', 'Pereira', 'FR'], ['Joseph', 'Assez', 'BE', irLmu], ['Cédric', 'Baligant', 'BE'],
    ['Michael', 'Wieczorek', 'FR'], ['Bruno', 'Marchica', 'BE'],
    ['Davy', 'Retfirg', 'FR', lmu], ['Ulrich', 'Betemps', 'FR', lmu], ['Matys', 'Dumange', 'FR', lmu],
    ['Vivien', 'Pochon', 'FR', lmu], ['Sébastien', 'Bonnier', 'FR', lmu], ['Geoffrey', 'Lacroix', 'BE', lmu],
    ['Tom', 'Remeuf', 'FR', lmu], ['Xavier', 'Kulej', 'FR', lmu], ['Kevin', 'Souyri', 'FR', lmu],
    ['Pierre', 'Le Marchand', 'FR', lmu],
  ]),

  // ---------- Pilotes du club ----------
  // (vide : le tableau du 25/09/2026 classe tout le monde en compétition ou Academy ;
  //  la section réapparaît dès qu'on ajoute quelqu'un ici)
  ...pilotes('club', 'Pilote', []),
];

// tri alphabétique par nom dans chaque groupe (fondateurs et administrateurs gardent leur ordre)
export const membres: Membre[] = tous
  .map((m, i) => ({ m, i }))
  .sort((a, b) =>
    a.m.groupe === b.m.groupe && !GRANDES_FICHES.includes(a.m.groupe)
      ? a.m.nom.localeCompare(b.m.nom, 'fr', { sensitivity: 'base' })
      : a.i - b.i,
  )
  .map(({ m }) => m);
