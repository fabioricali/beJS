/**
 * Created by Fabio on 11/06/2017.
 */

/**
 * ValidityJS class
 * @type {{isBoolean: ValidityJS.isBoolean, isNumber: ValidityJS.isNumber, isString: ValidityJS.isString, isUndefined: ValidityJS.isUndefined, isNull: ValidityJS.isNull, isObject: ValidityJS.isObject, isUrl: ValidityJS.isUrl, isHttpUrl: ValidityJS.isHttpUrl, isHttpsUrl: ValidityJS.isHttpsUrl, isFtpUrl: ValidityJS.isFtpUrl, isFtpsUrl: ValidityJS.isFtpsUrl, isEmail: ValidityJS.isEmail, isInt: ValidityJS.isInt, isFloat: ValidityJS.isFloat, isNaN: ValidityJS.isNaN, isMD5: ValidityJS.isMD5, isSHA1: ValidityJS.isSHA1, isJSON: ValidityJS.isJSON, isDate: ValidityJS.isDate, isDateString: ValidityJS.isDateString, isEven: ValidityJS.isEven, isOdd: ValidityJS.isOdd, isHex: ValidityJS.isHex, isHexColor: ValidityJS.isHexColor, isFunction: ValidityJS.isFunction, isPositive: ValidityJS.isPositive, isNegative: ValidityJS.isNegative, isAlphanumeric: ValidityJS.isAlphanumeric, isIPv4: ValidityJS.isIPv4, isIPv6: ValidityJS.isIPv6, isBase64: ValidityJS.isBase64, isEmpty: ValidityJS.isEmpty}}
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
        return typeof value === 'number' && !isNaN(value);
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
     * Check if is float number
     * @param value
     * @returns {*|boolean}
     */
    isFloat: function (value) {
        return this.isNumber(value) &&
            !this.isNaN(value) &&
            !this.isInt(value);
    },

    /**
     * Check if is NaN
     * @param value
     * @returns {*|boolean}
     */
    isNaN: function (value) {
        return isNaN(value);
    },

    /**
     * Check if is a valid MD5 hash string
     * @param value
     * @returns {boolean}
     */
    isMD5: function (value) {
        return /^[a-f0-9]{32}$/.test(value);
    },

    /**
     * Check if is a valid SHA1 hash string
     * @param value
     * @returns {boolean}
     */
    isSHA1: function (value) {
        return /^[a-f0-9]{40}$/.test(value);
    },

    /**
     * Check if is a JSON string
     * @param value
     * @returns {boolean}
     */
    isJSON: function (value) {
        try {
            JSON.parse(value);
            return true;
        } catch (e) {
            return false;
        }
    },

    /**
     * Check if is date object
     * @param value
     * @returns {boolean}
     */
    isDate: function (value) {
        return value instanceof Date;
    },

    /**
     * Check if is date string
     * @param value
     * @returns {boolean}
     */
    isDateString: function (value) {
        var date = Date.parse(value);
        return !isNaN(date);
    },

    /**
     * Check if is a even number
     * @param value
     * @returns {*|boolean}
     */
    isEven: function (value) {
        return this.isNumber(value) &&
            value % 2 === 0;
    },

    /**
     * Check if is an odd number
     * @param value
     * @returns {*|boolean}
     */
    isOdd: function (value) {
        return this.isNumber(value) &&
            !this.isEven(value);
    },

    /**
     * Check if is a hexadecimal
     * @param value
     * @returns {boolean}
     */
    isHex: function (value) {
        return /^(?:0x)?[a-f0-9]+$/.test(value);
    },

    /**
     * Check if is a hexadecimal color
     * @param value
     * @returns {boolean}
     */
    isHexColor: function (value) {
        try {
            value = value.replace('#', '');
            return this.isHex(value) &&
                (value.length === 3 || value.length === 6);
        } catch (e) {
            return false;
        }
    },

    /**
     * Check if is a function
     * @param value
     * @returns {boolean}
     */
    isFunction: function (value) {
        return typeof value === 'function';
    },

    /**
     * Check if is a positive number
     * @param value
     * @returns {*|boolean}
     */
    isPositive: function (value) {
        return this.isNumber(value) &&
            value > 0;
    },

    /**
     * Check if is a negative number
     * @param value
     * @returns {*|boolean}
     */
    isNegative: function (value) {
        return this.isNumber(value) &&
            value < 0;
    },

    /**
     * Check if is alphanumeric string
     * @param value
     * @returns {boolean|*}
     */
    isAlphanumeric: function (value) {
        return /^[a-z0-9]+$/i.test(value) &&
            this.isString(value);
    },

    /**
     * Check if is a valid IPv4
     * @param value
     * @returns {boolean}
     */
    isIPv4: function (value) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    },

    /**
     * Check if is a valid IPv6
     * @param value
     * @returns {boolean}
     */
    isIPv6: function (value) {
        return /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value);
    },

    /**
     * Check if is base64 encoded string
     * @param value
     * @returns {boolean}
     */
    isBase64: function (value) {
        return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value);
    },

    /**
     * Check if is empty
     * @param value
     * @returns {boolean}
     */
    isEmpty: function (value) {
        if (this.isNull(value)) return true;
        if (this.isUndefined(value)) return true;
        if (this.isNumber(value)) return false;
        if (this.isFunction(value)) return false;
        if (this.isBoolean(value)) return false;

        if (this.isObject(value)) {
            if (value.length > 0)    return false;
            if (value.length === 0)  return true;

            for (var key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) return false;
            }
        }

        return !(this.isString(value) && value.length > 0);
    }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = ValidityJS;
else
    window.ValidityJS = ValidityJS;