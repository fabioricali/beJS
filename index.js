/**
 * Created by Fabio on 11/06/2017.
 */

var ValidityJS = {
    /**
     * Check if is valid boolean
     * @param value
     * @returns {boolean}
     */
    isBoolean: function (value) {
        return typeof value === 'boolean';
    },

    /**
     * Check if is valid number
     * @param value
     * @returns {boolean}
     */
    isNumber: function (value) {
        return typeof value === 'number';
    },

    /**
     * Check if is valid string
     * @param value
     * @returns {boolean}
     */
    isString: function (value) {
        return typeof value === 'string';
    },

    /**
     * Check if is undefined value
     * @param value
     * @returns {boolean}
     */
    isUndefined: function (value) {
        return typeof value === 'undefined';
    },

    /**
     * Check if is null
     * @param value
     * @returns {boolean}
     */
    isNull: function (value) {
        return value === null;
    },

    /**
     * Check if is a object
     * @param value
     * @returns {boolean}
     */
    isObject: function (value) {
        return typeof value === 'object';
    },

    /**
     * Check if is valid string url
     * @param value
     * @returns {boolean}
     */
    isUrl: function (value) {
        // https://gist.github.com/dperini/729294
        return /^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    },

    /**
     * Check if is a HTTP url
     * @param value
     * @returns {*|boolean}
     */
    isHttpUrl: function (value) {
        return this.isUrl(value) && /^http:/i.test(value);
    },

    /**
     * Check if is a HTTPS url
     * @param value
     * @returns {*|boolean}
     */
    isHttpsUrl: function (value) {
        return this.isUrl(value) && /^https:/i.test(value);
    },

    /**
     * Check if is a FTP urls
     * @param value
     * @returns {*|boolean}
     */
    isFtpUrl: function (value) {
        return this.isUrl(value) && /^ftp:/i.test(value);
    },

    /**
     * Check if is a FTPS urls
     * @param value
     * @returns {*|boolean}
     */
    isFtpsUrl: function (value) {
        return this.isUrl(value) && /^ftps:/i.test(value);
    },

    /**
     * Check if is valid email
     * @param value
     * @returns {boolean}
     */
    isEmail: function (value) {
        // https://emailregex.com/
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    },

    /**
     * Check if a number is integer
     * @param value
     * @returns {*|boolean}
     */
    isInt: function (value) {
        return this.isNumber(value) &&
                isFinite(value) &&
                Math.floor(value) === value;
    },

    /**
     * Check if is NaN
     * @param value
     * @returns {*|boolean}
     */
    isNaN: function (value) {
        return this.isNumber(value) &&
            isNaN(value);
    }
};

module.exports = ValidityJS;