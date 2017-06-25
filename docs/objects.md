# be

Objects checks.



* * *

### be.propertyOf(value, object) 

Check if is a property of an object**Interfaces**: `not`

**Parameters**

**value**: `Mixed`, property that you want to search

**object**: `Object`, object target

**Returns**: `boolean`

**Example**:
```js
be.propertyOf('firstName', {firstName: 'Teddy', lastName: 'Red'}) // true
```


### be.propertyCount(object, value) 

Count properties of an object**Interfaces**: `not`

**Parameters**

**object**: `Object`, object

**value**: `Integer`, count

**Returns**: `boolean`

**Example**:
```js
be.propertyCount({a: 1, b: 2, c: 3}, 3) // true
```



* * *










