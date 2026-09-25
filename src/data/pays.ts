// Drapeaux disponibles, dessinés dans un cadre 3 × 2.
// - drapeaux simples : 3 bandes verticales (de gauche à droite)
// - drapeaux plus complexes : dessin SVG libre
// Pour ajouter un pays : ajoute une ligne ici, puis utilise son code dans team.ts.
type Drapeau = { nom: string } & ({ bandes: readonly [string, string, string] } | { dessin: string });

export const drapeaux = {
  BE: { nom: 'Belgique', bandes: ['#1a1a1a', '#fdda24', '#ef3340'] },
  FR: { nom: 'France', bandes: ['#0055a4', '#ffffff', '#ef4135'] },
  IT: { nom: 'Italie', bandes: ['#009246', '#ffffff', '#ce2b37'] },
  CH: {
    nom: 'Suisse',
    dessin: '<rect width="3" height="2" fill="#d52b1e"/><path d="M1.3 .4h.4v.4h.4v.4h-.4v.4h-.4v-.4H.9V.8h.4z" fill="#fff"/>',
  },
  MA: {
    nom: 'Maroc',
    dessin: '<rect width="3" height="2" fill="#c1272d"/><path d="M1.5 .55 1.76 1.36 1.07.86h.86l-.69.5z" fill="none" stroke="#006233" stroke-width=".07" stroke-linejoin="round"/>',
  },
  IL: {
    nom: 'Israël',
    dessin: '<rect width="3" height="2" fill="#fff"/><rect y=".2" width="3" height=".3" fill="#0038b8"/><rect y="1.5" width="3" height=".3" fill="#0038b8"/><path d="M1.5.72 1.8 1.24H1.2zM1.5 1.28 1.2.76h.6z" fill="none" stroke="#0038b8" stroke-width=".06"/>',
  },
} as const satisfies Record<string, Drapeau>;

export type Pays = keyof typeof drapeaux;
