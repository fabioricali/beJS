export interface NumbersMulti {
    int(value: number): boolean;

    float(value: number): boolean;

    nan(value: number): boolean;

    even(value: number): boolean;

    odd(value: number): boolean;

    positive(value: number): boolean;

    negative(value: number): boolean;

    negativeZero(value: number): boolean;

    positiveZero(value: number): boolean;

    infinity(value: number): boolean;

    infinityPositive(value: number): boolean;

    infinityNegative(value: number): boolean;

    numeric(value: string | number): boolean;
}

export interface NumbersSingle {
    between(num: number, min: number, max: number): boolean;

    greater(value: number, num: number): boolean;

    lesser(value: number, num: number): boolean;
}

export interface NumbersAll extends NumbersMulti, NumbersSingle{}