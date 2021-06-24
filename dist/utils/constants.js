"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEMPLATE_CHOICES = exports.ALLOW_TEMPLATES = exports.REGISTRYS_MAP = exports.RC = exports.VERSION = void 0;

var _package = require("../../package.json");

var VERSION = _package.version;
exports.VERSION = VERSION;
var HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
var RC = "".concat(HOME, "/.relairc");
exports.RC = RC;
var REGISTRYS_MAP = {
  'umi-ts': {
    registry: 'realai-FE',
    template: 'umi-ts-template',
    branch: 'main'
  },
  screen: {
    registry: 'realai-FE',
    template: 'data-visual-screen',
    branch: 'main'
  },
  react: {
    registry: 'realai-FE',
    template: 'config-template',
    branch: 'master'
  }
};
exports.REGISTRYS_MAP = REGISTRYS_MAP;
var ALLOW_TEMPLATES = Object.keys(REGISTRYS_MAP);
exports.ALLOW_TEMPLATES = ALLOW_TEMPLATES;
var TEMPLATE_CHOICES = ALLOW_TEMPLATES.map(item => ({
  name: item,
  checked: item === 'umi-ts'
}));
exports.TEMPLATE_CHOICES = TEMPLATE_CHOICES;