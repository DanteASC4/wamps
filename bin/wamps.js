<<<<<<< HEAD
#!/usr/bin/env node
=======
>>>>>>> dev
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
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
=======
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var picocolors_1 = __importDefault(require("picocolors"));
var table_1 = require("table");
var packageJsonPath = (0, path_1.resolve)((0, path_1.join)(process.cwd(), 'package.json'));
var packageJsonExists = (0, fs_extra_1.existsSync)(packageJsonPath);
if (!packageJsonExists) {
    console.log(picocolors_1.default.red('No package.json found!'));
    process.exit(1);
}
var asObj = (0, fs_extra_1.readJsonSync)(packageJsonPath);
var scriptsObj = asObj.scripts;
if (!scriptsObj) {
    console.log(picocolors_1.default.red('No scripts found in package.json!'));
    process.exit(1);
}
var data = [];
for (var prop in scriptsObj) {
    data.push([prop, scriptsObj[prop]]);
}
console.log((0, table_1.table)(data, {
    header: {
        alignment: 'center',
        content: 'ScriptName |  Script Command'
    }
}));
>>>>>>> dev
