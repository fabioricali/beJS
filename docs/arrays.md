# be

Arrays checks.



* * *

### be.inArray(value, array) 

Check if an element is in the array**Interfaces**: `not`

**Parameters**

**value**: `Mixed`, element to search

**array**: `array`, array where search

**Returns**: `boolean`

**Example**:
```js
be.inArray('hello', ['hello', 'world']) //truebe.inArray('ciao', ['hello', 'world']) //falsebe.inArray(1, true) //falsebe.not.inArray(1, true) //truebe.Arrays.inArray(1, [1, 2, 3]) //true
```


### be.arrayOfStrings(value) 

Check if is an array of strings**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `array`, array

**Returns**: `* | boolean`

**Example**:
```js
be.arrayOfStrings(['hello', 'world']) // truebe.all.arrayOfStrings([     ['hello', 'world'],     ['ciao', 'mondo']]) // true
```


### be.arrayOfObjects(value) 

Check if is an array of objects**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `array`, array

**Returns**: `* | boolean`

**Example**:
```js
be.arrayOfObjects({a:1},{b:2}) // truebe.all.arrayOfObjects([     {a: 1},     {b: 2},     [1, 2, 3]]) // false
```



* * *










