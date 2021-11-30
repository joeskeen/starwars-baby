const path = require('path');
const childProcess = require('child_process');

const projectRoot = path.join(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist/starwars');

console.log('Checking NPM dependencies...');
childProcess.execSync('npm i', {cwd: projectRoot});
console.log('Building the project...');
childProcess.execSync('npm run build', {cwd: projectRoot});

console.log('Preparing publish commit...');
childProcess.execSync('git init', {cwd: distRoot});
childProcess.execSync('git add .', {cwd: distRoot});
childProcess.execSync('git commit -m "updating GitHub Pages"', {cwd: distRoot});
childProcess.execSync('git checkout -b gh-pages"', {cwd: distRoot});

console.log('Pushing publish commit...');
childProcess.execSync('git remote add origin git@github.com:joeskeen/starwars-baby.git', {cwd: distRoot});
childProcess.execSync('git push origin gh-pages --force', {cwd: distRoot});

console.log('Done! :)');