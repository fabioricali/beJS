/**
 * Created by Fabio on 18/06/2017.
 */
var Urls = {};

/**
 * Check if is valid string url
 * @link https://gist.github.com/dperini/729294
 * @param value
 * @returns {boolean}
 */
Urls.url = function (value) {
    return /^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
};

/**
 * Check if is a HTTP url
 * @param value
 * @returns {*|boolean}
 */
Urls.httpUrl = function (value) {
    return Urls.url(value) && /^http:/i.test(value);
};

/**
 * Check if is a HTTPS url
 * @param value
 * @returns {*|boolean}
 */
Urls.httpsUrl = function (value) {
    return Urls.url(value) && /^https:/i.test(value);
};

/**
 * Check if url is encoded
 * @param value
 * @returns {boolean}
 */
Urls.urlEncoded = function (value) {
    return /%[0-9a-f]{2}/i.test(value);
};

/**
 * Check if is a FTP urls
 * @param value
 * @returns {*|boolean}
 */
Urls.ftpUrl = function (value) {
    return Urls.url(value) && /^ftp:/i.test(value);
};

/**
 * Check if is a FTPS urls
 * @param value
 * @returns {*|boolean}
 */
Urls.ftpsUrl = function (value) {
    return Urls.url(value) && /^ftps:/i.test(value);
};

module.exports = Urls;