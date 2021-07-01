#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var packageJsonPath = path_1.default.join(process.cwd(), 'package.json');
var asObj = fs_extra_1.default.readJSONSync(packageJsonPath);
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
//# sourceMappingURL=wamps.js.map