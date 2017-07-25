export interface DatesMulti {
    dateString(value: string): boolean;

    timeString(value: string): boolean;

    today(date: Date): boolean;

    tomorrow(date: Date): boolean;

    yesterday(date: Date): boolean;

    past(date: Date): boolean;

    future(date: Date): boolean;

    leapYear(year: number): boolean;

    weekend(date: Date): boolean;

    weekday(date: Date): boolean;

    numberInWeek(number: number): boolean;

    dayLightSavingTime(date: Date): boolean;
}

export interface DatesSingle {
    day(date: Date, day: string): boolean;

    month(date: Date, month: string): boolean;

    year(date: Date, day: number): boolean;

    dateBetween(date: Date, startDate: Date, endDate: Date): boolean;
}

export interface DatesAll extends DatesMulti, DatesSingle{}