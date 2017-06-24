# be

Numbers checks.



* * *

### be.int(value) 

Check if a number is integer* **Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Number`, number

**Returns**: `Boolean`

**Example**:
```js
be.int(2) // truebe.int(1.5) // falsebe.all.int(1, 4, 5) // true
```


### be.float(value) 

Check if is float number* **Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Number`, number

**Returns**: `Boolean`

**Example**:
```js
be.float(1.5) // truebe.float(1) // falsebe.all.float(1.5, 4.2, 5) // false
```


### be.nan(value) 

Check if is NaN

**Parameters**

**value**: `*`, Check if is NaN

**Returns**: `* | boolean`


### be.even(value) 

Check if is a even number

**Parameters**

**value**: `number`, Check if is a even number

**Returns**: `* | boolean`


### be.odd(value) 

Check if is an odd number

**Parameters**

**value**: `number`, Check if is an odd number

**Returns**: `* | boolean`


### be.positive(value) 

Check if is a positive number

**Parameters**

**value**: `number`, Check if is a positive number

**Returns**: `* | boolean`


### be.negative(value) 

Check if is a negative number

**Parameters**

**value**: `number`, Check if is a negative number

**Returns**: `* | boolean`


### be.infinityPositive(value) 

Check if number is infinity positive

**Parameters**

**value**: `number`, Check if number is infinity positive

**Returns**: `boolean`


### be.infinityNegative(value) 

Check if number is infinity positive

**Parameters**

**value**: `number`, Check if number is infinity positive

**Returns**: `boolean`


### be.infinity(value) 

Check if number is infinity

**Parameters**

**value**: `number`, Check if number is infinity

**Returns**: `boolean`


### be.between(num, min, max) 

Check if number is between min and max

**Parameters**

**num**: `number`, Check if number is between min and max

**min**: `number`, Check if number is between min and max

**max**: `number`, Check if number is between min and max

**Returns**: `boolean`


### be.greater(value, num) 

Checks if number is greater then an other

**Parameters**

**value**: `number`, Checks if number is greater then an other

**num**: `number`, Checks if number is greater then an other

**Returns**: `boolean`


### be.lesser(value, num) 

Checks if number is lesser then an other

**Parameters**

**value**: `number`, Checks if number is lesser then an other

**num**: `number`, Checks if number is lesser then an other

**Returns**: `boolean`


### be.numeric(value) 

Checks if is a number as string or number type

**Parameters**

**value**: `*`, Checks if is a number as string or number type

**Returns**: `boolean`



* * *










