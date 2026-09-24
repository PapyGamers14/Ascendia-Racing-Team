import type { ImageMetadata } from 'astro';
import type { Pays } from './pays';
import damien from '../assets/team/damien-wuilmus.webp';
import noupi from '../assets/team/noupi.webp';
import antoine from '../assets/team/antoine-barbosa.webp';
import avatarIracing from '../assets/team/avatar-pilote-iracing.webp';

// Membres de la team, dans l'ordre d'affichage (par groupe).
// Pour ajouter quelqu'un : dépose son portrait dans src/assets/team/,
// importe-le ci-dessus puis ajoute une ligne dans la liste.
// Sans photo, le membre reçoit l'avatar standard (pilote casqué Ascendia).

export type Groupe = 'fondateur' | 'staff' | 'competition' | 'academie';

export interface Membre {
  prenom?: string;       // vide pour un membre présenté par son pseudo
  nom: string;           // nom de famille ou pseudo
  groupe: Groupe;        // section de la page où il apparaît
  role: string;          // fonction dans la team
  pilote?: boolean;      // true = pilote en plus de son rôle (fondateur, staff)
  jeux: string[];
  pays?: Pays;           // drapeau affiché à côté du nom : 'BE', 'FR'…
  photo?: ImageMetadata; // optionnel : avatar standard si absent
}

export const groupes: { id: Groupe; titre: string; accent: string; kicker: string }[] = [
  { id: 'fondateur', titre: 'Les ', accent: 'fondateurs', kicker: "À l'origine d'Ascendia" },
  { id: 'staff', titre: 'Le ', accent: 'staff', kicker: 'Dans les coulisses' },
  { id: 'competition', titre: 'Pilotes ', accent: 'compétition', kicker: 'Le line-up' },
  { id: 'academie', titre: 'Pilotes ', accent: 'académie', kicker: 'La relève' },
];

/** Photo du membre, ou l'avatar standard s'il n'a pas voulu du sien */
export const photoDe = (m: Membre) => m.photo ?? avatarIracing;

const ir = ['iRacing'];

export const membres: Membre[] = [
  // ---------- Fondateurs ----------
  { prenom: 'Damien', nom: 'Wuilmus', groupe: 'fondateur', role: "Fondateur de l'Ascendia", pilote: true, jeux: ir, pays: 'BE', photo: damien },
  { prenom: 'Antoine', nom: 'Barbosa', groupe: 'fondateur', role: 'Co-fondateur', pilote: true, jeux: ir, pays: 'FR', photo: antoine },

  // ---------- Staff ----------
  { nom: 'Noupi', groupe: 'staff', role: 'Responsable réseaux sociaux', pilote: true, jeux: ir, pays: 'FR', photo: noupi },
  { prenom: 'Eric', nom: 'Legrand', groupe: 'staff', role: 'Responsable académie', pilote: true, jeux: ir, pays: 'FR' },
  // Noms fictifs (à remplacer par les vrais membres)
  { prenom: 'Kevin', nom: 'Delattre', groupe: 'staff', role: 'Team manager', pilote: true, jeux: ir },
  { prenom: 'Sarah', nom: 'Vandamme', groupe: 'staff', role: 'Responsable endurance', pilote: true, jeux: ir },
  { prenom: 'Maxime', nom: 'Peeters', groupe: 'staff', role: 'Ingénieur setups', pilote: true, jeux: ir },
  { prenom: 'Laura', nom: 'Bonnet', groupe: 'staff', role: 'Stratégie de course', jeux: ir },
  { prenom: 'Antoine', nom: 'Moreau', groupe: 'staff', role: 'Responsable événements', jeux: ir },
  { prenom: 'Nicolas', nom: 'Janssens', groupe: 'staff', role: 'Designer livrées', jeux: ir },

  // ---------- Pilotes compétition ----------
  // Noms fictifs (à remplacer par les vrais pilotes)
  ...[
    ['Lucas', 'Martin'], ['Hugo', 'Dubois'], ['Louis', 'Lambert'], ['Arthur', 'Leroy'], ['Mathis', 'Petit'],
    ['Nathan', 'Claes'], ['Enzo', 'Rossi'], ['Théo', 'Garnier'], ['Romain', 'Fournier'], ['Quentin', 'Maes'],
    ['Yanis', 'Benali'], ['Alexis', 'Girard'], ['Florian', 'Wouters'], ['Dylan', 'Mercier'], ['Bastien', 'Lemaire'],
    ['Jordan', 'Hubert'], ['Adrien', 'Colin'], ['Cédric', 'Dupont'], ['Loïc', 'Renard'], ['Victor', 'Jacobs'],
  ].map(([prenom, nom]): Membre => ({ prenom, nom, groupe: 'competition', role: 'Pilote', jeux: ir })),

  // ---------- Pilotes académie ----------
  // Noms fictifs (à remplacer par les vrais pilotes)
  ...[
    ['Noah', 'Simon'], ['Léo', 'Bernard'], ['Gabriel', 'Roux'], ['Jules', 'Faure'], ['Raphaël', 'André'],
    ['Adam', 'Blanc'], ['Ethan', 'Guérin'], ['Sacha', 'Muller'], ['Tom', 'Henry'], ['Paul', 'Rousseau'],
    ['Timéo', 'Vincent'], ['Maël', 'Masson'], ['Liam', 'Gauthier'], ['Baptiste', 'Perrin'], ['Clément', 'Morel'],
    ['Axel', 'Fontaine'], ['Evan', 'Chevalier'], ['Mathéo', 'Robin'], ['Kylian', 'Brun'], ['Samuel', 'Lacroix'],
  ].map(([prenom, nom]): Membre => ({ prenom, nom, groupe: 'academie', role: 'Pilote académie', jeux: ir })),
];
