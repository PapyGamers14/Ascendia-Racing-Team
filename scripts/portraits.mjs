// npm run portraits
// Détoure automatiquement chaque portrait de src/assets/team/originaux/ qui n'a pas encore
// sa version détourée dans src/assets/team/detoures/ (ou dont l'original a été modifié depuis).
// La page Team pose ensuite le drapeau du pays derrière, sans autre manipulation.
//
// Au premier lancement, un environnement Python local (.venv-portraits, non publié) est créé
// et l'outil de détourage rembg y est installé (≈ 200 Mo avec son modèle).

import { existsSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, parse } from 'node:path';
import { spawnSync } from 'node:child_process';

const racine = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const originaux = join(racine, 'src/assets/team/originaux');
const detoures = join(racine, 'src/assets/team/detoures');
const venv = join(racine, '.venv-portraits');
const pythonVenv = join(venv, process.platform === 'win32' ? 'Scripts/python.exe' : 'bin/python');

mkdirSync(detoures, { recursive: true });

// portraits à (re)détourer : sans version détourée, ou original plus récent
const aTraiter = readdirSync(originaux)
  .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
  .map((f) => ({ source: join(originaux, f), sortie: join(detoures, parse(f).name + '.webp') }))
  .filter(({ source, sortie }) => !existsSync(sortie) || statSync(source).mtimeMs > statSync(sortie).mtimeMs);

if (aTraiter.length === 0) {
  console.log('✔ Tous les portraits sont déjà détourés.');
  process.exit(0);
}

const lancer = (cmd, args) => {
  const r = spawnSync(cmd, args, { stdio: 'inherit' });
  if (r.status !== 0) {
    console.error(`✖ Échec de : ${cmd} ${args.join(' ')}`);
    process.exit(1);
  }
};

if (!existsSync(pythonVenv)) {
  console.log('Préparation de l’outil de détourage (une seule fois)…');
  lancer(process.platform === 'win32' ? 'python' : 'python3', ['-m', 'venv', venv]);
  lancer(pythonVenv, ['-m', 'pip', 'install', '-q', 'rembg[cpu]', 'pillow']);
}

console.log(`Détourage de ${aTraiter.length} portrait(s)…`);
lancer(pythonVenv, [join(racine, 'scripts/detourer.py'), ...aTraiter.flatMap(({ source, sortie }) => [source, sortie])]);
console.log('✔ Terminé. La page Team les utilise automatiquement.');
