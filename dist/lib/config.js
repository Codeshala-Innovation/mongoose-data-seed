"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _findRoot = _interopRequireDefault(require("find-root"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Get the user project root path
 * @return {string}
 */
const getProjectRoot = () => {
  const workingDir = process.cwd();
  return (0, _findRoot.default)(workingDir);
};
/**
 * mongoose-data-seed config
 * @type {Object}
 * @property {Function} clean
 * @property {Function} getConfigFromPackageJson
 * @property {Function} getUserGeneratorConfig
 * @property {Function} update
 * @property {Function} loadUserConfig
 * @property {String}   projectRoot
 * @property {String}   userConfigFilename
 * @property {String}   userConfigFilepath
 * @property {String}   userSeedersFolderName
 * @property {String}   userSeedersFolderPath
 * @property {boolean}  userConfigExists
 * @property {String}   seederTemplate
 * @property {String}   configTemplate
 */


const config = {
  /**
   * Clean the config
   */
  clean() {
    delete this.workingDir;
    delete this.projectRoot;
    delete this.userConfigFilename;
    delete this.userConfigFilepath;
    delete this.userSeedersFolderName;
    delete this.userSeedersFolderPath;
    delete this.userConfigExists;
    delete this.userConfig;
    delete this.seederTemplate;
    delete this.configTemplate;
  },

  /**
   * Get the user config from the user package.json file
   * @param  {string} [projectRoot=getProjectRoot()] user project root path
   * @return {Object}
   */
  getConfigFromPackageJson(projectRoot = getProjectRoot()) {
    const packageJsonPath = _path.default.join(projectRoot, 'package.json');

    const {
      mdSeed = {}
    } = require(packageJsonPath);

    return mdSeed;
  },

  /**
   * Get the user generator config
   * @param  {string} [projectRoot=getProjectRoot()] user project root path
   * @return {Object}
   */
  getUserGeneratorConfig(projectRoot = getProjectRoot()) {
    return _objectSpread({}, _constants.defaultUserGeneratorConfig, {}, this.getConfigFromPackageJson(projectRoot));
  },

  /**
   * Update (reload) the config
   * @param  {string} [projectRoot=getProjectRoot()] user project root path
   */
  update(projectRoot = getProjectRoot()) {
    const {
      seedersFolder,
      customSeederTemplate
    } = this.getUserGeneratorConfig(projectRoot);
    const userSeedersFolderName = seedersFolder;

    const userSeedersFolderPath = _path.default.join(projectRoot, userSeedersFolderName);

    const userConfigFilename = _constants.configFilename;

    const userConfigFilepath = _path.default.join(projectRoot, userConfigFilename);

    const userConfigExists = _fs.default.existsSync(userConfigFilepath);

    const configTemplate = _constants.systemConfigTemplate;
    const seederTemplate = customSeederTemplate ? _path.default.join(projectRoot, customSeederTemplate) : _constants.systemSeederTemplate;
    this.projectRoot = projectRoot;
    this.userConfigFilename = userConfigFilename;
    this.userConfigFilepath = userConfigFilepath;
    this.userSeedersFolderName = userSeedersFolderName;
    this.userSeedersFolderPath = userSeedersFolderPath;
    this.userConfigExists = userConfigExists;
    this.seederTemplate = seederTemplate;
    this.configTemplate = configTemplate;
  },

  /**
   * Load the user config
   */
  async loadUserConfig() {
    return Promise.resolve().then(() => _interopRequireWildcard(require(`${this.userConfigFilepath}`)));
  }

};
config.update();
var _default = config;
exports.default = _default;
module.exports = exports.default;