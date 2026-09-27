// Pilotes qui streament.
// Pour ajouter un streamer : ajoute une ligne avec son nom EXACTEMENT comme sur la page Team
// (« Prénom Nom », ou le pseudo) — son portrait, son drapeau et son rôle sont repris automatiquement.
// Ne renseigne que les plateformes qu'il utilise :
//   twitch : le nom de la chaîne (ce qui suit twitch.tv/)
//   youtube, kick, tiktok : l'adresse complète de la chaîne

export interface Streamer {
  nom: string;
  twitch?: string;
  youtube?: string;
  kick?: string;
  tiktok?: string;
}

/** Chaînes officielles de la team, mises en avant en haut de la page */
export const chaineOfficielle = {
  // chaînes Twitch officielles (la première est affichée par défaut dans le lecteur)
  twitch: [
    { chaine: 'ascendiatv', nom: 'AscendiaTV' },
    { chaine: 'ascendiatv2', nom: 'AscendiaTV 2' },
  ],
  youtube: 'https://www.youtube.com/@AscendiaRacingTeamTV',
};

export const streamers: Streamer[] = [
  // exemple : { nom: 'Mathéo Manaranche', twitch: 'nomdelachaine' },
  { nom: 'Antoine Barbosa', twitch: 'massardotv' },
  { nom: 'François Baligant', twitch: 'ligsio' },
  { nom: 'Elie Caron', twitch: 'tin0g91' },
  { nom: 'Eddy Velez', twitch: 'eddyontrack' },
  { nom: 'Mickaël Scherdel', twitch: 'calibibi95' },
  { nom: 'François Lambrecq', youtube: 'https://www.youtube.com/@shoum6266' },
];
