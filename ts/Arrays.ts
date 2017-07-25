export interface ArraysMulti {
    arrayOfStrings(array: Array<any>): boolean;

    arrayOfObjects(array: Array<any>): boolean;

    arrayOfBooleans(array: Array<any>): boolean;

    arrayOfNumbers(array: Array<any>): boolean;

    arrayOfDates(array: Array<any>): boolean;

    arrayOfs(array: Array<any>): boolean;
}

export interface ArraysSingle {
    inArray(value: any, array: Array<any>): boolean;
}

export interface ArraysAll extends ArraysMulti, ArraysSingle {}