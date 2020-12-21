"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemConfigTemplate = exports.systemSeederTemplate = exports.defaultUserGeneratorConfig = exports.configFilename = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Better to check what module system is being used

/**
 * mongoose-data-seed user config filename
 * @type {String}
 */
const configFilename = 'md-seed-config.js';
/**
 * mongoose-data-seed default user generator-config
 * @type {Object}
 * @property {string} seedersFolder
 */

exports.configFilename = configFilename;
const defaultUserGeneratorConfig = {
  seedersFolder: './seeders'
};
/**
 * system seeder template path
 * @type {string}
 */

exports.defaultUserGeneratorConfig = defaultUserGeneratorConfig;

const systemSeederTemplate = _path.default.join(__dirname, '../../templates/seeder.ejs');
/**
 * system template for user-config path
 * @type {string}
 */


exports.systemSeederTemplate = systemSeederTemplate;

const systemConfigTemplate = _path.default.join(__dirname, '../../templates/md-seed-config.ejs');

exports.systemConfigTemplate = systemConfigTemplate;