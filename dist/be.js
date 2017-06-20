!function(t){"use strict";var e,n,r,i,u,a={".js":[],".json":[],".css":[],".html":[]},o="function"==typeof require?require:null;return i=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},u=function(t,e,n){var r,i;if("function"==typeof t[e+n])return e+n;for(r=0;i=a[n][r];++r)if("function"==typeof t[e+i])return e+i;return null},e=function(t,r,a,o,s,f){var c,l,d,p,h,g;for("."!==(c=(a=a.split(/[\\/]/)).pop())&&".."!==c||(a.push(c),c="");null!=(l=a.shift());)if(l&&"."!==l&&(".."===l?(t=r.pop(),f=f.slice(0,f.lastIndexOf("/"))):(r.push(t),t=t[l],f+="/"+l),!t))throw i(o);if(c&&"function"!=typeof t[c]&&((g=u(t,c,".js"))||(g=u(t,c,".json")),g||(g=u(t,c,".css")),g||(g=u(t,c,".html")),g?c=g:2!==s&&"object"==typeof t[c]&&(r.push(t),t=t[c],f+="/"+c,c="")),!c)return 1!==s&&t[":mainpath:"]?e(t,r,t[":mainpath:"],o,1,f):e(t,r,"index",o,2,f);if(!(h=t[c]))throw i(o);return h.hasOwnProperty("module")?h.module.exports:(d={},h.module=p={exports:d,id:f+"/"+c},h.call(d,d,p,n(t,r,f)),p.exports)},r=function(n,r,u,a){var s,f=u,c=u.charAt(0),l=0;if("/"===c){if(f=f.slice(1),!(n=t["/"])){if(o)return o(u);throw i(u)}a="/",r=[]}else if("."!==c){if(s=f.split("/",1)[0],!(n=t[s])){if(o)return o(u);throw i(u)}a=s,r=[],(f=f.slice(s.length+1))||((f=n[":mainpath:"])?l=1:(f="index",l=2))}return e(n,r,f,u,l,a)},(n=function(t,e,n){return function(i){return r(t,[].concat(e),i,n)}})(t,[],"")}({beJS:{src:{"be.js":function(t,e,n){var r=n("./helpers"),i={Strings:n("./checks/strings"),Types:n("./checks/types"),Numbers:n("./checks/numbers"),Envs:n("./checks/envs"),Objects:n("./checks/objects"),Mixed:n("./checks/mixed"),Arrays:n("./checks/arrays"),Dates:n("./checks/dates"),Urls:n("./checks/urls"),Hashes:n("./checks/hashes")},u={};u.version="0.0.0",u.each={},u.some={},u._helpers=r,function(){for(var t in i)if(i.hasOwnProperty(t))for(var n in i[t])i[t].hasOwnProperty(n)&&(u[n]=function(t,e){return function(){return i[t][e].apply(this,arguments)}}(t,n));for(var r in u)u.hasOwnProperty(r)&&u.function(u[r])&&u.undefined(u[r].multiple)&&(u.each[r]=function(t){return function(){var e=arguments;u.array(e[0])&&(e=e[0]);for(var n in e)if(e.hasOwnProperty(n)&&!u[t].call(this,e[n]))return!1;return!0}}(r),u.some[r]=function(t){return function(){var e=arguments;u.array(e[0])&&(e=e[0]);for(var n in e)if(e.hasOwnProperty(n)&&u[t].call(this,e[n]))return!0;return!1}}(r));for(var a in i)i.hasOwnProperty(a)&&(u[a]=i[a]);u.serverEnv()?e.exports=u:window.be=u}()},checks:{"arrays.js":function(t,e,n){var r=n("./types"),i={};i.inArray=function(t,e){if(!r.array(e))return!1;for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t)return!0;return!1},i.inArray.multiple=!1,e.exports=i},"dates.js":function(t,e,n){var r=n("./types"),i=n("./numbers"),u={},a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=["january","february","march","april","may","june","july","august","september","october","november","december"];u.dateString=function(t){var e=Date.parse(t);return!isNaN(e)},u.today=function(t){var e=new Date;return r.date(t)&&e.toDateString()===t.toDateString()},u.tomorrow=function(t){var e=new Date;return e.setDate(e.getDate()+1),r.date(t)&&e.toDateString()===t.toDateString()},u.yesterday=function(t){var e=new Date;return e.setDate(e.getDate()-1),r.date(t)&&e.toDateString()===t.toDateString()},u.past=function(t){var e=(new Date).getTime();return r.date(t)&&e>t.getTime()},u.future=function(t){return r.date(t)&&!u.past(t)},u.day=function(t,e){return r.date(t)&&r.string(e)&&a[t.getDay()]===e.toLowerCase()},u.day.multiple=!1,u.month=function(t,e){return r.date(t)&&r.string(e)&&o[t.getMonth()]===e.toLowerCase()},u.month.multiple=!1,u.year=function(t,e){return r.date(t)&&r.number(e)&&t.getFullYear()===e},u.year.multiple=!1,u.leapYear=function(t){return r.number(t)&&t%4==0&&t%100!=0||t%400==0},u.weekend=function(t){return u.day(t,"saturday")||u.day(t,"sunday")},u.weekday=function(t){return r.date(t)&&!u.weekend(t)},u.dateBetween=function(t,e,n){return r.date(t)&&r.date(e)&&r.date(n)&&i.between(t.getTime(),e.getTime(),n.getTime())},u.dateBetween.multiple=!1,u.dayLightSavingTime=function(t){if(!r.date(t))return!1;var e=new Date(t.getFullYear(),0,1),n=new Date(t.getFullYear(),6,1),i=Math.max(e.getTimezoneOffset(),n.getTimezoneOffset());return t.getTimezoneOffset()<i},e.exports=u},"envs.js":function(t,e,n){var r=n("../helpers"),i={};i.serverEnv=function(){return"undefined"!=typeof process},i.serverEnv.multiple=!1,i.browserEnv=function(){return"undefined"!=typeof window},i.browserEnv.multiple=!1,i.ios=function(){var t=r.getUserAgent.apply(this,arguments);return/iPhone|iPad|iPod/i.test(t)},i.ios.multiple=!1,i.android=function(){var t=r.getUserAgent.apply(this,arguments);return/Android/i.test(t)},i.android.multiple=!1,i.navigator=function(){return i.browserEnv()&&void 0!==window.navigator},i.navigator.multiple=!1,i.firefox=function(){var t=r.getUserAgent.apply(this,arguments);return/Firefox/i.test(t)},i.firefox.multiple=!1,i.chrome=function(){var t=r.getUserAgent.apply(this,arguments);return/Chrome/i.test(t)},i.chrome.multiple=!1,i.safari=function(){var t=r.getUserAgent.apply(this,arguments);return/Safari/i.test(t.replace("Chrome",""))&&!/Chrome/i.test(t.replace("Safari",""))},i.safari.multiple=!1,i.ie=function(){var t=r.getUserAgent.apply(this,arguments);return/MSIE|Trident/i.test(t)},i.ie.multiple=!1,e.exports=i},"hashes.js":function(t,e,n){var r={};r.md5=function(t){return/^[a-f0-9]{32}$/.test(t)},r.sha1=function(t){return/^[a-f0-9]{40}$/.test(t)},e.exports=r},"mixed.js":function(t,e,n){var r=n("./types"),i={};i.email=function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},i.hex=function(t){return/^(?:0x)?[a-f0-9]+$/.test(t)},i.hexColor=function(t){try{return t=t.replace("#",""),i.hex(t)&&(3===t.length||6===t.length)}catch(t){return!1}},i.ipv4=function(t){return/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)},i.ipv6=function(t){return/^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))$/.test(t)},i.ip=function(t){return i.ipv4(t)||i.ipv6(t)},i.base64=function(t){return/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(t)},i.semVer=function(t){return/^(\d*)\.(\d*)\.(\d*)(-(\d*|\d*[a-z-][0-9a-z-]*)(\.(\d*|\d*[a-z-][0-9a-z-]*))*)?(\+[0-9a-z-]+(\.[0-9a-z-]+)*)?$/i.test(t)},i.equal=function(t,e){return r.number(t)&&r.number(e)?t===e:r.string(t)&&r.string(e)||r.regexp(t)&&r.regexp(e)?t+""==""+e:!(!r.boolean(t)||!r.boolean(e))&&t===e},i.equal.multiple=!1,e.exports=i},"numbers.js":function(t,e,n){var r=n("./types"),i={};i.int=function(t){return r.number(t)&&isFinite(t)&&Math.floor(t)===t},i.float=function(t){return r.number(t)&&!i.int(t)},i.nan=function(t){return isNaN(t)},i.even=function(t){return r.number(t)&&t%2==0},i.odd=function(t){return r.number(t)&&!i.even(t)},i.positive=function(t){return r.number(t)&&t>0},i.negative=function(t){return r.number(t)&&t<0},i.infinityPositive=function(t){return t===Number.POSITIVE_INFINITY},i.infinityNegative=function(t){return t===Number.NEGATIVE_INFINITY},i.infinity=function(t){return i.infinityPositive(t)||i.infinityNegative(t)},i.between=function(t,e,n){return r.number(t)&&r.number(e)&&r.number(n)&&t>=e&&t<=n},i.between.multiple=!1,i.greater=function(t,e){return r.number(t)&&r.number(e)&&t>e},i.greater.multiple=!1,i.lesser=function(t,e){return r.number(t)&&r.number(e)&&t<e},i.lesser.multiple=!1,e.exports=i},"objects.js":function(t,e,n){var r=n("./types"),i={};i.propertyOf=function(t,e){return!!r.object(e)&&e.hasOwnProperty(t)},i.propertyOf.multiple=!1,i.propertyCount=function(t,e){if(!r.object(t)||!r.number(e))return!1;var n=0;for(var i in t)if(t.hasOwnProperty(i)&&++n>e)return!1;return n===e},i.propertyCount.multiple=!1,e.exports=i},"strings.js":function(t,e,n){var r=n("../helpers"),i=n("./types"),u={};u.camelCase=function(t){return i.string(t)&&!u.upperCase(t)&&u.alphanumeric(t)&&u.space(t.replace(/([A-Z])/g," $1"))},u.snakeCase=function(t){return u.lowerCase(t)&&/^[0-9a-z]*_[0-9a-z]/gi.test(t)},u.kebabCase=function(t){return u.lowerCase(t)&&/^[0-9a-z]*-[0-9a-z]/gi.test(t)},u.space=function(t){return/\s/g.test(t)},u.similarity=function(t,e,n){if(!i.string(t)||!i.string(e))return!1;(!i.number(n)||n<0||n>1)&&(n=1);var u=t,a=e;t.length<e.length&&(u=e,a=t);var o=u.length;return(o-r.getEditDistance(u,a))/parseFloat(o)>=n},u.similarity.multiple=!1,u.contains=function(t,e){return!!i.string(t)&&t.indexOf(e)>-1},u.contains.multiple=!1,u.lowerCase=function(t){return!!i.string(t)&&t.toLowerCase()===t},u.upperCase=function(t){return!!i.string(t)&&t.toUpperCase()===t},u.word=function(t){if(!i.string(t))return!1;var e=t.trim();return e.length>0&&1===e.split(" ").length},u.capitalized=function(t){if(!i.string(t))return!1;if(0===t.trim().length)return!1;var e=t.trim().split(" ");for(var n in e){var r=e[n].charAt(0);if(r!==r.toUpperCase())return!1}return!0},u.emptyString=function(t){return i.string(t)&&0===t.length},u.alphanumeric=function(t){return/^[a-z0-9]+$/i.test(t)&&i.string(t)},u.startWith=function(t,e,n){return i.falsy(n)&&(n=!1),new RegExp("^"+t,i.booleanTrue(n)?"i":"").test(e)},u.startWith.multiple=!1,e.exports=u},"types.js":function(t,e,n){var r=n("../helpers"),i={};i.classOf=function(t,e){return r.objectToString(t).toLowerCase()==="[object "+e+"]".toLowerCase()},i.classOf.multiple=!1,i.boolean=function(t){return i.classOf(t,"boolean")},i.booleanFalse=function(t){return i.boolean(t)&&!1===t},i.booleanTrue=function(t){return i.boolean(t)&&!0===t},i.number=function(t){return i.classOf(t,"number")&&!isNaN(t)},i.string=function(t){return i.classOf(t,"string")},i.undefined=function(t){return i.classOf(t,"undefined")},i.null=function(t){return i.classOf(t,"null")},i.object=function(t){return i.classOf(t,"object")&&!i.array(t)},i.array=function(t){return i.classOf(t,"array")},i.json=function(t){try{return JSON.parse(t),!0}catch(t){return!1}},i.date=function(t){return i.classOf(t,"date")},i.function=function(t){return i.classOf(t,"function")},i.regexp=function(t){return i.classOf(t,"regexp")},i.sameType=function(t,e){return r.objectToString(t)===r.objectToString(e)},i.sameType.multiple=!1,i.empty=function(t){if(i.null(t))return!0;if(i.undefined(t))return!0;if(i.number(t))return!1;if(i.function(t))return!1;if(i.boolean(t))return!1;if(i.object(t)||i.array(t)){if(t.length>0)return!1;if(0===t.length)return!0;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1}return!(i.string(t)&&t.length>0)},i.falsy=function(t){return!t},i.truthy=function(t){return!i.falsy(t)},e.exports=i},"urls.js":function(t,e,n){var r={};r.url=function(t){return/^(?:(?:https?|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)},r.httpUrl=function(t){return r.url(t)&&/^http:/i.test(t)},r.httpsUrl=function(t){return r.url(t)&&/^https:/i.test(t)},r.urlEncoded=function(t){return/%[0-9a-f]{2}/i.test(t)},r.ftpUrl=function(t){return r.url(t)&&/^ftp:/i.test(t)},r.ftpsUrl=function(t){return r.url(t)&&/^ftps:/i.test(t)},e.exports=r}},"helpers.js":function(t,e,n){var r={};r.getUserAgent=function(){if(arguments.length)return arguments[0];if(!be.navigator())throw new Error("test allowed only in browser environment");return navigator.userAgent},r.objectToString=function(t){return Object.prototype.toString.call(t)},r.getEditDistance=function(t,e){if(0===t.length)return e.length;if(0===e.length)return t.length;var n,r=[];for(n=0;n<=e.length;n++)r[n]=[n];var i;for(i=0;i<=t.length;i++)r[0][i]=i;for(n=1;n<=e.length;n++)for(i=1;i<=t.length;i++)e.charAt(n-1)===t.charAt(i-1)?r[n][i]=r[n-1][i-1]:r[n][i]=Math.min(r[n-1][i-1]+1,Math.min(r[n][i-1]+1,r[n-1][i]+1));return r[e.length][t.length]},e.exports=r}}}})("beJS/src/be");