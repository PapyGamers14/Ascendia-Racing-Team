// Calendrier des iRacing Special Events 2026 (source : iracing.com/special-events)
// Pour signaler qu'Ascendia participe à une course : ajoute `ascendia: true`.
//
// Seules les courses d'une des catégories ci-dessous sont affichées sur le site ;
// les autres catégories sont retirées de l'affichage.
export const CATEGORIES_SUIVIES = ['NASCAR', 'IndyCar', 'GTP', 'LMP2', 'LMP3', 'GT3', 'GT4'];

export type TypeEvenement = 'team' | 'super' | 'standard';

export interface Evenement {
  debut: string;        // AAAA-MM-JJ
  fin: string;          // AAAA-MM-JJ
  nom: string;
  circuit: string;
  classes: string;
  type: TypeEvenement;  // team = Team Event, super = Super Session
  ascendia?: boolean;   // true = la team est engagée
}

const tousLesEvenements: Evenement[] = [
  { debut: '2026-01-09', fin: '2026-01-10', nom: 'Roar', circuit: 'Daytona International Speedway', classes: 'LMP3, GT4, Touring', type: 'standard' },
  { debut: '2026-01-16', fin: '2026-01-18', nom: 'Daytona 24', circuit: 'Daytona International Speedway', classes: 'GTP, LMP2, GT3', type: 'team' },
  { debut: '2026-01-28', fin: '2026-01-28', nom: 'Dale Jr Charity Event', circuit: 'Iowa Speedway', classes: 'Mini Stock', type: 'standard' },
  { debut: '2026-02-11', fin: '2026-02-18', nom: 'Daytona 500', circuit: 'Daytona International Speedway', classes: 'NASCAR Cup', type: 'standard' },
  { debut: '2026-02-20', fin: '2026-02-22', nom: 'Bathurst 12', circuit: 'Mount Panorama Circuit', classes: 'GT3', type: 'team' },
  { debut: '2026-03-27', fin: '2026-03-29', nom: 'Sebring 12', circuit: 'Sebring International Raceway', classes: 'GTP, LMP2, GT3', type: 'team' },
  { debut: '2026-04-10', fin: '2026-04-11', nom: 'Road America 500', circuit: 'Road America', classes: 'Nissan GTP, Audi 90', type: 'team' },
  { debut: '2026-05-01', fin: '2026-05-03', nom: 'Nürburgring 24h', circuit: 'Nürburgring Gesamtstrecke 24h', classes: 'GT3, Pcup, GT4, Touring', type: 'team' },
  { debut: '2026-05-05', fin: '2026-05-11', nom: 'Indy 500 — Fixed', circuit: 'Indianapolis Motor Speedway', classes: 'IndyCar (Dallara IR-18)', type: 'standard' },
  { debut: '2026-05-12', fin: '2026-05-18', nom: 'Indy 500 — Open', circuit: 'Indianapolis Motor Speedway', classes: 'IndyCar (Dallara IR-18)', type: 'standard' },
  { debut: '2026-05-20', fin: '2026-05-25', nom: 'World 600', circuit: 'Charlotte Motor Speedway', classes: 'NASCAR Cup', type: 'standard' },
  { debut: '2026-05-29', fin: '2026-05-31', nom: '4 Hours at Thruxton', circuit: 'Thruxton Circuit', classes: 'Touring Cars', type: 'standard' },
  { debut: '2026-06-19', fin: '2026-06-21', nom: 'Watkins Glen 6 Hour', circuit: 'Watkins Glen International', classes: 'GTP, LMP2, GT3', type: 'team' },
  { debut: '2026-06-30', fin: '2026-07-06', nom: 'Firecracker 400', circuit: 'Daytona International Speedway 2007', classes: '1987 NASCAR Cup', type: 'standard' },
  { debut: '2026-07-10', fin: '2026-07-12', nom: 'Spa 24', circuit: 'Circuit de Spa-Francorchamps', classes: 'GT3', type: 'team' },
  { debut: '2026-07-22', fin: '2026-07-27', nom: 'Brickyard 400', circuit: 'Indianapolis Motor Speedway', classes: 'NASCAR Cup', type: 'standard' },
  { debut: '2026-07-24', fin: '2026-07-26', nom: '6 Hours of Road America', circuit: 'Road America', classes: 'GTP, LMP2, GT3', type: 'team' },
  { debut: '2026-08-04', fin: '2026-08-09', nom: 'Knoxville Nationals', circuit: 'Knoxville Raceway', classes: '410 Winged Sprint Car', type: 'super' },
  { debut: '2026-08-14', fin: '2026-08-15', nom: 'Portimão 1000km', circuit: 'Algarve International Circuit', classes: 'HPD, GT1, GT2', type: 'standard' },
  { debut: '2026-08-25', fin: '2026-08-30', nom: 'Crandon Championship', circuit: 'Crandon International Raceway', classes: 'Pro 4 Truck', type: 'super' },
  { debut: '2026-09-02', fin: '2026-09-07', nom: 'Southern 500', circuit: 'Darlington Raceway', classes: 'NASCAR Cup', type: 'standard' },
  { debut: '2026-09-10', fin: '2026-09-15', nom: 'Suzuka 1000km', circuit: 'Suzuka Circuit', classes: 'GT3', type: 'team' },
  { debut: '2026-09-18', fin: '2026-09-20', nom: 'Britcar 24', circuit: 'Silverstone', classes: 'GT3, GT4', type: 'team' },
  { debut: '2026-09-25', fin: '2026-09-27', nom: 'Petit Le Mans', circuit: 'Michelin Raceway Road Atlanta', classes: 'GTP, LMP2, GT3', type: 'team', ascendia: true },
  { debut: '2026-10-02', fin: '2026-10-04', nom: 'Bathurst 1000', circuit: 'Mount Panorama Circuit', classes: 'Supercars', type: 'team' },
  { debut: '2026-10-16', fin: '2026-10-18', nom: '8 Hours of Indianapolis', circuit: 'Indianapolis Motor Speedway', classes: 'GT3', type: 'team' },
  { debut: '2026-10-30', fin: '2026-10-31', nom: 'iRacing FF1600 Festival', circuit: 'Brands Hatch', classes: 'FF1600', type: 'standard' },
  { debut: '2026-11-04', fin: '2026-11-09', nom: 'Homestead Championship', circuit: 'Homestead Miami Speedway', classes: 'NASCAR Cup', type: 'standard' },
  { debut: '2026-11-13', fin: '2026-11-15', nom: 'SFL Mountain Showdown', circuit: 'Mount Panorama Circuit', classes: 'Super Formula Lights', type: 'standard' },
  { debut: '2026-11-17', fin: '2026-11-21', nom: 'iRacing Runoffs', circuit: 'Road America', classes: '6 classes', type: 'super' },
  { debut: '2026-12-02', fin: '2026-12-07', nom: 'Winter Derby', circuit: 'Five Flags Speedway', classes: 'Super Late Model', type: 'standard' },
  { debut: '2026-12-15', fin: '2026-12-20', nom: 'Chili Bowl', circuit: 'Chili Bowl', classes: 'Dirt Midget', type: 'super' },
  { debut: '2026-12-18', fin: '2026-12-19', nom: 'THE Production Car Challenge', circuit: 'Virginia International Raceway', classes: 'PCC Class', type: 'standard' },
];

