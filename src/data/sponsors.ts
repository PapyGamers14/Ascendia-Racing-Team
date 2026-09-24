import type { ImageMetadata } from 'astro';

import vanspringel from '../assets/sponsors/vanspringel.png';
import mhc from '../assets/sponsors/mhc-mobility.png';
import simwear from '../assets/sponsors/simwear.png';
import bouclier from '../assets/sponsors/bouclier-s.png';

export interface Sponsor {
  nom: string;
  logo: ImageMetadata;
  url: string;          // site du partenaire
  hauteur: number;      // hauteur d'affichage du logo en px
}

export const sponsors: Sponsor[] = [
  { nom: 'Vanspringel', logo: vanspringel, url: 'https://www.vanspringel.com/', hauteur: 34 },
  { nom: 'MHC Mobility', logo: mhc, url: 'https://www.mhcmobility.be/fr/', hauteur: 52 },
  { nom: 'Simwear', logo: simwear, url: 'https://www.simwear.fr/', hauteur: 40 },
  { nom: 'Scorsad', logo: bouclier, url: 'https://www.instagram.com/scorsad/', hauteur: 60 },
];
