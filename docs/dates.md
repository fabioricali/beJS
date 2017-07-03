# be

Dates checks.



* * *

### be.dateString(value) 

Check if is date string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, string date

**Returns**: `boolean`

**Example**:
```js
be.dateString('2017-06-20') // truebe.dateString('hello') // false
```


### be.timeString(value) 

Check if is time string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, string time

**Returns**: `boolean`

**Example**:
```js
be.timeString('22:06:50') // true
```


### be.today(date) 

Check if date is today**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
be.today(new Date()) // true
```


### be.tomorrow(date) 

Check if date is tomorrow**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
let now = new Date();let tomorrow = now.setDate(now.getDate() + 1);be.tomorrow(tomorrow) // true
```


### be.yesterday(date) 

Check if date is yesterday**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
let now = new Date();let yesterday = now.setDate(now.getDate() - 1);be.yesterday(yesterday) // true
```


### be.past(date) 

Check if date is past**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
be.past(new Date('1980-02-05')) // true
```


### be.future(date) 

Check if date is future**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
be.future(new Date('2117-06-24')) // truebe.all.future(new Date('2117-06-24'), new Date('2007-06-25')) // falsebe.any.future(new Date('2117-06-24'), new Date('2007-06-25')) // truebe.not.future(new Date('2117-06-24')) // false
```


### be.day(date, day) 

Check if date is day specified**Interfaces**: `not`

**Parameters**

**date**: `Date`, date object

**day**: `string`, day can be 'sunday','monday','tuesday','wednesday','thursday','friday','saturday'

**Returns**: `boolean`

**Example**:
```js
be.day(new Date('2017-06-24'), 'saturday') // truebe.day(new Date('2017-06-25'), 'monday') // falsebe.not.day(new Date('2017-06-25'), 'monday') // true
```


### be.month(date, month) 

Check if date is month specified**Interfaces**: `not`

**Parameters**

**date**: `Date`, date object

**month**: `string`, month can be 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'

**Returns**: `boolean`

**Example**:
```js
be.month(new Date('2017-06-24'), 'june') // truebe.month(new Date('2017-02-25'), 'march') // falsebe.not.month(new Date('2017-02-25'), 'march') // true
```


### be.year(date, year) 

Check if date is the year specified**Interfaces**: `not`

**Parameters**

**date**: `Date`, date object

**year**: `number`, year

**Returns**: `boolean`

**Example**:
```js
be.year(new Date('2017-06-06'), 2017) // truebe.not.year(new Date('2017-06-06'), 2017) // false
```


### be.leapYear(year) 

Check if is leap year**Interfaces**: `all`, `any`, `not`

**Parameters**

**year**: `number`, year

**Returns**: `boolean`

**Example**:
```js
be.leapYear(2016) // truebe.leapYear(2017) // falsebe.not.leapYear(2017) // truebe.all.leapYear(2012, 2016) // truebe.any.leapYear(2015, 2016) // true
```


### be.weekend(date) 

Check if date is weekend**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
be.weekend(new Date('2017-06-24')) // truebe.not.weekend(new Date('2017-06-24')) // falsebe.all.weekend(new Date('2017-06-24'), new Date('2017-06-25')) // truebe.any.weekend(new Date('2017-06-24'), new Date('2017-06-26')) // true
```


### be.weekday(date) 

Check if date is weekday**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
be.weekday(new Date('2017-06-26')) // truebe.not.weekday(new Date('2017-06-24')) // truebe.all.weekday(new Date('2017-06-26'), new Date('2017-06-27')) // truebe.any.weekday(new Date('2017-06-24'), new Date('2017-06-26')) // true
```


### be.numberInWeek(number) 

Check if number is in week, between 0 and 6

**Parameters**

**number**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.numberInWeek(0) // true, is sundaybe.numberInWeek(1) // true, is mondaybe.numberInWeek(7) // false, the days are between 0 and 6
```


### be.dateBetween(date, startDate, endDate) 

Check if date is between start date and end date**Interfaces**: `not`

**Parameters**

**date**: `Date`, date object

**startDate**: `Date`, start date object

**endDate**: `Date`, end date object

**Returns**: `boolean`

**Example**:
```js
be.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // truebe.not.dateBetween(new Date('2017-05-12'), new Date('2017-03-10'), new Date('2017-07-25')) // false
```


### be.dayLightSavingTime(date) 

Check if date is DST**Interfaces**: `all`, `any`, `not`

**Parameters**

**date**: `Date`, date object

**Returns**: `boolean`

**Example**:
```js
be.dayLightSavingTime(new Date('2017-06-24')) // truebe.dayLightSavingTime(new Date('2017-10-30')) // false
```



* * *