/** Garde, dans "GT3, Pcup, GT4, Touring", uniquement les catégories suivies ("GT3, GT4") */
function categoriesSuivies(classes: string) {
  return classes
    .split(',')
    .map((c) => c.trim())
    .filter((c) => CATEGORIES_SUIVIES.some((cat) => new RegExp(`\\b${cat}\\b`, 'i').test(c)));
}

/** Les événements affichés sur le site : uniquement ceux des catégories suivies */
export const evenements: Evenement[] = tousLesEvenements
  .map((e) => ({ ...e, classes: categoriesSuivies(e.classes).join(', ') }))
  .filter((e) => e.classes !== '');

export const libelleType: Record<TypeEvenement, string> = {
  team: 'Team Event',
  super: 'Super Session',
  standard: 'Special Event',
};

const d = (iso: string) => new Date(iso + 'T12:00:00');
const mois = (iso: string) => d(iso).toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '');

/** "25 – 27 sept", "30 juin – 6 juil", "28 janv" */
export function plage(debut: string, fin: string) {
  const j1 = d(debut).getDate();
  const j2 = d(fin).getDate();
  if (debut === fin) return `${j1} ${mois(debut)}`;
  if (mois(debut) === mois(fin)) return `${j1} – ${j2} ${mois(fin)}`;
  return `${j1} ${mois(debut)} – ${j2} ${mois(fin)}`;
}

export function moisLong(iso: string) {
  return d(iso).toLocaleDateString('fr-FR', { month: 'long' });
}
