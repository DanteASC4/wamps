"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const picocolors_1 = __importDefault(require("picocolors"));
const packageJsonPath = (0, path_1.resolve)((0, path_1.join)(process.cwd(), 'package.json'));
const packageJsonExists = (0, fs_extra_1.existsSync)(packageJsonPath);
if (!packageJsonExists) {
    console.log(picocolors_1.default.red('No package.json found!'));
    process.exit(1);
}
const asObj = (0, fs_extra_1.readJsonSync)(packageJsonPath);
const scriptsObj = asObj.scripts;
if (!scriptsObj) {
    console.log(picocolors_1.default.red('No scripts found in package.json!'));
    process.exit(1);
}
for (const prop in scriptsObj) {
    console.log(picocolors_1.default.cyan(prop));
    console.log(scriptsObj[prop]);
    console.log('\n');
}
