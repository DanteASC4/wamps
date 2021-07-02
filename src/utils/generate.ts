import path from 'path';
import fs from 'fs-extra';
import yaml from 'js-yaml';

export function generateYAML(scriptsObj: Record<string, string>): boolean {
  const outPath = path.join(process.cwd(), 'mps.yaml');
  const transformed: Record<string, Record<string, string>> = {};

  for (const scriptName in scriptsObj) {
    if (!transformed[scriptName]) {
      transformed[scriptName] = {
        command: scriptsObj[scriptName],
        description: ''
      };
    }
  }

  const yamlStr = yaml.dump(transformed);

  try {
    fs.writeFileSync(outPath, yamlStr);
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
}
