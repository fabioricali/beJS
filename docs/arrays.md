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



* * *










