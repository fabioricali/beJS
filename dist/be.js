!function(e){"use strict";var t,r,n,i,a,u={".js":[],".json":[],".css":[],".html":[]},o="function"==typeof require?require:null;return i=function(e){var t=new Error("Could not find module '"+e+"'");return t.code="MODULE_NOT_FOUND",t},a=function(e,t,r){var n,i;if("function"==typeof e[t+r])return t+r;for(n=0;i=u[r][n];++n)if("function"==typeof e[t+i])return t+i;return null},t=function(e,n,u,o,s,f){var c,l,p,d,h,g;for("."!==(c=(u=u.split(/[\\/]/)).pop())&&".."!==c||(u.push(c),c="");null!=(l=u.shift());)if(l&&"."!==l&&(".."===l?(e=n.pop(),f=f.slice(0,f.lastIndexOf("/"))):(n.push(e),e=e[l],f+="/"+l),!e))throw i(o);if(c&&"function"!=typeof e[c]&&((g=a(e,c,".js"))||(g=a(e,c,".json")),g||(g=a(e,c,".css")),g||(g=a(e,c,".html")),g?c=g:2!==s&&"object"==typeof e[c]&&(n.push(e),e=e[c],f+="/"+c,c="")),!c)return 1!==s&&e[":mainpath:"]?t(e,n,e[":mainpath:"],o,1,f):t(e,n,"index",o,2,f);if(!(h=e[c]))throw i(o);return h.hasOwnProperty("module")?h.module.exports:(p={},h.module=d={exports:p,id:f+"/"+c},h.call(p,p,d,r(e,n,f)),d.exports)},n=function(r,n,a,u){var s,f=a,c=a.charAt(0),l=0;if("/"===c){if(f=f.slice(1),!(r=e["/"])){if(o)return o(a);throw i(a)}u="/",n=[]}else if("."!==c){if(s=f.split("/",1)[0],!(r=e[s])){if(o)return o(a);throw i(a)}u=s,n=[],(f=f.slice(s.length+1))||((f=r[":mainpath:"])?l=1:(f="index",l=2))}return t(r,n,f,a,l,u)},(r=function(e,t,r){return function(i){return n(e,[].concat(t),i,r)}})(e,[],"")}({beJS:{src:{"be.js":function(e,t,r){var n=r("./helpers"),i=r("./interface"),a={Strings:r("./checks/strings"),Types:r("./checks/types"),Numbers:r("./checks/numbers"),Envs:r("./checks/envs"),Objects:r("./checks/objects"),Mixed:r("./checks/mixed"),Arrays:r("./checks/arrays"),Dates:r("./checks/dates"),Urls:r("./checks/urls"),Hashes:r("./checks/hashes")},u={};u.version="0.0.0",u.each={},u.some={},u._helpers=n,function(){for(var e in a)if(a.hasOwnProperty(e))for(var r in a[e])a[e].hasOwnProperty(r)&&a.Types.function(a[e][r])&&(u[r]=function(e,t){return function(){return a[e][t].apply(this,arguments)}}(e,r));u=i.create(u);for(var n in a)a.hasOwnProperty(n)&&(u[n]=a[n]);u.serverEnv()?t.exports=u:window.be=u}()},checks:{"arrays.js":function(e,t,r){var n=r("./types"),i=r("../interface"),a={};a.inArray=function(e,t){if(!n.array(t))return!1;for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e)return!0;return!1},a.inArray.multiple=!1,a=i.create(a),t.exports=a},"dates.js":function(e,t,r){var n=r("./types"),i=r("./numbers"),a=r("../interface"),u={},o=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],s=["january","february","march","april","may","june","july","august","september","october","november","december"];u.dateString=function(e){var t=Date.parse(e);return!isNaN(t)},u.today=function(e){var t=new Date;return n.date(e)&&t.toDateString()===e.toDateString()},u.tomorrow=function(e){var t=new Date;return t.setDate(t.getDate()+1),n.date(e)&&t.toDateString()===e.toDateString()},u.yesterday=function(e){var t=new Date;return t.setDate(t.getDate()-1),n.date(e)&&t.toDateString()===e.toDateString()},u.past=function(e){var t=(new Date).getTime();return n.date(e)&&t>e.getTime()},u.future=function(e){return n.date(e)&&!u.past(e)},u.day=function(e,t){return n.date(e)&&n.string(t)&&o[e.getDay()]===t.toLowerCase()},u.day.multiple=!1,u.month=function(e,t){return n.date(e)&&n.string(t)&&s[e.getMonth()]===t.toLowerCase()},u.month.multiple=!1,u.year=function(e,t){return n.date(e)&&n.number(t)&&e.getFullYear()===t},u.year.multiple=!1,u.leapYear=function(e){return n.number(e)&&e%4==0&&e%100!=0||e%400==0},u.weekend=function(e){return u.day(e,"saturday")||u.day(e,"sunday")},u.weekday=function(e){return n.date(e)&&!u.weekend(e)},u.dateBetween=function(e,t,r){return n.each.date(e,t,r)&&i.between(e.getTime(),t.getTime(),r.getTime())},u.dateBetween.multiple=!1,u.dayLightSavingTime=function(e){if(!n.date(e))return!1;var t=new Date(e.getFullYear(),0,1),r=new Date(e.getFullYear(),6,1),i=Math.max(t.getTimezoneOffset(),r.getTimezoneOffset());return e.getTimezoneOffset()<i},u=a.create(u),t.exports=u},"envs.js":function(e,t,r){var n=r("../helpers"),i=r("../interface"),a={};a.serverEnv=function(){return"undefined"!=typeof process},a.serverEnv.multiple=!1,a.browserEnv=function(){return"undefined"!=typeof window},a.browserEnv.multiple=!1,a.ios=function(){var e=n.getUserAgent.apply(this,arguments);return/iPhone|iPad|iPod/i.test(e)},a.ios.multiple=!1,a.android=function(){var e=n.getUserAgent.apply(this,arguments);return/Android/i.test(e)},a.android.multiple=!1,a.navigator=function(){return a.browserEnv()&&void 0!==window.navigator},a.navigator.multiple=!1,a.firefox=function(){var e=n.getUserAgent.apply(this,arguments);return/Firefox/i.test(e)},a.firefox.multiple=!1,a.chrome=function(){var e=n.getUserAgent.apply(this,arguments);return/Chrome/i.test(e)},a.chrome.multiple=!1,a.safari=function(){var e=n.getUserAgent.apply(this,arguments);return/Safari/i.test(e.replace("Chrome",""))&&!/Chrome/i.test(e.replace("Safari",""))},a.safari.multiple=!1,a.ie=function(){var e=n.getUserAgent.apply(this,arguments);return/MSIE|Trident/i.test(e)},a.ie.multiple=!1,a=i.create(a),t.exports=a},"hashes.js":function(e,t,r){var n=r("../interface"),i={};i.md5=function(e){return/^[a-f0-9]{32}$/.test(e)},i.sha1=function(e){return/^[a-f0-9]{40}$/.test(e)},i=n.create(i),t.exports=i},"mixed.js":function(e,t,r){var n=r("./types"),i=r("../interface"),a={};a.email=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},a.hex=function(e){return/^(?:0x)?[a-f0-9]+$/.test(e)},a.hexColor=function(e){try{return e=e.replace("#",""),a.hex(e)&&(3===e.length||6===e.length)}catch(e){return!1}},a.ipv4=function(e){return/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)},a.ipv6=function(e){return/^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(e)},a.ip=function(e){return a.ipv4(e)||a.ipv6(e)},a.base64=function(e){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(e)},a.semVer=function(e){return/^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(e)},a.equal=function(e,t){return n.each.number(e,t)?e===t:n.each.string(e,t)||n.each.regexp(e,t)?e+""==""+t:!!n.each.boolean(e,t)&&e===t},a.equal.multiple=!1,a=i.create(a),t.exports=a},"numbers.js":function(e,t,r){var n=r("./types"),i=r("../interface"),a={};a.int=function(e){return n.number(e)&&isFinite(e)&&Math.floor(e)===e},a.float=function(e){return n.number(e)&&!a.int(e)},a.nan=function(e){return isNaN(e)},a.even=function(e){return n.number(e)&&e%2==0},a.odd=function(e){return n.number(e)&&!a.even(e)},a.positive=function(e){return n.number(e)&&e>0},a.negative=function(e){return n.number(e)&&e<0},a.infinityPositive=function(e){return e===Number.POSITIVE_INFINITY},a.infinityNegative=function(e){return e===Number.NEGATIVE_INFINITY},a.infinity=function(e){return a.infinityPositive(e)||a.infinityNegative(e)},a.between=function(e,t,r){return n.each.number(e,t,r)&&e>=t&&e<=r},a.between.multiple=!1,a.greater=function(e,t){return n.each.number(e,t)&&e>t},a.greater.multiple=!1,a.lesser=function(e,t){return n.each.number(e,t)&&e<t},a.lesser.multiple=!1,a.numeric=function(e){return(n.number(e)||n.string(e))&&!isNaN(e-parseFloat(e))},a=i.create(a),t.exports=a},"objects.js":function(e,t,r){var n=r("./types"),i=r("../interface"),a={};a.propertyOf=function(e,t){return!!n.object(t)&&t.hasOwnProperty(e)},a.propertyOf.multiple=!1,a.propertyCount=function(e,t){if(!n.object(e)||!n.number(t))return!1;var r=0;for(var i in e)if(e.hasOwnProperty(i)&&++r>t)return!1;return r===t},a.propertyCount.multiple=!1,a=i.create(a),t.exports=a},"strings.js":function(e,t,r){var n=r("../helpers"),i=r("../interface"),a=r("./types"),u={};u.camelCase=function(e){return a.string(e)&&!u.upperCase(e)&&u.alphanumeric(e)&&u.spaces(e.replace(/([A-Z])/g," $1"))},u.snakeCase=function(e){return u.lowerCase(e)&&/^[0-9a-z]*_[0-9a-z]/gi.test(e)},u.kebabCase=function(e){return u.lowerCase(e)&&/^[0-9a-z]*-[0-9a-z]/gi.test(e)},u.similarity=function(e,t,r){if(!a.each.string(e,t))return!1;(!a.number(r)||r<0||r>1)&&(r=1);var i=e,u=t;e.length<t.length&&(i=t,u=e);var o=i.length;return(o-n.getEditDistance(i,u))/parseFloat(o)>=r},u.similarity.multiple=!1,u.contains=function(e,t){return!!a.string(e)&&e.indexOf(t)>-1},u.contains.multiple=!1,u.lowerCase=function(e){return!!a.string(e)&&e.toLowerCase()===e},u.upperCase=function(e){return!!a.string(e)&&e.toUpperCase()===e},u.word=function(e){if(!a.string(e))return!1;var t=e.trim();return t.length>0&&1===t.split(" ").length},u.capitalized=function(e){if(!a.string(e))return!1;if(0===e.trim().length)return!1;var t=e.trim().split(" ");for(var r in t){var n=t[r].charAt(0);if(n!==n.toUpperCase())return!1}return!0},u.emptyString=function(e){return a.string(e)&&0===e.length},u.alphanumeric=function(e){return/^[a-z0-9]+$/i.test(e)&&a.string(e)},u.startWith=function(e,t,r){return a.falsy(r)&&(r=!1),new RegExp("^"+e,a.booleanTrue(r)?"i":"").test(t)},u.startWith.multiple=!1,u.char=function(e){return a.string(e)&&1===e.length},u.space=function(e){return u.char(e)&&/\s/.test(e)},u.spaces=function(e){return/\s/.test(e)},u=i.create(u),t.exports=u},"types.js":function(e,t,r){var n=r("../helpers"),i=r("../interface"),a={};a.classOf=function(e,t){return n.objectToString(e).toLowerCase()==="[object "+t+"]".toLowerCase()},a.classOf.multiple=!1,a.boolean=function(e){return a.classOf(e,"boolean")},a.booleanFalse=function(e){return a.boolean(e)&&!1===e},a.booleanTrue=function(e){return a.boolean(e)&&!0===e},a.number=function(e){return a.classOf(e,"number")&&!isNaN(e)},a.string=function(e){return a.classOf(e,"string")},a.undefined=function(e){return a.classOf(e,"undefined")},a.null=function(e){return a.classOf(e,"null")},a.object=function(e){return a.classOf(e,"object")&&!a.array(e)},a.array=function(e){return a.classOf(e,"array")},a.json=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},a.date=function(e){return a.classOf(e,"date")},a.function=function(e){return a.classOf(e,"function")},a.regexp=function(e){return a.classOf(e,"regexp")},a.sameType=function(e,t){return n.objectToString(e)===n.objectToString(t)},a.sameType.multiple=!1,a.empty=function(e){if(a.null(e)||a.undefined(e))return!0;if(a.number(e)||a.function(e)||a.boolean(e))return!1;if(a.object(e)||a.array(e)){if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1}return!(a.string(e)&&e.length>0)},a.falsy=function(e){return!e},a.truthy=function(e){return!a.falsy(e)},a=i.create(a),t.exports=a},"urls.js":function(e,t,r){var n=r("../interface"),i={};i.url=function(e){return/^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},i.httpUrl=function(e){return i.url(e)&&/^http:/i.test(e)},i.httpsUrl=function(e){return i.url(e)&&/^https:/i.test(e)},i.urlEncoded=function(e){return/%[0-9a-f]{2}/i.test(e)},i.ftpUrl=function(e){return i.url(e)&&/^ftp:/i.test(e)},i.ftpsUrl=function(e){return i.url(e)&&/^ftps:/i.test(e)},i=n.create(i),t.exports=i}},"helpers.js":function(e,t,r){var n={};n.getUserAgent=function(){if(arguments.length)return arguments[0];if(!be.navigator())throw new Error("test allowed only in browser environment");return navigator.userAgent},n.objectToString=function(e){return Object.prototype.toString.call(e)},n.getEditDistance=function(e,t){if(0===e.length)return t.length;if(0===t.length)return e.length;var r,n=[];for(r=0;r<=t.length;r++)n[r]=[r];var i;for(i=0;i<=e.length;i++)n[0][i]=i;for(r=1;r<=t.length;r++)for(i=1;i<=e.length;i++)t.charAt(r-1)===e.charAt(i-1)?n[r][i]=n[r-1][i-1]:n[r][i]=Math.min(n[r-1][i-1]+1,Math.min(n[r][i-1]+1,n[r-1][i]+1));return n[t.length][e.length]},t.exports=n},"interface.js":function(e,t,r){var n=r("./helpers"),i={};i._isArray=function(e){return"[object array]"===n.objectToString(e).toLowerCase()},i.create=function(e){e.each={},e.some={};for(var t in e)e.hasOwnProperty(t)&&"function"==typeof e[t]&&void 0===e[t].multiple&&(e.each[t]=function(t){return function(){var r=arguments;i._isArray(r[0])&&(r=r[0]);for(var n in r)if(r.hasOwnProperty(n)&&!e[t].call(this,r[n]))return!1;return!0}}(t),e.some[t]=function(t){return function(){var r=arguments;i._isArray(r[0])&&(r=r[0]);for(var n in r)if(r.hasOwnProperty(n)&&e[t].call(this,r[n]))return!0;return!1}}(t));return e},t.exports=i}}}})("beJS/src/be");