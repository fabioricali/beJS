(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.be = f();
    }
})(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
    }({
        1: [ function(require, module, exports) {
            "use strict";
            module.exports = require("./src/be");
        }, {
            "./src/be": 3
        } ],
        2: [ function(require, module, exports) {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return [];
            };
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        }, {} ],
        3: [ function(require, module, exports) {
            "use strict";
            var Helpers = require("./helpers");
            var Interface = require("./interface");
            var Checks = {
                Strings: require("./checks/strings"),
                Types: require("./checks/types"),
                Numbers: require("./checks/numbers"),
                Envs: require("./checks/envs"),
                Objects: require("./checks/objects"),
                Mixed: require("./checks/mixed"),
                Arrays: require("./checks/arrays"),
                Dates: require("./checks/dates"),
                Urls: require("./checks/urls"),
                Hashes: require("./checks/hashes")
            };
            var be = {};
            be.version = "0.0.0";
            be.all = {};
            be.any = {};
            be._helpers = Helpers;
            (function() {
                var _loop = function _loop(c) {
                    if (Checks.hasOwnProperty(c)) {
                        var _loop2 = function _loop2(f) {
                            if (Checks[c].hasOwnProperty(f) && Checks.Types.function(Checks[c][f])) {
                                be[f] = function() {
                                    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                                        params[_key] = arguments[_key];
                                    }
                                    return Checks[c][f].apply(null, params);
                                };
                            }
                        };
                        for (var f in Checks[c]) {
                            _loop2(f);
                        }
                    }
                };
                for (var c in Checks) {
                    _loop(c);
                }
                be = Interface.create(be);
                for (var m in Checks) {
                    if (Checks.hasOwnProperty(m)) {
                        be[m] = Checks[m];
                    }
                }
                module.exports = be;
            })();
        }, {
            "./checks/arrays": 4,
            "./checks/dates": 5,
            "./checks/envs": 6,
            "./checks/hashes": 7,
            "./checks/mixed": 8,
            "./checks/numbers": 9,
            "./checks/objects": 10,
            "./checks/strings": 11,
            "./checks/types": 12,
            "./checks/urls": 13,
            "./helpers": 14,
            "./interface": 15
        } ],
        4: [ function(require, module, exports) {
            "use strict";
            var Types = require("./types");
            var Interface = require("../interface");
            var Arrays = {};
            Arrays.inArray = function(value, array) {
                if (!Types.array(array)) return false;
                for (var i in array) {
                    if (array.hasOwnProperty(i) && array[i] === value) return true;
                }
                return false;
            };
            Arrays.inArray.multiple = false;
            Arrays = Interface.create(Arrays);
            module.exports = Arrays;
        }, {
            "../interface": 15,
            "./types": 12
        } ],
        5: [ function(require, module, exports) {
            "use strict";
            var Types = require("./types");
            var Numbers = require("./numbers");
            var Interface = require("../interface");
            var Dates = {};
            var _days = [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ];
            var _months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
            Dates.dateString = function(value) {
                var date = Date.parse(value);
                return !isNaN(date);
            };
            Dates.today = function(date) {
                var now = new Date();
                return Types.date(date) && now.toDateString() === date.toDateString();
            };
            Dates.tomorrow = function(date) {
                var now = new Date();
                now.setDate(now.getDate() + 1);
                return Types.date(date) && now.toDateString() === date.toDateString();
            };
            Dates.yesterday = function(date) {
                var now = new Date();
                now.setDate(now.getDate() - 1);
                return Types.date(date) && now.toDateString() === date.toDateString();
            };
            Dates.past = function(date) {
                var now = new Date().getTime();
                return Types.date(date) && now > date.getTime();
            };
            Dates.future = function(date) {
                return Types.date(date) && !Dates.past(date);
            };
            Dates.day = function(date, day) {
                return Types.date(date) && Types.string(day) && _days[date.getDay()] === day.toLowerCase();
            };
            Dates.day.multiple = false;
            Dates.month = function(date, month) {
                return Types.date(date) && Types.string(month) && _months[date.getMonth()] === month.toLowerCase();
            };
            Dates.month.multiple = false;
            Dates.year = function(date, year) {
                return Types.date(date) && Types.number(year) && date.getFullYear() === year;
            };
            Dates.year.multiple = false;
            Dates.leapYear = function(year) {
                return Types.number(year) && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
            };
            Dates.weekend = function(date) {
                return Dates.day(date, "saturday") || Dates.day(date, "sunday");
            };
            Dates.weekday = function(date) {
                return Types.date(date) && !Dates.weekend(date);
            };
            Dates.dateBetween = function(date, startDate, endDate) {
                return Types.all.date(date, startDate, endDate) && Numbers.between(date.getTime(), startDate.getTime(), endDate.getTime());
            };
            Dates.dateBetween.multiple = false;
            Dates.dayLightSavingTime = function(date) {
                if (!Types.date(date)) return false;
                var jan = new Date(date.getFullYear(), 0, 1);
                var jul = new Date(date.getFullYear(), 6, 1);
                var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
                return date.getTimezoneOffset() < stdTimezoneOffset;
            };
            Dates = Interface.create(Dates);
            module.exports = Dates;
        }, {
            "../interface": 15,
            "./numbers": 9,
            "./types": 12
        } ],
        6: [ function(require, module, exports) {
            (function(process) {
                "use strict";
                var Helpers = require("../helpers");
                var Interface = require("../interface");
                var Envs = {};
                Envs.commonjsEnv = function() {
                    return typeof process !== "undefined";
                };
                Envs.commonjsEnv.multiple = false;
                Envs.browserEnv = function() {
                    return typeof window !== "undefined";
                };
                Envs.browserEnv.multiple = false;
                Envs.amdEnv = function() {
                    return typeof define === "function" && define.amd;
                };
                Envs.amdEnv.multiple = false;
                Envs.ios = function() {
                    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                        params[_key] = arguments[_key];
                    }
                    var userAgent = Helpers.getUserAgent.apply(undefined, params);
                    return /iPhone|iPad|iPod/i.test(userAgent);
                };
                Envs.ios.multiple = false;
                Envs.android = function() {
                    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        params[_key2] = arguments[_key2];
                    }
                    var userAgent = Helpers.getUserAgent.apply(undefined, params);
                    return /Android/i.test(userAgent);
                };
                Envs.android.multiple = false;
                Envs.navigator = function() {
                    return Envs.browserEnv() && typeof window.navigator !== "undefined";
                };
                Envs.navigator.multiple = false;
                Envs.firefox = function() {
                    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        params[_key3] = arguments[_key3];
                    }
                    var userAgent = Helpers.getUserAgent.apply(undefined, params);
                    return /Firefox/i.test(userAgent);
                };
                Envs.firefox.multiple = false;
                Envs.chrome = function() {
                    for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                        params[_key4] = arguments[_key4];
                    }
                    var userAgent = Helpers.getUserAgent.apply(undefined, params);
                    return /Chrome/i.test(userAgent);
                };
                Envs.chrome.multiple = false;
                Envs.safari = function() {
                    for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                        params[_key5] = arguments[_key5];
                    }
                    var userAgent = Helpers.getUserAgent.apply(undefined, params);
                    return /Safari/i.test(userAgent.replace("Chrome", "")) && !/Chrome/i.test(userAgent.replace("Safari", ""));
                };
                Envs.safari.multiple = false;
                Envs.ie = function() {
                    for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                        params[_key6] = arguments[_key6];
                    }
                    var userAgent = Helpers.getUserAgent.apply(undefined, params);
                    return /MSIE|Trident/i.test(userAgent);
                };
                Envs.ie.multiple = false;
                Envs = Interface.create(Envs);
                module.exports = Envs;
            }).call(this, require("_process"));
        }, {
            "../helpers": 14,
            "../interface": 15,
            _process: 2
        } ],
        7: [ function(require, module, exports) {
            "use strict";
            var Interface = require("../interface");
            var Hashes = {};
            Hashes.md5 = function(value) {
                return /^[a-f0-9]{32}$/.test(value);
            };
            Hashes.sha1 = function(value) {
                return /^[a-f0-9]{40}$/.test(value);
            };
            Hashes = Interface.create(Hashes);
            module.exports = Hashes;
        }, {
            "../interface": 15
        } ],
        8: [ function(require, module, exports) {
            "use strict";
            var Types = require("./types");
            var Interface = require("../interface");
            var Mixed = {};
            Mixed.email = function(value) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            };
            Mixed.hex = function(value) {
                return /^(?:0x)?[a-f0-9]+$/.test(value);
            };
            Mixed.hexColor = function(value) {
                try {
                    value = value.replace("#", "");
                    return Mixed.hex(value) && (value.length === 3 || value.length === 6);
                } catch (e) {
                    return false;
                }
            };
            Mixed.ipv4 = function(value) {
                return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);
            };
            Mixed.ipv6 = function(value) {
                return /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(value);
            };
            Mixed.ip = function(value) {
                return Mixed.ipv4(value) || Mixed.ipv6(value);
            };
            Mixed.base64 = function(value) {
                return /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value);
            };
            Mixed.semVer = function(value) {
                return /^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(value);
            };
            Mixed.equal = function(value, other) {
                if (Types.all.number(value, other)) return value === other; else if (Types.all.string(value, other) || Types.all.regexp(value, other)) return value + "" === "" + other; else if (Types.all.boolean(value, other)) return value === other; else return false;
            };
            Mixed.equal.multiple = false;
            Mixed = Interface.create(Mixed);
            module.exports = Mixed;
        }, {
            "../interface": 15,
            "./types": 12
        } ],
        9: [ function(require, module, exports) {
            "use strict";
            var Types = require("./types");
            var Interface = require("../interface");
            var Numbers = {};
            Numbers.int = function(value) {
                return Types.number(value) && isFinite(value) && Math.floor(value) === value;
            };
            Numbers.float = function(value) {
                return Types.number(value) && !Numbers.int(value);
            };
            Numbers.nan = function(value) {
                return isNaN(value);
            };
            Numbers.even = function(value) {
                return Types.number(value) && value % 2 === 0;
            };
            Numbers.odd = function(value) {
                return Types.number(value) && !Numbers.even(value);
            };
            Numbers.positive = function(value) {
                return Types.number(value) && value > 0;
            };
            Numbers.negative = function(value) {
                return Types.number(value) && value < 0;
            };
            Numbers.infinityPositive = function(value) {
                return value === Number.POSITIVE_INFINITY;
            };
            Numbers.infinityNegative = function(value) {
                return value === Number.NEGATIVE_INFINITY;
            };
            Numbers.infinity = function(value) {
                return Numbers.infinityPositive(value) || Numbers.infinityNegative(value);
            };
            Numbers.between = function(num, min, max) {
                return Types.all.number(num, min, max) && num >= min && num <= max;
            };
            Numbers.between.multiple = false;
            Numbers.greater = function(value, num) {
                return Types.all.number(value, num) && value > num;
            };
            Numbers.greater.multiple = false;
            Numbers.lesser = function(value, num) {
                return Types.all.number(value, num) && value < num;
            };
            Numbers.lesser.multiple = false;
            Numbers.numeric = function(value) {
                return (Types.number(value) || Types.string(value)) && !isNaN(value - parseFloat(value));
            };
            Numbers = Interface.create(Numbers);
            module.exports = Numbers;
        }, {
            "../interface": 15,
            "./types": 12
        } ],
        10: [ function(require, module, exports) {
            "use strict";
            var Types = require("./types");
            var Interface = require("../interface");
            var Objects = {};
            Objects.propertyOf = function(value, object) {
                if (!Types.object(object)) return false;
                return object.hasOwnProperty(value);
            };
            Objects.propertyOf.multiple = false;
            Objects.propertyCount = function(object, value) {
                if (!Types.object(object) || !Types.number(value)) return false;
                var n = 0;
                for (var i in object) {
                    if (object.hasOwnProperty(i) && ++n > value) return false;
                }
                return n === value;
            };
            Objects.propertyCount.multiple = false;
            Objects = Interface.create(Objects);
            module.exports = Objects;
        }, {
            "../interface": 15,
            "./types": 12
        } ],
        11: [ function(require, module, exports) {
            "use strict";
            var Helpers = require("../helpers");
            var Interface = require("../interface");
            var Types = require("./types");
            var Strings = {};
            Strings.camelCase = function(value) {
                return Types.string(value) && !Strings.upperCase(value) && Strings.alphanumeric(value) && Strings.spaces(value.replace(/([A-Z])/g, " $1"));
            };
            Strings.snakeCase = function(value) {
                return Strings.lowerCase(value) && /^[0-9a-z]*_[0-9a-z]/gi.test(value);
            };
            Strings.kebabCase = function(value) {
                return Strings.lowerCase(value) && /^[0-9a-z]*-[0-9a-z]/gi.test(value);
            };
            Strings.similarity = function(string1, string2, threshold) {
                if (!Types.all.string(string1, string2)) return false;
                if (!Types.number(threshold) || threshold < 0 || threshold > 1) threshold = 1;
                var longer = string1;
                var shorter = string2;
                if (string1.length < string2.length) {
                    longer = string2;
                    shorter = string1;
                }
                var longerLength = longer.length;
                return (longerLength - Helpers.getEditDistance(longer, shorter)) / parseFloat(longerLength) >= threshold;
            };
            Strings.similarity.multiple = false;
            Strings.contains = function(string, value) {
                if (!Types.string(string)) return false;
                return string.indexOf(value) > -1;
            };
            Strings.contains.multiple = false;
            Strings.lowerCase = function(value) {
                if (!Types.string(value)) return false;
                return value.toLowerCase() === value;
            };
            Strings.upperCase = function(value) {
                if (!Types.string(value)) return false;
                return value.toUpperCase() === value;
            };
            Strings.word = function(value) {
                if (!Types.string(value)) return false;
                var trimmed = value.trim();
                return trimmed.length > 0 && trimmed.split(" ").length === 1;
            };
            Strings.capitalized = function(value) {
                if (!Types.string(value)) return false;
                var trimmed = value.trim();
                if (trimmed.length === 0) return false;
                var words = value.trim().split(" ");
                for (var i in words) {
                    var char = words[i].charAt(0);
                    if (char !== char.toUpperCase()) return false;
                }
                return true;
            };
            Strings.emptyString = function(value) {
                return Types.string(value) && value.length === 0;
            };
            Strings.alphanumeric = function(value) {
                return /^[a-z0-9]+$/i.test(value) && Types.string(value);
            };
            Strings.startWith = function(value, string, insensitive) {
                if (Types.falsy(insensitive)) insensitive = false;
                var regex = new RegExp("^" + value, Types.booleanTrue(insensitive) ? "i" : "");
                return regex.test(string);
            };
            Strings.startWith.multiple = false;
            Strings.char = function(value) {
                return Types.string(value) && value.length === 1;
            };
            Strings.space = function(value) {
                return Strings.char(value) && /\s/.test(value);
            };
            Strings.spaces = function(value) {
                return /\s/.test(value);
            };
            Strings = Interface.create(Strings);
            module.exports = Strings;
        }, {
            "../helpers": 14,
            "../interface": 15,
            "./types": 12
        } ],
        12: [ function(require, module, exports) {
            "use strict";
            var Helpers = require("../helpers");
            var Interface = require("../interface");
            var Types = {};
            Types.classOf = function(object, className) {
                return Helpers.objectToString(object).toLowerCase() === "[object " + className + "]".toLowerCase();
            };
            Types.classOf.multiple = false;
            Types.boolean = function(value) {
                return Types.classOf(value, "boolean");
            };
            Types.booleanFalse = function(value) {
                return Types.boolean(value) && value === false;
            };
            Types.booleanTrue = function(value) {
                return Types.boolean(value) && value === true;
            };
            Types.number = function(value) {
                return Types.classOf(value, "number") && !isNaN(value);
            };
            Types.string = function(value) {
                return Types.classOf(value, "string");
            };
            Types.undefined = function(value) {
                return Types.classOf(value, "undefined");
            };
            Types["null"] = function(value) {
                return Types.classOf(value, "null");
            };
            Types.object = function(value) {
                return Types.classOf(value, "object") && !Types.array(value);
            };
            Types.array = function(value) {
                return Types.classOf(value, "array");
            };
            Types.json = function(value) {
                try {
                    JSON.parse(value);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            Types.date = function(value) {
                return Types.classOf(value, "date");
            };
            Types["function"] = function(value) {
                return Types.classOf(value, "function");
            };
            Types.regexp = function(value) {
                return Types.classOf(value, "regexp");
            };
            Types.sameType = function(value, other) {
                return Helpers.objectToString(value) === Helpers.objectToString(other);
            };
            Types.sameType.multiple = false;
            Types.empty = function(value) {
                if (Types.null(value) || Types.undefined(value)) return true;
                if (Types.number(value) || Types.function(value) || Types.boolean(value)) return false;
                if (Types.object(value) || Types.array(value)) {
                    if (value.length > 0) return false;
                    if (value.length === 0) return true;
                    for (var key in value) {
                        if (Object.prototype.hasOwnProperty.call(value, key)) return false;
                    }
                }
                return !(Types.string(value) && value.length > 0);
            };
            Types.falsy = function(value) {
                return !value;
            };
            Types.truthy = function(value) {
                return !Types.falsy(value);
            };
            Types = Interface.create(Types);
            module.exports = Types;
        }, {
            "../helpers": 14,
            "../interface": 15
        } ],
        13: [ function(require, module, exports) {
            "use strict";
            var Interface = require("../interface");
            var Urls = {};
            Urls.url = function(value) {
                return /^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            };
            Urls.httpUrl = function(value) {
                return Urls.url(value) && /^http:/i.test(value);
            };
            Urls.httpsUrl = function(value) {
                return Urls.url(value) && /^https:/i.test(value);
            };
            Urls.urlEncoded = function(value) {
                return /%[0-9a-f]{2}/i.test(value);
            };
            Urls.ftpUrl = function(value) {
                return Urls.url(value) && /^ftp:/i.test(value);
            };
            Urls.ftpsUrl = function(value) {
                return Urls.url(value) && /^ftps:/i.test(value);
            };
            Urls = Interface.create(Urls);
            module.exports = Urls;
        }, {
            "../interface": 15
        } ],
        14: [ function(require, module, exports) {
            "use strict";
            var Helpers = {};
            Helpers.getUserAgent = function() {
                for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                    params[_key] = arguments[_key];
                }
                console.log(params);
                if (params.length) return params[0]; else {
                    if (!be.navigator()) throw new Error("test allowed only in browser environment");
                    return navigator.userAgent;
                }
            };
            Helpers.objectToString = function(object) {
                return Object.prototype.toString.call(object);
            };
            Helpers.getEditDistance = function(a, b) {
                if (a.length === 0) return b.length;
                if (b.length === 0) return a.length;
                var matrix = [];
                var i = void 0;
                for (i = 0; i <= b.length; i++) {
                    matrix[i] = [ i ];
                }
                var j = void 0;
                for (j = 0; j <= a.length; j++) {
                    matrix[0][j] = j;
                }
                for (i = 1; i <= b.length; i++) {
                    for (j = 1; j <= a.length; j++) {
                        if (b.charAt(i - 1) === a.charAt(j - 1)) {
                            matrix[i][j] = matrix[i - 1][j - 1];
                        } else {
                            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                        }
                    }
                }
                return matrix[b.length][a.length];
            };
            module.exports = Helpers;
        }, {} ],
        15: [ function(require, module, exports) {
            "use strict";
            var Helpers = require("./helpers");
            var Interface = {};
            Interface._isArray = function(object) {
                return Helpers.objectToString(object) === "[object Array]";
            };
            Interface.create = function(obj) {
                obj.all = {};
                obj.any = {};
                var _loop = function _loop(i) {
                    if (obj.hasOwnProperty(i) && typeof obj[i] === "function" && typeof obj[i].multiple === "undefined") {
                        obj.all[i] = function() {
                            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                                params[_key] = arguments[_key];
                            }
                            var args = params;
                            if (Interface._isArray(args[0])) args = args[0];
                            for (var a in args) {
                                if (args.hasOwnProperty(a) && !obj[i].call(undefined, args[a])) return false;
                            }
                            return true;
                        };
                        obj.any[i] = function() {
                            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                                params[_key2] = arguments[_key2];
                            }
                            var args = params;
                            if (Interface._isArray(args[0])) args = args[0];
                            for (var a in args) {
                                if (args.hasOwnProperty(a) && obj[i].call(undefined, args[a])) return true;
                            }
                            return false;
                        };
                    }
                };
                for (var i in obj) {
                    _loop(i);
                }
                return obj;
            };
            module.exports = Interface;
        }, {
            "./helpers": 14
        } ]
    }, {}, [ 1 ])(1);
});