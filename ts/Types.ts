export interface TypesMulti {
    boolean(value: any): boolean,

    booleanFalse(value: any): boolean;

    booleanTrue(value: any): boolean;

    true(value: any): boolean;

    false(value: any): boolean;

    number(value: any): boolean;

    string(value: any): boolean;

    undefined(value: any): boolean;

    null(value: any): boolean;

    object(value: any): boolean;

    array(value: any): boolean;

    json(value: any): boolean;

    date(value: any): boolean;

    function(value: any): boolean;

    regexp(value: any): boolean;

    sameType(value: any, other: any): boolean;

    empty(value: any): boolean;

    falsy(value: any): boolean;

    truthy(value: any): boolean;

    error(value: any): boolean;

    argument(value: any): boolean;

    primitive(value: any): boolean;

    promise(value: any): boolean;

    buffer(value: any): boolean;

    iterable(value: any): boolean;

    symbol(value: any): boolean;

    defined(value: any): boolean;

    oSet(value: any): boolean;

    weakSet(value: any): boolean;

    map(value: any): boolean;

    weakMap(value: any): boolean;

    mapIterator(value: any): boolean;

    setIterator(value: any): boolean;

    int8Array(value: any): boolean;

    uint8Array(value: any): boolean;

    uint8ClampedArray(value: any): boolean;

    int16Array(value: any): boolean;

    uint16Array(value: any): boolean;

    int32Array(value: any): boolean;

    uint32Array(value: any): boolean;

    float32Array(value: any): boolean;

    float64Array(value: any): boolean;

    async(value: any): boolean;
}

export interface TypesSingle {
    classOf(object: any, className: string): boolean;
}

export interface TypesAll extends TypesMulti, TypesSingle {}