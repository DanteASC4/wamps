import { resolve, join } from 'path';
import { readJsonSync, existsSync } from 'fs-extra';
import pc from 'picocolors';
import { table } from 'table';

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

const data = [];

for (const prop in scriptsObj) {
  data.push([prop, scriptsObj[prop]]);
}

console.log(
  table(data, {
    header: {
      alignment: 'center',
      content: 'ScriptName |  Script Command'
    }
  })
);

// console.dir(scriptsObj);
// let longest = 'ScriptName'.length;
// for (const scriptName in scriptsObj) {
//   if (scriptName.length > longest) longest = scriptName.length;
// }

// console.log(`\n\x1b[33mScriptName |  \x1b[32mScript Command`);
// console.log('\x1b[36m————————————————————————————');
// for (const scriptName in scriptsObj) {
//   const numSpaces = Math.abs(scriptName.length - longest) + 1;
//   const spaces = ' '.repeat(numSpaces);
//   console.log(
//     `\x1b[33m${scriptName}${spaces}|  \x1b[32m${scriptsObj[scriptName]}`
//   );
// }
