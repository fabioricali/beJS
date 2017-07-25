import {ArraysAll, ArraysMulti} from './ts/Arrays';
import {CreditCardsAll} from './ts/CreditCards';
import {DatesAll, DatesMulti} from './ts/Dates';
import {DomAll} from './ts/DOM';
import {EnvsAll, EnvsMulti} from './ts/Envs';
import {HashesAll} from './ts/Hashes';
import {MixedAll, MixedMulti} from './ts/Mixed';
import {NumbersAll, NumbersMulti} from './ts/Numbers';
import {ObjectsAll} from './ts/Objects';
import {PostalCodesAll} from './ts/PostalCodes';
import {StringsAll, StringsMulti} from './ts/Strings';
import {TypesAll, TypesMulti} from './ts/Types';
import {UrlsAll} from './ts/Urls';

declare module be {

    function getVersion(): string;

    function set(name: string, func: Function): void;

    interface Arrays extends ArraysAll, all, any, not {}

    interface CreditCards extends CreditCardsAll, all, any, not  {}

    interface Dates extends DatesAll, all, any, not  {}

    interface DOM extends DomAll, all, any, not  {}

    interface Envs extends EnvsAll, all, any, not  {}

    interface Hashes extends HashesAll, all, any, not  {}

    interface Mixed extends MixedAll, all, any, not {}

    interface Numbers extends NumbersAll, all, any, not {}

    interface Objects extends ObjectsAll, all, any, not {}

    interface PostalCodes extends PostalCodesAll, all, any, not {}

    interface Strings extends StringsAll, all, any, not {}

    interface Types extends TypesAll, all, any, not {}

    interface Urls extends UrlsAll, all, any, not {}

    interface all extends ArraysMulti, CreditCards, DatesMulti, DOM, EnvsMulti,
        Hashes, MixedMulti, NumbersMulti, PostalCodes, StringsMulti, TypesMulti, Urls {}

    interface any extends all{}

    interface not extends Arrays, CreditCards, Dates, DOM, Envs, Hashes, Mixed,
        Numbers, Objects, PostalCodes, Strings, Types, Urls {}
}

export = be;