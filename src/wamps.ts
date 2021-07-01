import path from 'path';
import fs from 'fs-extra';

// Read the calling directories package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const asObj = fs.readJSONSync(packageJsonPath);
const scriptsObj = asObj.scripts;

// Determine Longest Script Name for consistent spacing
let longest = 'ScriptName'.length;
for (const scriptName in scriptsObj) {
  if (scriptName.length > longest) longest = scriptName.length;
}

// Header
console.log(`\n\x1b[33mScriptName |  \x1b[32mScript Command`);
console.log('\x1b[36m————————————————————————————');

// Logging the script names and commands with some simple colors and even spacing
for (const scriptName in scriptsObj) {
  let numSpaces = Math.abs(scriptName.length - longest) + 1;
  let spaces = ' '.repeat(numSpaces);
  console.log(
    `\x1b[33m${scriptName}${spaces}|  \x1b[32m${scriptsObj[scriptName]}`
  );
}