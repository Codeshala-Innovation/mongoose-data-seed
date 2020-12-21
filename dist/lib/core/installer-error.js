"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Installer Error
 */
class InstallerError extends Error {
  /**
   * Creates an InstallerError.
   * @param {Object} [options={}]         options
   * @param {String} [options.type='']    The error type key (Installer.operations).
   * @param {Object} [options.payload={}] A custom payload object.
   * @param {Error}  [options.error={}]   Error object.
   */
  constructor({
    type = '',
    payload = {},
    error = {}
  } = {}) {
    super(error.message || 'InstallerError');
    /**
     * Error name.
     * @type {String}
     */

    this.name = 'InstallerError';
    /**
     * Error type (one of the Installer.operations).
     * @type {String}
     */

    this.type = type;
    /**
     * Custom payload object.
     * @type {Object}
     */

    this.payload = _objectSpread({}, payload, {
      error
    });
  }

}

exports.default = InstallerError;
module.exports = exports.default;