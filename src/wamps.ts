#!/usr/bin/env node
import path from 'path';
import ora from 'ora';
import {
  generateYAML,
  readCurrentPDotJSon,
  exists,
  readMPSDotYaml,
  logJsonScripts,
  logYamlScripts
} from './utils';
import { Command } from 'commander';

const program = new Command();
program.version('1.0.1');

program.option(
  '-g, --generate',
  'generate a mps.yaml file based on package.json scripts'
);

program.parse(process.argv);

const options = program.opts();

const optionsProvided = Object.keys(options).length > 0;

console.log(options);

if (optionsProvided) {
  if (options.generate) {
    const spinner = ora({
      text: 'Generating yaml file...',
      spinner: 'shark'
    }).start();
    spinner.color = 'green';
    const cwd = process.cwd();
    const pkgJsonPath = path.join(cwd, 'package.json');

    const jsonExists = exists(pkgJsonPath);
    if (jsonExists) {
      const obj = readCurrentPDotJSon(pkgJsonPath);
      const scriptObj = obj.scripts;
      const genRes = generateYAML(scriptObj);
      if (genRes) {
        spinner.succeed('Successfully generated mps.yaml');
      } else {
        spinner.fail(
          'Failed to write mps.yaml. There is likely additional logging above.'
        );
      }
    } else {
      spinner.fail(
        'Failed to write mps.yaml. There is likely additional logging.'
      );
      throw new Error(`Could not find mps.yaml or package.json scripts`);
    }
  }
} else {
  const cwd = process.cwd();
  const yamlPath = path.join(cwd, 'mps.yaml');
  const pkgJsonPath = path.join(cwd, 'package.json');

  const yamlExists = exists(yamlPath);
  if (yamlExists) {
    const scriptsStr = readMPSDotYaml(yamlPath);
    logYamlScripts(scriptsStr);
  }

  if (yamlExists === false) {
    console.log('No mps.yaml found, using package.json instead.');
    const jsonExists = exists(pkgJsonPath);
    if (jsonExists) {
      const obj = readCurrentPDotJSon(pkgJsonPath);
      const scriptObj = obj.scripts;
      logJsonScripts(scriptObj);
    } else {
      throw new Error(`Could not find mps.yaml or package.json scripts`);
    }
  }

  // Parse from log.ts
}
