export declare namespace be {

    interface all {}
    interface not {}
    interface any {}
    interface err {}
    interface Types {}
    interface Arrays {}
    interface CreditCard {}
    interface Dates {}
    interface DOM {}
    interface Envs {}
    interface Urls {}
    interface PostalCodes {}
    interface Numbers {}
    interface Objects {}
    interface Hashes {}
    interface Mixed {}
    interface Strings {}

    function getVersion(): string;
    function setAssert(name: string, func: Function): void;

    function classOf(object: any, className: string): boolean;
    function of(object: any, className: string): boolean;
    function boolean(value: any): boolean;
    function booleanFalse(value: any): boolean;
    function booleanTrue(value: any): boolean;
    const true = function(value: any): boolean;
    const false = function(value: any): boolean;
    function number(value: any): boolean;
    function string(value: any): boolean;
    function undefined(value: any): boolean;
    const null = function(value: any): boolean;
    function nil(value: any): boolean;
    function object(value: any): boolean;
    function array(value: any): boolean;
    function json(value: any): boolean;
    function date(value: any): boolean;
    const function = function(value: any): boolean;
    function regexp(value: any): boolean;
    function sameType(value: any, other: any): boolean;
    function empty(value: any): boolean;
    function falsy(value: any): boolean;
    function truthy(value: any): boolean;
    function error(value: any): boolean;
    function argument(value: any): boolean;
    function primitive(value: any): boolean;
    function promise(value: any): boolean;
    function buffer(value: any): boolean;
    function iterable(value: any): boolean;
    function symbol(value: any): boolean;
    function defined(value: any): boolean;
    function set(value: any): boolean;
    function weakSet(value: any): boolean;
    function map(value: any): boolean;
    function weakMap(value: any): boolean;
    function mapIterator(value: any): boolean;
    function setIterator(value: any): boolean;
    function int8Array(value: any): boolean;
    function uint8Array(value: any): boolean;
    function uint8ClampedArray(value: any): boolean;
    function int16Array(value: any): boolean;
    function uint16Array(value: any): boolean;
    function int32Array(value: any): boolean;
    function uint32Array(value: any): boolean;
    function float32Array(value: any): boolean;
    function float64Array(value: any): boolean;
    function asyncFunction(value: any): boolean;
    function generatorFunction(value: any): boolean;

    function inArray(value: any, array: Array<any>): boolean;
    function arrayOfStrings(array: Array<any>): boolean;
    function arrayOfObjects(array: Array<any>): boolean;
    function arrayOfBooleans(array: Array<any>): boolean;
    function arrayOfNumbers(array: Array<any>): boolean;
    function arrayOfNumeric(array: Array<any>): boolean;
    function arrayOfDates(array: Array<any>): boolean;
    function arrayOfFunctions(array: Array<any>): boolean;
    function objValueInArray(array: Array<any>, key: string, value: any): boolean;

    function creditCard(value: string): boolean;
    function amex(value: string): boolean;
    function dinersClub(value: string): boolean;
    function discover(value: string): boolean;
    function mastercard(value: string): boolean;
    function visa(value: string): boolean;

    function dateString(value: string): boolean;
    function timeString(value: string): boolean;
    function today(date: Date): boolean;
    function tomorrow(date: Date): boolean;
    function yesterday(date: Date): boolean;
    function past(date: Date): boolean;
    function future(date: Date): boolean;
    function day(date: Date, day: string): boolean;
    function month(date: Date, month: string): boolean;
    function year(date: Date, day: number): boolean;
    function leapYear(year: number): boolean;
    function weekend(date: Date): boolean;
    function weekday(date: Date): boolean;
    function numberInWeek(number: number): boolean;
    function dateBetween(date: Date, startDate: Date, endDate: Date): boolean;
    function dayLightSavingTime(date: Date): boolean;

    function domElement(element: object): boolean;
    function domElementTag(element: object, tag: string): boolean;

