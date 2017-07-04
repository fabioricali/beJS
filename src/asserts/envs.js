/**
 * @fileOverview Environments checks.
 * @module Envs
 */

const Helpers = require('../helpers');
const Interface = require('../interface');
let Envs = {};

/**
 * Check if server environment
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name commonjsEnv
 * @returns {boolean}
 * @example
 * be.commonjsEnv() // true
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
 * @function
 * @name browserEnv
 * @returns {boolean}
 * @example
 * be.browserEnv() // true
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
 * @function
 * @name amdEnv
 * @returns {boolean}
 * @example
 * be.amdEnv() // true
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
 * @function
 * @name ios
 * @returns {boolean}
 * @example
 * be.ios() // true
 */
Envs.ios = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /iphone|ipad|ipod/i.test(userAgent);
};

Envs.ios.multiple = false;

/**
 * Check if is iPhone device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name iphone
 * @returns {boolean}
 * @example
 * be.iphone() // true
 */
Envs.iphone = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /iphone/i.test(userAgent);
};

Envs.iphone.multiple = false;

/**
 * Check if is iPad device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name ipad
 * @returns {boolean}
 * @example
 * be.ipad() // true
 */
Envs.ipad = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /ipad/i.test(userAgent);
};

Envs.ipad.multiple = false;

/**
 * Check if is iPod device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name ipod
 * @returns {boolean}
 * @example
 * be.ipod() // true
 */
Envs.ipod = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /ipod/i.test(userAgent);
};

Envs.ipod.multiple = false;

/**
 * Check if is Android device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name android
 * @returns {boolean}
 * @example
 * be.android() // true
 */
Envs.android = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /Android/i.test(userAgent);
};

Envs.android.multiple = false;

/**
 * Check if exists navigator object
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name navigator
 * @returns {boolean}
 * @example
 * be.navigator() // true
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
 * @function
 * @name firefox
 * @returns {boolean}
 * @example
 * be.firefox() // true
 */
Envs.firefox = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /Firefox/i.test(userAgent);
};

Envs.firefox.multiple = false;

/**
 * Chrome detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name chrome
 * @returns {boolean}
 * @example
 * be.chrome() // true
 */
Envs.chrome = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /Chrome/i.test(userAgent);
};

Envs.chrome.multiple = false;

/**
 * Safari detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name safari
 * @returns {boolean}
 * @example
 * be.safari() // true
 */
Envs.safari = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /Safari/i.test(userAgent.replace('Chrome', '')) &&
        !/Chrome/i.test(userAgent.replace('Safari', ''));
};

Envs.safari.multiple = false;

/**
 * Explorer detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name userAgent
 * @returns {boolean}
 * @example
 * be.ie() // true
 */
Envs.ie = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /MSIE|Trident/i.test(userAgent);
};

Envs.ie.multiple = false;

/**
 * Mac detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name mac
 * @returns {boolean}
 * @example
 * be.mac() // true
 */
Envs.mac = (...params) => {
    let userAgent = Helpers.getUserAgent.apply(this, params);
    return /mac/i.test(userAgent);
};

Envs.mac.multiple = false;

/**
 * Check if is on line
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name online
 * @returns {boolean}
 * @example
 * be.onLine() // true
 */
Envs.onLine = function () {
    return Envs.navigator() && navigator.onLine;
};

Envs.onLine.multiple = false;

Envs = Interface.create(Envs);

module.exports = Envs;
