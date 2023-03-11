import * as fs from 'fs';
const pkgRaw = fs.readFileSync('./function-plot/package.json', 'utf8');
let pkg = JSON.parse(pkgRaw);
pkg.scripts = {};
fs.writeFileSync('./function-plot/package.json', JSON.stringify(pkg, null, 2));

