# be

DOM checks.



* * *

### be.domElement(element) 

Check if is a valid DOM element**Interfaces**: `all`, `any`, `not`

**Parameters**

**element**: `object`, element object

**Returns**: `boolean`

**Example**:
```js
be.domElement(document.getElementById('test')) // true
```


### be.domElementTag(element, tag) 

Check if element is a specific tag**Interfaces**: `not`

**Parameters**

**element**: `object`, element object

**tag**: `string`, tag name

**Returns**: `boolean`

**Example**:
```js
be.domElementTag(document.getElementsByTagName('body')[0], 'ul') // false
```



* * *










