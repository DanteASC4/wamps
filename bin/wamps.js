#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var ora_1 = __importDefault(require("ora"));
var generate_1 = __importDefault(require("./generate"));
var commander_1 = require("commander");
function readCurrentPackagejson() {
    var cwd = process.cwd();
    var result = fs_extra_1.default.readJSONSync(path_1.default.join(cwd, 'package.json'));
    if (result) {
        return result;
    }
    throw new Error("Could not read package.json scripts in " + cwd + " are you sure you have a scripts object in your pacakge.json?");
}
var program = new commander_1.Command();
program.version('1.0.1');
program.option('-g', '--generate', 'generate a mps.yaml file based on package.json scripts');
program.parse(process.argv);
var options = program.opts();
console.log(options);
if (options && options !== {}) {
    if (options.generate) {
        var spinner = ora_1.default({
            text: 'Generating yaml file...',
            spinner: 'shark'
        }).start();
        spinner.color = 'green';
        var asObj = readCurrentPackagejson();
        var genRes = generate_1.default(asObj);
        if (genRes) {
            spinner.succeed('Successfully generated mps.yaml');
        }
        else {
            spinner.fail('Failed to write mps.yaml. There is likely additional logging above.');
        }
    }
}
else {
    console.log('reading dir as normal');
    var asObj = readCurrentPackagejson();
    console.log(asObj);
    var scriptsObj = asObj.scripts;
    var longest = 'ScriptName'.length;
    for (var scriptName in scriptsObj) {
        if (scriptName.length > longest)
            longest = scriptName.length;
    }
    console.log("\n\u001B[33mScriptName |  \u001B[32mScript Command");
    console.log('\x1b[36m————————————————————————————');
    for (var scriptName in scriptsObj) {
        var numSpaces = Math.abs(scriptName.length - longest) + 1;
        var spaces = ' '.repeat(numSpaces);
        console.log("\u001B[33m" + scriptName + spaces + "|  \u001B[32m" + scriptsObj[scriptName]);
    }
}
//# sourceMappingURL=wamps.js.map