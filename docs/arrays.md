# be

Arrays checks.



* * *

### be.inArray(value, array) 

Check if an element is in the arrayinterfaces: `not`

**Parameters**

**value**: `Mixed`, Element for search

**array**: `Array`, Array where search

**Returns**: `Boolean`

**Example**:
```js
be.inArray('hello', ['hello', 'world']) //truebe.inArray('ciao', ['hello', 'world']) //falsebe.inArray(1, true) //falsebe.not.inArray(1, true) //truebe.Arrays.inArray(1, [1, 2, 3]) //true
```



* * *










