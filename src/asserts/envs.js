/**
 * @fileOverview Environments checks.
 * @module Envs
 */

const Helpers = require('../helpers');
const Mixed = require('./mixed');
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

let regEx = {
    android: /^(?:(?!Windows).)*(Android)(?:\s)(\d+((\.\d+)+)?)?/,
    androidTablet: /(Android)(?:\s)(\d+((\.\d+)+)?)?(?!.*Mobile)/,
    androidPhone: /(Android)(?:\s)(\d+((\.\d+)+)?)?(?:.*Mobile)/,
    chrome: /(Chrome|Crios)\/(\d+((\.\d+)+)?)?\s+(Safari)\/(\d+((\.\d+)+)?)?$/,
    chromeIOS: /(CriOS)\/(\d+((\.\d+)+)?)?/,
    opera: /(Opera|OPR)(?:[\/\s])(\d+((\.\d+)+)?)?/,
    firefox: /(Firefox)\/(\d+((\.\d+)+)?)?$/,
    edge: /(Edge)\/(\d+((\.\d+)+)?)?$/,
    safari: /^(?:(?!Chrome).)*(Safari)\/(\d+((\.\d+)+)?)?/,
    safariMobile: /^(?:(?!CriOS).)*(?:Mobile\/.*)(Safari)\/(\d+((\.\d+)+)?)?/,
    ie: /(MSIE|rv)(?:[\s:])(\d+((\.\d+)+)?)?/,
    windowsPhone: /(Windows Phone)(?:\s)(\d+((\.\d+)+)?)?/,
    windowsTablet: /(Windows NT)(?:\s)(\d+((\.\d+)+)?)?(?:.*Touch)/,
    blackberry: /BlackBerry|BB10/,
    iphone: /iPhone/,
    ipad: /iPad/,
    ipod: /iPod/,
    ios: /iPhone|iPad|iPod/,
    mac: /Mac/,
    linux: /Linux/,
    windows: /Windows/,
};

(() => {
    for(let i in regEx){
        Envs[i] = (range, agent) => {
            let rangePart = Helpers.operatorVersion(range);
            agent = !rangePart && !agent && range ? range : agent || navigator.userAgent;
            let match = agent.match(regEx[i]);
            if(rangePart && match && match[2]){
                return Mixed.compareVersion(match[2], rangePart[0], rangePart[1], true);
            }
            return match !== null;
        };
        Envs[i].multiple = false;
    }
})();

/**
 * Check if is mobile device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name mobile
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.mobile() // true
 */
Envs.mobile = (agent) => {
    agent = agent || navigator.userAgent;
    return Envs.iphone(agent) || Envs.ipod(agent) || Envs.androidPhone(agent) || Envs.blackberry(agent) || Envs.windowsPhone(agent);
};

/**
 * Check if is tablet device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name tablet
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.tablet() // true
 */
Envs.tablet = (agent) => {
    agent = agent || navigator.userAgent;
    return Envs.ipad(agent) || Envs.windowsTablet(agent) || Envs.androidTablet(agent);
};

/**
 * Check if is desktop device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name desktop
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.desktop() // true
 */
Envs.desktop = (agent) => {
    agent = agent || navigator.userAgent;
    return Envs.not.tablet(agent) && Envs.not.mobile(agent);
};

/**
 * Check if is Android tablet
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name androidTablet
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.androidTablet() // true
 */

/**
 * Check if is Android phone
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name androidPhone
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.androidPhone() // true
 */

/**
 * Check if is Windows Phone
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name windowsPhone
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.windowsPhone() // true
 */

/**
 * Check if is Windows Tablet
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name windowsTablet
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.windowsTablet() // true
 */

/**
 * Check if is BlackBerry device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name blackberry
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.blackberry() // true
 */

/**
 * Check if is iOS device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name ios
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.ios() // true
 */

/**
 * Check if is iPad device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name ipad
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.ipad() // true
 */

/**
 * Check if is iPod device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name ipod
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.ipod() // true
 */

/**
 * Check if is iPhone device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name iphone
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.iphone() // true
 */

/**
 * Check if is Android device
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name android
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.android() // true
 * be.android(==4) // true
 */

/**
 * Firefox detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name firefox
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.firefox() // true
 * be.firefox('==30') // true
 */

/**
 * Chrome detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name chrome
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.chrome() // true
 * be.chrome('==59') // true
 */

/**
 * Chrome iOS detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name chromeIOS
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.chromeIOS() // true
 * be.chromeIOS('==59') // true
 */

/**
 * Safari detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name safari
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.safari() // true
 * be.safari(<=7) // true
 */

/**
 * Safari mobile detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name safariMobile
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.safariMobile() // true
 * be.safariMobile(<=7) // true
 */

/**
 * Edge detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name edge
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.edge() // true
 * be.edge(>=12) // true
 */

/**
 * Explorer detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name userAgent
 * @param range {string} operator and version number "==", "<", "<=", ">", "=>" ex: >=4
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.ie() // true
 * be.ie(==9) // true
 */

/**
 * Mac detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name mac
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.mac() // true
 */

/**
 * Windows detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name windows
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.windows() // true
 */

/**
 * Linux detecting
 *
 * **Interfaces**: `not`
 *
 * @function
 * @name linux
 * @param agent {string} user agent string
 * @returns {boolean}
 * @example
 * be.linux() // true
 */

Envs = Interface.create(Envs);

module.exports = Envs;
