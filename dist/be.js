!function(e){"use strict";var t,r,n,i,u,a={".js":[],".json":[],".css":[],".html":[]},o="function"==typeof require?require:null;return i=function(e){var t=new Error("Could not find module '"+e+"'");return t.code="MODULE_NOT_FOUND",t},u=function(e,t,r){var n,i;if("function"==typeof e[t+r])return t+r;for(n=0;i=a[r][n];++n)if("function"==typeof e[t+i])return t+i;return null},t=function(e,n,a,o,s,f){var c,l,p,d,h,g;for("."!==(c=(a=a.split(/[\\/]/)).pop())&&".."!==c||(a.push(c),c="");null!=(l=a.shift());)if(l&&"."!==l&&(".."===l?(e=n.pop(),f=f.slice(0,f.lastIndexOf("/"))):(n.push(e),e=e[l],f+="/"+l),!e))throw i(o);if(c&&"function"!=typeof e[c]&&((g=u(e,c,".js"))||(g=u(e,c,".json")),g||(g=u(e,c,".css")),g||(g=u(e,c,".html")),g?c=g:2!==s&&"object"==typeof e[c]&&(n.push(e),e=e[c],f+="/"+c,c="")),!c)return 1!==s&&e[":mainpath:"]?t(e,n,e[":mainpath:"],o,1,f):t(e,n,"index",o,2,f);if(!(h=e[c]))throw i(o);return h.hasOwnProperty("module")?h.module.exports:(p={},h.module=d={exports:p,id:f+"/"+c},h.call(p,p,d,r(e,n,f)),d.exports)},n=function(r,n,u,a){var s,f=u,c=u.charAt(0),l=0;if("/"===c){if(f=f.slice(1),!(r=e["/"])){if(o)return o(u);throw i(u)}a="/",n=[]}else if("."!==c){if(s=f.split("/",1)[0],!(r=e[s])){if(o)return o(u);throw i(u)}a=s,n=[],(f=f.slice(s.length+1))||((f=r[":mainpath:"])?l=1:(f="index",l=2))}return t(r,n,f,u,l,a)},(r=function(e,t,r){return function(i){return n(e,[].concat(t),i,r)}})(e,[],"")}({beJS:{src:{"be.js":function(e,t,r){var n=r("./helpers"),i=r("./interface"),u={Strings:r("./checks/strings"),Types:r("./checks/types"),Numbers:r("./checks/numbers"),Envs:r("./checks/envs"),Objects:r("./checks/objects"),Mixed:r("./checks/mixed"),Arrays:r("./checks/arrays"),Dates:r("./checks/dates"),Urls:r("./checks/urls"),Hashes:r("./checks/hashes")},a={};a.version="0.0.0",a.each={},a.some={},a._helpers=n,function(){for(var e in u)if(u.hasOwnProperty(e))for(var r in u[e])u[e].hasOwnProperty(r)&&u.Types.function(u[e][r])&&(a[r]=function(e,t){return function(){return u[e][t].apply(this,arguments)}}(e,r));a=i.create(a);for(var n in u)u.hasOwnProperty(n)&&(a[n]=u[n]);a.serverEnv()?t.exports=a:window.be=a}()},checks:{"arrays.js":function(e,t,r){var n=r("./types"),i=r("../interface"),u={};u.inArray=function(e,t){if(!n.array(t))return!1;for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e)return!0;return!1},u.inArray.multiple=!1,u=i.create(u),t.exports=u},"dates.js":function(e,t,r){var n=r("./types"),i=r("./numbers"),u=r("../interface"),a={},o=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],s=["january","february","march","april","may","june","july","august","september","october","november","december"];a.dateString=function(e){var t=Date.parse(e);return!isNaN(t)},a.today=function(e){var t=new Date;return n.date(e)&&t.toDateString()===e.toDateString()},a.tomorrow=function(e){var t=new Date;return t.setDate(t.getDate()+1),n.date(e)&&t.toDateString()===e.toDateString()},a.yesterday=function(e){var t=new Date;return t.setDate(t.getDate()-1),n.date(e)&&t.toDateString()===e.toDateString()},a.past=function(e){var t=(new Date).getTime();return n.date(e)&&t>e.getTime()},a.future=function(e){return n.date(e)&&!a.past(e)},a.day=function(e,t){return n.date(e)&&n.string(t)&&o[e.getDay()]===t.toLowerCase()},a.day.multiple=!1,a.month=function(e,t){return n.date(e)&&n.string(t)&&s[e.getMonth()]===t.toLowerCase()},a.month.multiple=!1,a.year=function(e,t){return n.date(e)&&n.number(t)&&e.getFullYear()===t},a.year.multiple=!1,a.leapYear=function(e){return n.number(e)&&e%4==0&&e%100!=0||e%400==0},a.weekend=function(e){return a.day(e,"saturday")||a.day(e,"sunday")},a.weekday=function(e){return n.date(e)&&!a.weekend(e)},a.dateBetween=function(e,t,r){return n.each.date(e,t,r)&&i.between(e.getTime(),t.getTime(),r.getTime())},a.dateBetween.multiple=!1,a.dayLightSavingTime=function(e){if(!n.date(e))return!1;var t=new Date(e.getFullYear(),0,1),r=new Date(e.getFullYear(),6,1),i=Math.max(t.getTimezoneOffset(),r.getTimezoneOffset());return e.getTimezoneOffset()<i},a=u.create(a),t.exports=a},"envs.js":function(e,t,r){var n=r("../helpers"),i=r("../interface"),u={};u.serverEnv=function(){return"undefined"!=typeof process},u.serverEnv.multiple=!1,u.browserEnv=function(){return"undefined"!=typeof window},u.browserEnv.multiple=!1,u.ios=function(){var e=n.getUserAgent.apply(this,arguments);return/iPhone|iPad|iPod/i.test(e)},u.ios.multiple=!1,u.android=function(){var e=n.getUserAgent.apply(this,arguments);return/Android/i.test(e)},u.android.multiple=!1,u.navigator=function(){return u.browserEnv()&&void 0!==window.navigator},u.navigator.multiple=!1,u.firefox=function(){var e=n.getUserAgent.apply(this,arguments);return/Firefox/i.test(e)},u.firefox.multiple=!1,u.chrome=function(){var e=n.getUserAgent.apply(this,arguments);return/Chrome/i.test(e)},u.chrome.multiple=!1,u.safari=function(){var e=n.getUserAgent.apply(this,arguments);return/Safari/i.test(e.replace("Chrome",""))&&!/Chrome/i.test(e.replace("Safari",""))},u.safari.multiple=!1,u.ie=function(){var e=n.getUserAgent.apply(this,arguments);return/MSIE|Trident/i.test(e)},u.ie.multiple=!1,u=i.create(u),t.exports=u},"hashes.js":function(e,t,r){var n=r("../interface"),i={};i.md5=function(e){return/^[a-f0-9]{32}$/.test(e)},i.sha1=function(e){return/^[a-f0-9]{40}$/.test(e)},i=n.create(i),t.exports=i},"mixed.js":function(e,t,r){var n=r("./types"),i=r("../interface"),u={};u.email=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},u.hex=function(e){return/^(?:0x)?[a-f0-9]+$/.test(e)},u.hexColor=function(e){try{return e=e.replace("#",""),u.hex(e)&&(3===e.length||6===e.length)}catch(e){return!1}},u.ipv4=function(e){return/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)},u.ipv6=function(e){return/^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(e)},u.ip=function(e){return u.ipv4(e)||u.ipv6(e)},u.base64=function(e){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(e)},u.semVer=function(e){return/^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(e)},u.equal=function(e,t){return n.number(e)&&n.number(t)?e===t:n.string(e)&&n.string(t)||n.regexp(e)&&n.regexp(t)?e+""==""+t:!(!n.boolean(e)||!n.boolean(t))&&e===t},u.equal.multiple=!1,u=i.create(u),t.exports=u},"numbers.js":function(e,t,r){var n=r("./types"),i=r("../interface"),u={};u.int=function(e){return n.number(e)&&isFinite(e)&&Math.floor(e)===e},u.float=function(e){return n.number(e)&&!u.int(e)},u.nan=function(e){return isNaN(e)},u.even=function(e){return n.number(e)&&e%2==0},u.odd=function(e){return n.number(e)&&!u.even(e)},u.positive=function(e){return n.number(e)&&e>0},u.negative=function(e){return n.number(e)&&e<0},u.infinityPositive=function(e){return e===Number.POSITIVE_INFINITY},u.infinityNegative=function(e){return e===Number.NEGATIVE_INFINITY},u.infinity=function(e){return u.infinityPositive(e)||u.infinityNegative(e)},u.between=function(e,t,r){return n.number(e)&&n.number(t)&&n.number(r)&&e>=t&&e<=r},u.between.multiple=!1,u.greater=function(e,t){return n.number(e)&&n.number(t)&&e>t},u.greater.multiple=!1,u.lesser=function(e,t){return n.number(e)&&n.number(t)&&e<t},u.lesser.multiple=!1,u.numeric=function(e){return(n.number(e)||n.string(e))&&!isNaN(e-parseFloat(e))},u=i.create(u),t.exports=u},"objects.js":function(e,t,r){var n=r("./types"),i=r("../interface"),u={};u.propertyOf=function(e,t){return!!n.object(t)&&t.hasOwnProperty(e)},u.propertyOf.multiple=!1,u.propertyCount=function(e,t){if(!n.object(e)||!n.number(t))return!1;var r=0;for(var i in e)if(e.hasOwnProperty(i)&&++r>t)return!1;return r===t},u.propertyCount.multiple=!1,u=i.create(u),t.exports=u},"strings.js":function(e,t,r){var n=r("../helpers"),i=r("../interface"),u=r("./types"),a={};a.camelCase=function(e){return u.string(e)&&!a.upperCase(e)&&a.alphanumeric(e)&&a.space(e.replace(/([A-Z])/g," $1"))},a.snakeCase=function(e){return a.lowerCase(e)&&/^[0-9a-z]*_[0-9a-z]/gi.test(e)},a.kebabCase=function(e){return a.lowerCase(e)&&/^[0-9a-z]*-[0-9a-z]/gi.test(e)},a.space=function(e){return/\s/g.test(e)},a.similarity=function(e,t,r){if(!u.string(e)||!u.string(t))return!1;(!u.number(r)||r<0||r>1)&&(r=1);var i=e,a=t;e.length<t.length&&(i=t,a=e);var o=i.length;return(o-n.getEditDistance(i,a))/parseFloat(o)>=r},a.similarity.multiple=!1,a.contains=function(e,t){return!!u.string(e)&&e.indexOf(t)>-1},a.contains.multiple=!1,a.lowerCase=function(e){return!!u.string(e)&&e.toLowerCase()===e},a.upperCase=function(e){return!!u.string(e)&&e.toUpperCase()===e},a.word=function(e){if(!u.string(e))return!1;var t=e.trim();return t.length>0&&1===t.split(" ").length},a.capitalized=function(e){if(!u.string(e))return!1;if(0===e.trim().length)return!1;var t=e.trim().split(" ");for(var r in t){var n=t[r].charAt(0);if(n!==n.toUpperCase())return!1}return!0},a.emptyString=function(e){return u.string(e)&&0===e.length},a.alphanumeric=function(e){return/^[a-z0-9]+$/i.test(e)&&u.string(e)},a.startWith=function(e,t,r){return u.falsy(r)&&(r=!1),new RegExp("^"+e,u.booleanTrue(r)?"i":"").test(t)},a.startWith.multiple=!1,a=i.create(a),t.exports=a},"types.js":function(e,t,r){var n=r("../helpers"),i=r("../interface"),u={};u.classOf=function(e,t){return n.objectToString(e).toLowerCase()==="[object "+t+"]".toLowerCase()},u.classOf.multiple=!1,u.boolean=function(e){return u.classOf(e,"boolean")},u.booleanFalse=function(e){return u.boolean(e)&&!1===e},u.booleanTrue=function(e){return u.boolean(e)&&!0===e},u.number=function(e){return u.classOf(e,"number")&&!isNaN(e)},u.string=function(e){return u.classOf(e,"string")},u.undefined=function(e){return u.classOf(e,"undefined")},u.null=function(e){return u.classOf(e,"null")},u.object=function(e){return u.classOf(e,"object")&&!u.array(e)},u.array=function(e){return u.classOf(e,"array")},u.json=function(e){try{return JSON.parse(e),!0}catch(e){return!1}},u.date=function(e){return u.classOf(e,"date")},u.function=function(e){return u.classOf(e,"function")},u.regexp=function(e){return u.classOf(e,"regexp")},u.sameType=function(e,t){return n.objectToString(e)===n.objectToString(t)},u.sameType.multiple=!1,u.empty=function(e){if(u.null(e)||u.undefined(e))return!0;if(u.number(e)||u.function(e)||u.boolean(e))return!1;if(u.object(e)||u.array(e)){if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1}return!(u.string(e)&&e.length>0)},u.falsy=function(e){return!e},u.truthy=function(e){return!u.falsy(e)},u=i.create(u),t.exports=u},"urls.js":function(e,t,r){var n=r("../interface"),i={};i.url=function(e){return/^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},i.httpUrl=function(e){return i.url(e)&&/^http:/i.test(e)},i.httpsUrl=function(e){return i.url(e)&&/^https:/i.test(e)},i.urlEncoded=function(e){return/%[0-9a-f]{2}/i.test(e)},i.ftpUrl=function(e){return i.url(e)&&/^ftp:/i.test(e)},i.ftpsUrl=function(e){return i.url(e)&&/^ftps:/i.test(e)},i=n.create(i),t.exports=i}},"helpers.js":function(e,t,r){var n={};n.getUserAgent=function(){if(arguments.length)return arguments[0];if(!be.navigator())throw new Error("test allowed only in browser environment");return navigator.userAgent},n.objectToString=function(e){return Object.prototype.toString.call(e)},n.getEditDistance=function(e,t){if(0===e.length)return t.length;if(0===t.length)return e.length;var r,n=[];for(r=0;r<=t.length;r++)n[r]=[r];var i;for(i=0;i<=e.length;i++)n[0][i]=i;for(r=1;r<=t.length;r++)for(i=1;i<=e.length;i++)t.charAt(r-1)===e.charAt(i-1)?n[r][i]=n[r-1][i-1]:n[r][i]=Math.min(n[r-1][i-1]+1,Math.min(n[r][i-1]+1,n[r-1][i]+1));return n[t.length][e.length]},t.exports=n},"interface.js":function(e,t,r){var n=r("./helpers"),i={};i._isArray=function(e){return"[object array]"===n.objectToString(e).toLowerCase()},i.create=function(e){e.each={},e.some={};for(var t in e)e.hasOwnProperty(t)&&"function"==typeof e[t]&&void 0===e[t].multiple&&(e.each[t]=function(t){return function(){var r=arguments;i._isArray(r[0])&&(r=r[0]);for(var n in r)if(r.hasOwnProperty(n)&&!e[t].call(this,r[n]))return!1;return!0}}(t),e.some[t]=function(t){return function(){var r=arguments;i._isArray(r[0])&&(r=r[0]);for(var n in r)if(r.hasOwnProperty(n)&&e[t].call(this,r[n]))return!0;return!1}}(t));return e},t.exports=i}}}})("beJS/src/be");