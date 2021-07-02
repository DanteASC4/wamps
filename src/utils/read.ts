import path from 'path';
import { readJSONSync, accessSync, readFileSync, constants } from 'fs-extra';
import yaml from 'js-yaml';

export function exists(path: string): boolean {
  try {
    accessSync(path, constants.R_OK & constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

// return scripts block
export function readCurrentPDotJSon(path: string): Record<string, any> {
  const result = readJSONSync(path);

  return result;
}

// transform yaml string to obj
export function readMPSDotYaml(path: string): string {
  const result = readFileSync(path, 'utf8');

  return result;
}
