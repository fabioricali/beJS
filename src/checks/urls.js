/**
 * @module be
 * @description Urls checks.
 */

const Interface = require('../interface');
let Urls = {};

/**
 * Check if is valid string url
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @link https://gist.github.com/dperini/729294
 * @param value {String} url
 * @returns {Boolean}
 * @example
 * be.url('http://www.google.com') // true;
 * be.not.url('http://www.google.com') // false;
 * be.any.url('http://www.google.com', 'http://') // true;
 * be.all.url('http://www.google.com', 'http://') // false;
 */
Urls.url = (value) => {
    return /^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
};

/**
 * Check if is a HTTP url
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {String} url
 * @returns {Boolean}
 * @example
 * be.httpUrl('http://www.google.com') // true;
 * be.not.httpUrl('http://www.google.com') // false;
 * be.any.httpUrl('http://www.google.com', 'http://') // true;
 * be.all.httpUrl('http://www.google.com', 'http://') // false;
*/
Urls.httpUrl = (value) => {
    return Urls.url(value) && /^http:/i.test(value);
};

/**
 * Check if is a HTTPS url
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {String} url
 * @returns {Boolean}
 * @example
 * be.httpsUrl('https://www.google.com') // true;
 * be.not.httpsUrl('https://www.google.com') // false;
 * be.any.httpsUrl('https://www.google.com', 'http://') // true;
 * be.all.httpsUrl('https://www.google.com', 'http://') // false;
 */
Urls.httpsUrl = (value) => {
    return Urls.url(value) && /^https:/i.test(value);
};

/**
 * Check if url is encoded
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {String} url encoded
 * @returns {Boolean}
 * @example
 * be.urlEncoded('http://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8') // true
 */
Urls.urlEncoded = (value) => {
    return /%[0-9a-f]{2}/i.test(value);
};

/**
 * Check if is a FTP urls
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {String} url
 * @returns {Boolean}
 * @example
 * be.ftpUrl('ftp://ftp.google.com') // true;
 * be.not.ftpUrl('ftp://ftp.google.com') // false;
 * be.any.ftpUrl('ftp://ftp.google.com', 'http://') // true;
 * be.all.ftpUrl('ftp://ftp.google.com', 'http://') // false;
 */
Urls.ftpUrl = (value) => {
    return Urls.url(value) && /^ftp:/i.test(value);
};

/**
 * Check if is a FTPS urls
 *
 * **Interfaces**: `all`, `any`, `not`
 *
 * @param value {String} url
 * @returns {Boolean}
 * @example
 * be.ftpsUrl('ftps://ftp.google.com') // true;
 * be.not.ftpsUrl('ftps://ftp.google.com') // false;
 * be.any.ftpsUrl('ftps://ftp.google.com', 'http://') // true;
 * be.all.ftpsUrl('ftps://ftp.google.com', 'http://') // false;
 */
Urls.ftpsUrl = (value) => {
    return Urls.url(value) && /^ftps:/i.test(value);
};

Urls = Interface.create(Urls);

module.exports = Urls;