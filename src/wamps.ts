import { existsSync, readJsonSync } from 'fs-extra';
import { join, resolve } from 'path';
import pc from 'picocolors';

const packageJsonPath = resolve(join(process.cwd(), 'package.json'));
const packageJsonExists = existsSync(packageJsonPath);
if (!packageJsonExists) {
  console.log(pc.red('No package.json found!'));
  process.exit(1);
}

const asObj = readJsonSync(packageJsonPath);

const scriptsObj = asObj.scripts;
if (!scriptsObj) {
  console.log(pc.red('No scripts found in package.json!'));
  process.exit(1);
}

for (const prop in scriptsObj) {
  console.log(pc.cyan(prop));
  console.log(scriptsObj[prop]);
  console.log('\n');
}
