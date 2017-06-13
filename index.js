/**
 * Created by Fabio on 11/06/2017.
 */

;(function () {

    var helper = {
        getUserAgent: function () {
            if(arguments.length)
                return arguments[0];
            else {
                if(!be.navigator())
                    throw new Error('test allowed only in browser environment');
                return navigator.userAgent;
            }
        }
    };

    /**
     * be class
     */
    var be = {
        /**
         * Check if is valid boolean
         * @param value
         * @returns {boolean}
         */
        boolean: function (value) {
            return typeof value === 'boolean';
        },

        /**
         * Check if is valid number
         * @param value
         * @returns {boolean}
         */
        number: function (value) {
            return typeof value === 'number' && !isNaN(value);
        },

        /**
         * Check if is valid string
         * @param value
         * @returns {boolean}
         */
        string: function (value) {
            return typeof value === 'string';
        },

        /**
         * Check if is undefined value
         * @param value
         * @returns {boolean}
         */
        undefined: function (value) {
            return typeof value === 'undefined';
        },

        /**
         * Check if is null
         * @param value
         * @returns {boolean}
         */
        'null': function (value) {
            return value === null;
        },

        /**
         * Check if is a object
         * @param value
         * @returns {boolean}
         */
        object: function (value) {
            return typeof value === 'object';
        },

        /**
         * Check if is an array
         * @param value
         * @returns {boolean}
         */
        array: function (value) {
            return value instanceof Array;
        },

        /**
         * Check if is valid string url
         * @param value
         * @returns {boolean}
         */
        url: function (value) {
            // https://gist.github.com/dperini/729294
            return /^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
        },

        /**
         * Check if is a HTTP url
         * @param value
         * @returns {*|boolean}
         */
        httpUrl: function (value) {
            return this.url(value) && /^http:/i.test(value);
        },

        /**
         * Check if is a HTTPS url
         * @param value
         * @returns {*|boolean}
         */
        httpsUrl: function (value) {
            return this.url(value) && /^https:/i.test(value);
        },

        /**
         * Check if is a FTP urls
         * @param value
         * @returns {*|boolean}
         */
        ftpUrl: function (value) {
            return this.url(value) && /^ftp:/i.test(value);
        },

        /**
         * Check if is a FTPS urls
         * @param value
         * @returns {*|boolean}
         */
        ftpsUrl: function (value) {
            return this.url(value) && /^ftps:/i.test(value);
        },

        /**
         * Check if is valid email
         * @param value
         * @returns {boolean}
         */
        email: function (value) {
            // https://emailregex.com/
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        },

        /**
         * Check if a number is integer
         * @param value
         * @returns {*|boolean}
         */
        int: function (value) {
            return this.number(value) &&
                isFinite(value) &&
                Math.floor(value) === value;
        },

        /**
         * Check if is float number
         * @param value
         * @returns {*|boolean}
         */
        float: function (value) {
            return this.number(value) &&
                !this.int(value);
        },

        /**
         * Check if is NaN
         * @param value
         * @returns {*|boolean}
         */
        nan: function (value) {
            return isNaN(value);
        },

        /**
         * Check if is a valid MD5 hash string
         * @param value
         * @returns {boolean}
         */
        md5: function (value) {
            return /^[a-f0-9]{32}$/.test(value);
        },

        /**
         * Check if is a valid SHA1 hash string
         * @param value
         * @returns {boolean}
         */
        sha1: function (value) {
            return /^[a-f0-9]{40}$/.test(value);
        },

        /**
         * Check if is a JSON string
         * @param value
         * @returns {boolean}
         */
        json: function (value) {
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
        date: function (value) {
            return value instanceof Date;
        },

        /**
         * Check if is date string
         * @param value
         * @returns {boolean}
         */
        dateString: function (value) {
            var date = Date.parse(value);
            return !isNaN(date);
        },

        /**
         * Check if is a even number
         * @param value
         * @returns {*|boolean}
         */
        even: function (value) {
            return this.number(value) &&
                value % 2 === 0;
        },

        /**
         * Check if is an odd number
         * @param value
         * @returns {*|boolean}
         */
        odd: function (value) {
            return this.number(value) &&
                !this.even(value);
        },

        /**
         * Check if is a hexadecimal
         * @param value
         * @returns {boolean}
         */
        hex: function (value) {
            return /^(?:0x)?[a-f0-9]+$/.test(value);
        },

        /**
         * Check if is a hexadecimal color
         * @param value
         * @returns {boolean}
         */
        hexColor: function (value) {
            try {
                value = value.replace('#', '');
                return this.hex(value) &&
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
        'function': function (value) {
            return typeof value === 'function';
        },

        /**
         * Check if is a positive number
         * @param value
         * @returns {*|boolean}
         */
        positive: function (value) {
            return this.number(value) &&
                value > 0;
        },

        /**
         * Check if is a negative number
         * @param value
         * @returns {*|boolean}
         */
        negative: function (value) {
            return this.number(value) &&
                value < 0;
        },

        /**
         * Check if is alphanumeric string
         * @param value
         * @returns {boolean|*}
         */
        alphanumeric: function (value) {
            return /^[a-z0-9]+$/i.test(value) &&
                this.string(value);
        },

        /**
         * Check if is a valid IPv4
         * @param value
         * @returns {boolean}
         */
        ipv4: function (value) {
            return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
        },

        /**
         * Check if is a valid IPv6
         * @param value
         * @returns {boolean}
         */
        ipv6: function (value) {
            return /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value);
        },

        /**
         * Check if is a valid ip string
         * @param value
         * @returns {*|boolean}
         */
        ip: function (value) {
            return this.ipv4(value) || this.ipv6(value);
        },

        /**
         * Check if is base64 encoded string
         * @param value
         * @returns {boolean}
         */
        base64: function (value) {
            return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value);
        },

        /**
         * Check if is empty
         * @param value
         * @returns {boolean}
         */
        empty: function (value) {
            if (this.null(value)) return true;
            if (this.undefined(value)) return true;
            if (this.number(value)) return false;
            if (this.function(value)) return false;
            if (this.boolean(value)) return false;

            if (this.object(value)) {
                if (value.length > 0)    return false;
                if (value.length === 0)  return true;

                for (var key in value) {
                    if (Object.prototype.hasOwnProperty.call(value, key)) return false;
                }
            }

            return !(this.string(value) && value.length > 0);
        },

        /**
         * Check if is a valid semver string
         * @param value
         * @returns {boolean}
         */
        semVer: function (value) {
            return /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(value);
        },

        /**
         * Check if server environment
         * @returns {boolean}
         */
        serverEnv: function () {
            return typeof process === 'object';
        },

        /**
         * Check if browser environment
         * @returns {boolean}
         */
        browserEnv: function () {
            return typeof window !== 'undefined';
        },

        /**
         * Check if is iOS device
         * @returns {boolean}
         */
        ios: function () {
            var userAgent = helper.getUserAgent.apply(this, arguments);
            return (/iPhone|iPad|iPod/i).test(userAgent);
        },

        /**
         * Check if is Android device
         * @returns {boolean}
         */
        android: function () {
            var userAgent = helper.getUserAgent.apply(this, arguments);
            return (/Android/i).test(userAgent);
        },

        /**
         * Check if exists navigator object
         * @returns {*|boolean}
         */
        navigator: function () {
            return this.browserEnv() && typeof window.navigator !== 'undefined';
        },

        /**
         * Firefox detecting
         * @returns {boolean}
         */
        firefox: function () {
            var userAgent = helper.getUserAgent.apply(this, arguments);
            return (/Firefox/i).test(userAgent);
        },

        /**
         * Chrome detecting
         * @returns {boolean}
         */
        chrome: function () {
            var userAgent = helper.getUserAgent.apply(this, arguments);
            return (/Chrome/i).test(userAgent);
        },

        /**
         * Safari detecting
         * @returns {boolean}
         */
        safari: function () {
            var userAgent = helper.getUserAgent.apply(this, arguments);
            return (/Safari/i).test(userAgent.replace('Chrome', '')) &&
                !(/Chrome/i).test(userAgent.replace('Safari', ''));
        },

        /**
         * Explorer detecting
         * @returns {boolean}
         */
        ie: function () {
            var userAgent = helper.getUserAgent.apply(this, arguments);
            return (/MSIE|Trident/i).test(userAgent);
        }


};

    if (be.serverEnv())
        module.exports = be;
    else
        window.ValidityJS = be;
})();