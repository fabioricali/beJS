# be

Numbers checks.



* * *

### be.int(value) 

Check if a number is integer**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.int(2) // truebe.int(1.5) // falsebe.all.int(1, 4, 5) // true
```


### be.float(value) 

Check if is float number**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.float(1.5) // truebe.float(1) // falsebe.all.float(1.5, 4.2, 5) // false
```


### be.nan(value) 

Check if is NaN**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.nan('s') // true
```


### be.even(value) 

Check if is a even number**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.even(2) // truebe.even(3) // false
```


### be.odd(value) 

Check if is an odd number**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.odd(3) // truebe.odd(4) // false
```


### be.positive(value) 

Check if is a positive number**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.positive(2) // truebe.positive(-3) // false
```


### be.negative(value) 

Check if is a negative number**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.negative(-2) // truebe.negative(2) // false
```


### be.negativeZero(value) 

Check if is negative zero**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.negativeZero(-0) // truebe.negativeZero(0) // false
```


### be.positiveZero(value) 

Check if is negative zero**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.positiveZero(+0) // truebe.positiveZero(0) // true
```


### be.infinity(value) 

Check if number is infinity**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.infinity(1.7976931348623157E+10308) // true
```


### be.infinityPositive(value) 

Check if number is infinity positive**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.infinityPositive(1.7976931348623157E+10308) // truebe.infinityPositive(-1.7976931348623157E+10308) // false
```


### be.infinityNegative(value) 

Check if number is infinity positive**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.infinityNegative(-1.7976931348623157E+10308) // truebe.infinityNegative(1.7976931348623157E+10308) // false
```


### be.between(num, min, max) 

Check if number is between min and max**Interfaces**: `not`

**Parameters**

**num**: `number`, number

**min**: `number`, number min

**max**: `number`, number max

**Returns**: `boolean`

**Example**:
```js
be.between(4, 1, 10) // true
```


### be.greater(value, num) 

Checks if number is greater then an other**Interfaces**: `not`

**Parameters**

**value**: `number`, value to check

**num**: `number`, number target

**Returns**: `boolean`

**Example**:
```js
be.greater(10, 5) // truebe.greater(2, 8) // false
```


### be.lesser(value, num) 

Checks if number is lesser then an other**Interfaces**: `not`

**Parameters**

**value**: `number`, value to check

**num**: `number`, number target

**Returns**: `boolean`

**Example**:
```js
be.lesser(10, 5) // falsebe.lesser(2, 8) // true
```


### be.numeric(value) 

Checks if is a number as string or number type**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `number`, number

**Returns**: `boolean`

**Example**:
```js
be.numeric(100) // truebe.numeric('100') // true
```



* * *










