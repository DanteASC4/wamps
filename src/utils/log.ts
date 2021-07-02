import yaml from 'js-yaml';
import { boxMaster9000 } from '.';

export function logJsonScripts(obj: Record<string, any>): void {
  let longest = 'ScriptName'.length;
  for (const scriptName in obj) {
    if (scriptName.length > longest) longest = scriptName.length;
  }

  // Header
  const header = `\n\x1b[33mScriptName |  \x1b[32mScript Command`;
  console.log(header);
  console.log(`\x1b[36m${'━'.repeat(header.length)}`);
  // Logging the script names and commands with some simple colors and even spacing
  for (const scriptName in obj) {
    const numSpaces = Math.abs(scriptName.length - longest) + 1;
    const spaces = ' '.repeat(numSpaces);
    console.log(`\x1b[33m${scriptName}${spaces}|  \x1b[32m${obj[scriptName]}`);
  }
}

interface ScriptObj {
  command: string;
  description: string;
}

export function logYamlScripts(yamlStr: string): void {
  const parsed: any = yaml.load(yamlStr);
  let longestName = 0;
  let longestCommand = 0;
  let longestDesc = 0;
  const baseHPadding = 2;
  const vertPadding = 1;

  for (const [key, value] of Object.entries(parsed)) {
    const v = <ScriptObj>value;
    if (key.length > longestName) longestName = key.length;
    if (v.command.length > longestCommand) longestCommand = v.command.length;
    if (v.description.length > longestDesc) longestDesc = v.description.length;
  }

  const longerCommand = longestCommand > longestDesc;
  let totalLineLength = 0;
  if (longerCommand) {
    totalLineLength = longestName + baseHPadding * 2 + longestCommand;
  } else {
    totalLineLength = longestName + baseHPadding * 2 + longestDesc;
  }

  //Left off on this
  for (const [key, value] of Object.entries(parsed)) {
    const v = <ScriptObj>value;
    const paddingSpaces =
      Math.abs(key.length - longestName) % 2 === 0
        ? Math.abs(key.length - longestName)
        : Math.abs(key.length - longestName) + 1;
    const blankLineSpaces = paddingSpaces + key.length;
  }

  console.log(parsed);
}
