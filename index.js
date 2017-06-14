/**
 * Created by Fabio on 11/06/2017.
 */

;(function () {

    /**
     * helper class
     */
    var helper = {};

    /**
     * Get user agent
     * @private
     * @returns {*}
     */
    helper.getUserAgent = function () {
        if (arguments.length)
            return arguments[0];
        else {
            if (!be.navigator())
                throw new Error('test allowed only in browser environment');
            return navigator.userAgent;
        }
    };

    /**
     * Convert object to string
     * @param object
     * @returns {*}
     */
    helper.objectToString = function (object) {
        return Object.prototype.toString.call(object);
    };

    /**
     * be class
     */
    var be = {};
    be.each = {};
    be.some = {};

    /**
     * Check [object ?] class
     * @param object
     * @param className
     * @returns {boolean}
     */
    be.classOf = function (object, className) {
        return helper.objectToString(object).toLowerCase() === '[object ' + className + ']'.toLowerCase();
    };

    be.classOf.multiple = false;

    /**
     * Check if is valid boolean
     * @param value
     * @returns {boolean}
     */
    be.boolean = function (value) {
        return be.classOf(value, 'boolean');
    };

    /**
     * Check if is valid number
     * @param value
     * @returns {boolean}
     */
    be.number = function (value) {
        return be.classOf(value, 'number') && !isNaN(value);
    };

    /**
     * Check if is valid string
     * @param value
     * @returns {boolean}
     */
    be.string = function (value) {
        return be.classOf(value, 'string');
    };

    /**
     * Check if is undefined value
     * @param value
     * @returns {boolean}
     */
    be.undefined = function (value) {
        return be.classOf(value, 'undefined');
    };

    /**
     * Check if is null
     * @param value
     * @returns {boolean}
     */
    be['null'] = function (value) {
        return be.classOf(value, 'null');
    };

    /**
     * Check if is a object
     * @param value
     * @returns {boolean}
     */
    be.object = function (value) {
        return be.classOf(value, 'object') && !be.array(value);
    };

    /**
     * Check if is an array
     * @param value
     * @returns {boolean}
     */
    be.array = function (value) {
        return be.classOf(value, 'array');
    };

    /**
     * Check if is valid string url
     * @param value
     * @returns {boolean}
     */
    be.url = function (value) {
        // https://gist.github.com/dperini/729294
        return /^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    };

    /**
     * Check if is a HTTP url
     * @param value
     * @returns {*|boolean}
     */
    be.httpUrl = function (value) {
        return be.url(value) && /^http:/i.test(value);
    };

    /**
     * Check if is a HTTPS url
     * @param value
     * @returns {*|boolean}
     */
    be.httpsUrl = function (value) {
        return be.url(value) && /^https:/i.test(value);
    };

    /**
     * Check if is a FTP urls
     * @param value
     * @returns {*|boolean}
     */
    be.ftpUrl = function (value) {
        return be.url(value) && /^ftp:/i.test(value);
    };

    /**
     * Check if is a FTPS urls
     * @param value
     * @returns {*|boolean}
     */
    be.ftpsUrl = function (value) {
        return be.url(value) && /^ftps:/i.test(value);
    };

    /**
     * Check if is valid email
     * @param value
     * @returns {boolean}
     */
    be.email = function (value) {
        // https://emailregex.com/
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    };

    /**
     * Check if a number is integer
     * @param value
     * @returns {*|boolean}
     */
    be.int = function (value) {
        return be.number(value) &&
            isFinite(value) &&
            Math.floor(value) === value;
    };

    /**
     * Check if is float number
     * @param value
     * @returns {*|boolean}
     */
    be.float = function (value) {
        return be.number(value) &&
            !be.int(value);
    };

    /**
     * Check if is NaN
     * @param value
     * @returns {*|boolean}
     */
    be.nan = function (value) {
        return isNaN(value);
    };

    /**
     * Check if is a valid MD5 hash string
     * @param value
     * @returns {boolean}
     */
    be.md5 = function (value) {
        return /^[a-f0-9]{32}$/.test(value);
    };

    /**
     * Check if is a valid SHA1 hash string
     * @param value
     * @returns {boolean}
     */
    be.sha1 = function (value) {
        return /^[a-f0-9]{40}$/.test(value);
    };

    /**
     * Check if is a JSON string
     * @param value
     * @returns {boolean}
     */
    be.json = function (value) {
        try {
            JSON.parse(value);
            return true;
        } catch (e) {
            return false;
        }
    };

    /**
     * Check if is date object
     * @param value
     * @returns {boolean}
     */
    be.date = function (value) {
        return be.classOf(value, 'date');
    };

    /**
     * Check if is date string
     * @param value
     * @returns {boolean}
     */
    be.dateString = function (value) {
        var date = Date.parse(value);
        return !isNaN(date);
    };

    /**
     * Check if is a even number
     * @param value
     * @returns {*|boolean}
     */
    be.even = function (value) {
        return be.number(value) &&
            value % 2 === 0;
    };

    /**
     * Check if is an odd number
     * @param value
     * @returns {*|boolean}
     */
    be.odd = function (value) {
        return be.number(value) &&
            !be.even(value);
    };

    /**
     * Check if is a hexadecimal
     * @param value
     * @returns {boolean}
     */
    be.hex = function (value) {
        return /^(?:0x)?[a-f0-9]+$/.test(value);
    };

    /**
     * Check if is a hexadecimal color
     * @param value
     * @returns {boolean}
     */
    be.hexColor = function (value) {
        try {
            value = value.replace('#', '');
            return be.hex(value) &&
                (value.length === 3 || value.length === 6);
        } catch (e) {
            return false;
        }
    };

    /**
     * Check if is a function
     * @param value
     * @returns {boolean}
     */
    be['function'] = function (value) {
        return be.classOf(value, 'function');
    };

    /**
     * Check if is a positive number
     * @param value
     * @returns {*|boolean}
     */
    be.positive = function (value) {
        return be.number(value) &&
            value > 0;
    };

    /**
     * Check if is a negative number
     * @param value
     * @returns {*|boolean}
     */
    be.negative = function (value) {
        return be.number(value) &&
            value < 0;
    };

    /**
     * Check if is alphanumeric string
     * @param value
     * @returns {boolean|*}
     */
    be.alphanumeric = function (value) {
        return /^[a-z0-9]+$/i.test(value) &&
            be.string(value);
    };

    /**
     * Check if is a valid IPv4
     * @param value
     * @returns {boolean}
     */
    be.ipv4 = function (value) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
    };

    /**
     * Check if is a valid IPv6
     * @param value
     * @returns {boolean}
     */
    be.ipv6 = function (value) {
        return /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value);
    };

    /**
     * Check if is a valid ip string
     * @param value
     * @returns {*|boolean}
     */
    be.ip = function (value) {
        return be.ipv4(value) || be.ipv6(value);
    };

    /**
     * Check if is base64 encoded string
     * @param value
     * @returns {boolean}
     */
    be.base64 = function (value) {
        return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value);
    };

    /**
     * Check if is empty
     * @param value
     * @returns {boolean}
     */
    be.empty = function (value) {
        if (be.null(value)) return true;
        if (be.undefined(value)) return true;
        if (be.number(value)) return false;
        if (be.function(value)) return false;
        if (be.boolean(value)) return false;

        if (be.object(value) || be.array(value)) {
            if (value.length > 0)    return false;
            if (value.length === 0)  return true;

            for (var key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) return false;
            }
        }

        return !(be.string(value) && value.length > 0);
    };

    /**
     * Check if both arguments
     * @param value
     * @param other
     * @returns {boolean}
     */
    be.sameType = function (value, other) {
        return helper.objectToString(value) === helper.objectToString(other);
    };

    be.sameType.multiple = false;

    /**
     * Check if is a valid semver string
     * @param value
     * @returns {boolean}
     */
    be.semVer = function (value) {
        return /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(value);
    };

    /**
     * Check if element is in array
     * @param value
     * @param array
     * @returns {boolean}
     */
    be.inArray = function (value, array) {
        if(!be.array(array)) return false;
        for(var i in array){
            if(array.hasOwnProperty(i) && array[i] === value)
                return true;
        }
        return false;
    };

    be.inArray.multiple = false;

    /**
     * Check if is a property of an object
     * @param value
     * @param object
     * @returns {boolean}
     */
    be.propertyOf = function (value, object) {
        if(!be.object(object)) return false;
        return object.hasOwnProperty(value);
    };

    be.propertyOf.multiple = false;

    /**
     * Count properties of an object
     * @param object
     * @param value
     * @returns {boolean}
     */
    be.propertyCount = function (object, value) {
        if(!be.object(object) || !be.number(value)) return false;
        var n = 0;
        for(var i in object){
            if(object.hasOwnProperty(i) && ++n > value)
                return false;
        }
        return n === value;
    };

    be.propertyCount.multiple = false;

    /**
     * Check if is a valid RegExp
     * @param value
     * @returns {boolean}
     */
    be.regexp = function (value) {
        return be.classOf(value,'regexp');
    };

    /*
     Environment check
     */

    /**
     * Check if server environment
     * @returns {boolean}
     */
    be.serverEnv = function () {
        return typeof process !== 'undefined';
    };

    be.serverEnv.multiple = false;

    /**
     * Check if browser environment
     * @returns {boolean}
     */
    be.browserEnv = function () {
        return typeof window !== 'undefined';
    };

    be.browserEnv.multiple = false;

    /**
     * Check if is iOS device
     * @returns {boolean}
     */
    be.ios = function () {
        var userAgent = helper.getUserAgent.apply(this, arguments);
        return (/iPhone|iPad|iPod/i).test(userAgent);
    };

    be.ios.multiple = false;

    /**
     * Check if is Android device
     * @returns {boolean}
     */
    be.android = function () {
        var userAgent = helper.getUserAgent.apply(this, arguments);
        return (/Android/i).test(userAgent);
    };

    be.android.multiple = false;

    /**
     * Check if exists navigator object
     * @returns {*|boolean}
     */
    be.navigator = function () {
        return be.browserEnv() && typeof window.navigator !== 'undefined';
    };

    be.navigator.multiple = false;

    /**
     * Firefox detecting
     * @returns {boolean}
     */
    be.firefox = function () {
        var userAgent = helper.getUserAgent.apply(this, arguments);
        return (/Firefox/i).test(userAgent);
    };

    be.firefox.multiple = false;

    /**
     * Chrome detecting
     * @returns {boolean}
     */
    be.chrome = function () {
        var userAgent = helper.getUserAgent.apply(this, arguments);
        return (/Chrome/i).test(userAgent);
    };

    be.chrome.multiple = false;

    /**
     * Safari detecting
     * @returns {boolean}
     */
    be.safari = function () {
        var userAgent = helper.getUserAgent.apply(this, arguments);
        return (/Safari/i).test(userAgent.replace('Chrome', '')) &&
            !(/Chrome/i).test(userAgent.replace('Safari', ''));
    };

    be.safari.multiple = false;

    /**
     * Explorer detecting
     * @returns {boolean}
     */
    be.ie = function () {
        var userAgent = helper.getUserAgent.apply(this, arguments);
        return (/MSIE|Trident/i).test(userAgent);
    };

    be.ie.multiple = false;

    /**
     * Create extra interfaces
     */
    (function () {
        for(var i in be){
            if(be.hasOwnProperty(i) && be.function(be[i]) && be.undefined(be[i].multiple)){
                be.each[i] = (function (j) {
                    return function () {
                        for(var a in arguments) {
                            if (arguments.hasOwnProperty(a) && !be[j].call(this, arguments[a]))
                                return false;
                        }
                        return true;
                    }
                })(i);

                be.some[i] = (function (j) {
                    return function () {
                        for(var a in arguments) {
                            if (arguments.hasOwnProperty(a) && be[j].call(this, arguments[a]))
                                return true;
                        }
                        return false;
                    }
                })(i);
            }
        }
    })();


    if (be.serverEnv())
        module.exports = be;
    else
        window.be = be;
})();