    function commonjsEnv(): boolean;
    function browserEnv(): boolean;
    function amdEnv(): boolean;
    function navigator(): boolean;
    function onLine(): boolean;
    function android(range?: string, agent?: string): boolean;
    function androidTablet(range?: string, agent?: string): boolean;
    function androidPhone(range?: string, agent?: string): boolean;
    function chrome(range?: string, agent?: string): boolean;
    function chromeIOS(range?: string, agent?: string): boolean;
    function opera(range?: string, agent?: string): boolean;
    function firefox(range?: string, agent?: string): boolean;
    function edge(range?: string, agent?: string): boolean;
    function safari(range?: string, agent?: string): boolean;
    function safariMobile(range?: string, agent?: string): boolean;
    function ie(range?: string, agent?: string): boolean;
    function windowsPhone(range?: string, agent?: string): boolean;
    function windowsTablet(range?: string, agent?: string): boolean;
    function blackberry(range?: string, agent?: string): boolean;
    function iphone(range?: string, agent?: string): boolean;
    function ipad(range?: string, agent?: string): boolean;
    function ipod(range?: string, agent?: string): boolean;
    function ios(range?: string, agent?: string): boolean;
    function mac(range?: string, agent?: string): boolean;
    function linux(range?: string, agent?: string): boolean;
    function windows(range?: string, agent?: string): boolean;
    function mobile(agent?: string): boolean;
    function tablet(agent?: string): boolean;
    function desktop(agent?: string): boolean;

    function sha1(value: string): boolean;
    function sha256(value: string): boolean;
    function sha512(value: string): boolean;
    function md5(value: string): boolean;

    function email(value: string): boolean;
    function hex(value: string): boolean;
    function ipv4(value: string): boolean;
    function ipv6(value: string): boolean;
    function ip(value: string): boolean;
    function base64(value: string): boolean;
    function semVer(value: string): boolean;
    function fiscalCodeIT(value: string): boolean;
    function macAddress(value: string): boolean;
    function uuid1(value: string): boolean;
    function uuid3(value: string): boolean;
    function uuid4(value: string): boolean;
    function uuid5(value: string): boolean;
    function uuid(value: string): boolean;
    function isrc(value: string): boolean;
    function iswc(value: string): boolean;
    function equal(value: any, other: any): boolean;
    function hexColor(value: string): boolean;
    function compareVersion(a: string, operator: string, b: string, major: boolean): boolean;
    function max(value: string|number, num: number): boolean;
    function min(value: string|number, num: number): boolean;

    function int(value: number): boolean;
    function float(value: number): boolean;
    function nan(value: number): boolean;
    function even(value: number): boolean;
    function odd(value: number): boolean;
    function positive(value: number): boolean;
    function negative(value: number): boolean;
    function negativeZero(value: number): boolean;
    function positiveZero(value: number): boolean;
    function infinity(value: number): boolean;
    function infinityPositive(value: number): boolean;
    function infinityNegative(value: number): boolean;
    function between(num: number, min: number, max: number): boolean;
    function greater(value: number, num: number): boolean;
    function lesser(value: number, num: number): boolean;
    function numeric(value: string|number): boolean;

    function propertyCount(object: object, value: number): boolean;

    function postalCodeES(value: string): boolean;
    function postalCodeUK(value: string): boolean;
    function postalCodeUS(value: string): boolean;
    function postalCodeIT(value: string): boolean;
    function postalCodeDE(value: string): boolean;
    function postalCodeNL(value: string): boolean;

    function camelCase(value: string): boolean;
    function snakeCase(value: string): boolean;
    function kebabCase(value: string): boolean;
    function similarity(string1: string, string2: string, threshold: number): boolean;
    function contains(string: string, value: string): boolean;
    function lowerCase(value: string): boolean;
    function upperCase(value: string): boolean;
    function word(value: string): boolean;
    function capitalized(value: string): boolean;
    function emptyString(value: string): boolean;
    function alphanumeric(value: string): boolean;
    function alpha(value: string): boolean;
    function startWith(value: string, string: string, insensitive: boolean): boolean;
    function endWith(value: string, string: string, insensitive?: boolean): boolean;
    function palindrome(value: string): boolean;
    function char(value: string): boolean;
    function space(value: string): boolean;
    function spaces(value: string): boolean;
    function stringRange(value: string, min: number, max: number): boolean;
    function stringLength(value: string, num: number): boolean;

    function url(value: string): boolean;
    function httpUrl(value: string): boolean;
    function httpsUrl(value: string): boolean;
    function urlEncoded(value: string): boolean;
    function ftpUrl(value: string): boolean;
    function ftpsUrl(value: string): boolean;
    function domain(value: string): boolean;
}