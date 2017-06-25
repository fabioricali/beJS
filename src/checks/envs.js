/**
 * @module be
 * @description Environments checks.
 */

const Helpers = require('../helpers');
const Interface = require('../interface');
let Envs = {};

/**
 * Check if server environment
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.commonjsEnv = () => {
    return typeof process !== 'undefined';
};

Envs.commonjsEnv.multiple = false;

/**
 * Check if browser environment
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.browserEnv = () => {
    return typeof window !== 'undefined';
};

Envs.browserEnv.multiple = false;

/**
 * Check if AMD environment
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.amdEnv = () => {
    return typeof define === 'function' && define.amd;
};

Envs.amdEnv.multiple = false;

/**
 * Check if is iOS device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.ios = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return (/iPhone|iPad|iPod/i).test(userAgent);
};

Envs.ios.multiple = false;

/**
 * Check if is Android device
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.android = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return (/Android/i).test(userAgent);
};

Envs.android.multiple = false;

/**
 * Check if exists navigator object
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.navigator = () => {
    return Envs.browserEnv() && typeof window.navigator !== 'undefined';
};

Envs.navigator.multiple = false;

/**
 * Firefox detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.firefox = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return (/Firefox/i).test(userAgent);
};

Envs.firefox.multiple = false;

/**
 * Chrome detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.chrome = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return (/Chrome/i).test(userAgent);
};

Envs.chrome.multiple = false;

/**
 * Safari detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.safari = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return (/Safari/i).test(userAgent.replace('Chrome', '')) &&
        !(/Chrome/i).test(userAgent.replace('Safari', ''));
};

Envs.safari.multiple = false;

/**
 * Explorer detecting
 *
 * **Interfaces**: `not`
 *
 * @returns {boolean}
 */
Envs.ie = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return (/MSIE|Trident/i).test(userAgent);
};

Envs.ie.multiple = false;

Envs = Interface.create(Envs);

module.exports = Envs;