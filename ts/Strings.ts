export interface StringsMulti {
    camelCase(value: string): boolean;

    snakeCase(value: string): boolean;

    kebabCase(value: string): boolean;

    lowerCase(value: string): boolean;

    upperCase(value: string): boolean;

    word(value: string): boolean;

    capitalized(value: string): boolean;

    emptyString(value: string): boolean;

    alphanumeric(value: string): boolean;

    palindrome(value: string): boolean;

    char(value: string): boolean;

    space(value: string): boolean;

    spaces(value: string): boolean;
}

export interface StringsSingle {
    startWith(value: string, string: string, insensitive: boolean): boolean;

    endWith(value: string, string: string, insensitive: boolean): boolean;

    similarity(string1: string, string2: string, threshold: number): boolean;

    contains(string: string, value: string): boolean;
}

export interface StringsAll extends StringsMulti, StringsSingle{}