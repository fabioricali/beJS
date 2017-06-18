/**
 * Created by Fabio on 18/06/2017.
 */
var Helpers = require('../helpers');
var Envs = {};

/**
 * Check if server environment
 * @returns {boolean}
 */
Envs.serverEnv = function () {
    return typeof process !== 'undefined';
};

Envs.serverEnv.multiple = false;

/**
 * Check if browser environment
 * @returns {boolean}
 */
Envs.browserEnv = function () {
    return typeof window !== 'undefined';
};

Envs.browserEnv.multiple = false;

/**
 * Check if is iOS device
 * @returns {boolean}
 */
Envs.ios = function () {
    var userAgent = Helpers.getUserAgent.apply(this, arguments);
    return (/iPhone|iPad|iPod/i).test(userAgent);
};

Envs.ios.multiple = false;

/**
 * Check if is Android device
 * @returns {boolean}
 */
Envs.android = function () {
    var userAgent = Helpers.getUserAgent.apply(this, arguments);
    return (/Android/i).test(userAgent);
};

Envs.android.multiple = false;

/**
 * Check if exists navigator object
 * @returns {*|boolean}
 */
Envs.navigator = function () {
    return Envs.browserEnv() && typeof window.navigator !== 'undefined';
};

Envs.navigator.multiple = false;

/**
 * Firefox detecting
 * @returns {boolean}
 */
Envs.firefox = function () {
    var userAgent = Helpers.getUserAgent.apply(this, arguments);
    return (/Firefox/i).test(userAgent);
};

Envs.firefox.multiple = false;

/**
 * Chrome detecting
 * @returns {boolean}
 */
Envs.chrome = function () {
    var userAgent = Helpers.getUserAgent.apply(this, arguments);
    return (/Chrome/i).test(userAgent);
};

Envs.chrome.multiple = false;

/**
 * Safari detecting
 * @returns {boolean}
 */
Envs.safari = function () {
    var userAgent = Helpers.getUserAgent.apply(this, arguments);
    return (/Safari/i).test(userAgent.replace('Chrome', '')) &&
        !(/Chrome/i).test(userAgent.replace('Safari', ''));
};

Envs.safari.multiple = false;

/**
 * Explorer detecting
 * @returns {boolean}
 */
Envs.ie = function () {
    var userAgent = Helpers.getUserAgent.apply(this, arguments);
    return (/MSIE|Trident/i).test(userAgent);
};

Envs.ie.multiple = false;

module.exports = Envs;