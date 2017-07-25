export interface MixedMulti {
    email(value: string): boolean;

    hex(value: string): boolean;

    ipv4(value: string): boolean;

    ipv6(value: string): boolean;

    ip(value: string): boolean;

    base64(value: string): boolean;

    semVer(value: string): boolean;

    fiscalCodeIT(value: string): boolean;

    macAddress(value: string): boolean;

    uuid1(value: string): boolean;

    uuid3(value: string): boolean;

    uuid4(value: string): boolean;

    uuid5(value: string): boolean;

    uuid(value: string): boolean;

    isrc(value: string): boolean;

    iswc(value: string): boolean;

    hexColor(value: string): boolean;
}

export interface MixedSingle {
    equal(value: any, other: any): boolean;

    compareVersion(a: string, operator: string, b: string, major: boolean): boolean;
}

export interface MixedAll extends MixedMulti, MixedSingle {}