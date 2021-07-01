import path from 'path';
import fs from 'fs-extra';

const packageJsonPath = path.join(process.cwd(), 'package.json');
const asObj = fs.readJSONSync(packageJsonPath);
const scriptsObj = asObj.scripts;

// console.dir(scriptsObj);
let longest = 'ScriptName'.length;
for (const scriptName in scriptsObj) {
  if (scriptName.length > longest) longest = scriptName.length;
}

console.log(`\n\x1b[33mScriptName |  \x1b[32mScript Command`);
console.log('\x1b[36m————————————————————————————');
for (const scriptName in scriptsObj) {
  let numSpaces = Math.abs(scriptName.length - longest) + 1;
  let spaces = ' '.repeat(numSpaces);
  console.log(
    `\x1b[33m${scriptName}${spaces}|  \x1b[32m${scriptsObj[scriptName]}`
  );
}