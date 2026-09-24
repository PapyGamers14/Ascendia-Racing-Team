// Drapeaux disponibles (3 bandes verticales, de gauche à droite).
// Pour ajouter un pays : ajoute une ligne ici, puis utilise son code dans team.ts.
export const drapeaux = {
  BE: { nom: 'Belgique', bandes: ['#1a1a1a', '#fdda24', '#ef3340'] },
  FR: { nom: 'France', bandes: ['#0055a4', '#ffffff', '#ef4135'] },
  IT: { nom: 'Italie', bandes: ['#009246', '#ffffff', '#ce2b37'] },
} as const;

export type Pays = keyof typeof drapeaux;
