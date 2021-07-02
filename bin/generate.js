"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var js_yaml_1 = __importDefault(require("js-yaml"));
function generateYAML(scriptsObj) {
    var outPath = path_1.default.join(process.cwd(), 'mps.yaml');
    var yamlStr = js_yaml_1.default.dump(scriptsObj);
    try {
        fs_extra_1.default.writeFileSync(outPath, yamlStr);
    }
    catch (err) {
        console.error(err);
        return false;
    }
    return true;
}
exports.default = generateYAML;
//# sourceMappingURL=generate.js.map