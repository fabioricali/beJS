# be

Types checks.



* * *

### be.classOf(object, className) 

Check [object ?] class**Interfaces**: `not`

**Parameters**

**object**: `Mixed`, object

**className**: `string`, class name

**Returns**: `boolean`

**Example**:
```js
be.classOf(2, 'number') // truebe.classOf([1, 2, 3], 'array') // truebe.classOf({a: 1, b: 2}, 'object') // truebe.classOf({a: 1, b: 2}, 'array') // falsebe.classOf(/hello/, 'regexp') // truebe.classOf(true, 'boolean') // true
```


### be.boolean(value) 

Check if is valid boolean**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.boolean(false) // truebe.boolean('true') // false
```


### be.booleanFalse(value) 

Check if is false boolean type**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.booleanFalse(false) // truebe.booleanFalse(true) // false
```


### be.booleanTrue(value) 

Check if is true boolean type**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.booleanTrue(true) // truebe.booleanTrue(false) // false
```


### be.number(value) 

Check if is valid number**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.number(1) // truebe.number(false) // false
```


### be.string(value) 

Check if is valid string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.string('hello') // truebe.string(false) // false
```


### be.undefined(value) 

Check if is undefined value**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.undefined(undefined) // truebe.undefined(null) // false
```


### be.null(value) 

Check if is null**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.null(null) // truebe.null(undefined) // false
```


### be.object(value) 

Check if is a object**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.object({a: 1, b: 2}) // truebe.object([1, 2, 3]) // false
```


### be.array(value) 

Check if is an array**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.array([1, 2, 3]) // truebe.array({a: 1, b: 2}) // false
```


### be.json(value) 

Check if is a JSON string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, json string

**Returns**: `boolean`

**Example**:
```js
be.json('{"a": 1, "b": 2}') // truebe.json({a: 1, b: 2}) // false
```


### be.date(value) 

Check if is date object**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, date object

**Returns**: `boolean`

**Example**:
```js
be.date(new Date()) // truebe.date('2017-12-25') // false
```


### be.function(value) 

Check if is a function**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.function(function(){return 1 + 2}) // truebe.function(new Date()) // false
```


### be.regexp(value) 

Check if is a valid RegExp**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.regexp(/hello/) // truebe.regexp('hello') // falsebe.regexp(new RegExp(/hello/)) // true
```


### be.sameType(value, other) 

Check if both arguments are same type**Interfaces**: `not`

**Parameters**

**value**: `Mixed`, first

**other**: `Mixed`, second

**Returns**: `boolean`

**Example**:
```js
be.sameType(1, 1) // truebe.sameType(1, '1') // false
```


### be.empty(value) 

Check if is empty**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.empty('') // truebe.empty(' ') // falsebe.empty({}) // truebe.empty([]) // true
```


### be.falsy(value) 

Check if a falsy value**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.falsy(false) // truebe.falsy(null) // truebe.falsy() // truebe.falsy(0) // truebe.falsy(true) // false
```


### be.truthy(value) 

Check if a truthy value**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, Check if a truthy value**Interfaces**: `all`, `any`, `not`

**Returns**: `boolean`

**Example**:
```js
be.truthy('hello') // truebe.truthy({}) // truebe.truthy([]) // truebe.truthy(2) // truebe.truthy(false) // falsebe.truthy(null) // falsebe.truthy(undefined) // false
```


### be.error(value) 

Check if is an error object**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.error(new Error('my error')) // truebe.error({}) // false
```


### be.argument(value) 

Check if is an arguments**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `Mixed`, value

**Returns**: `boolean`

**Example**:
```js
be.argument(arguments) // truebe.argument({}) // false
```



* * *










