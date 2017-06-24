# be

Strings checks.



* * *

### be.camelCase(value) 

Check if string is in camelCase format**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.camelCase('testTest') // truebe.camelCase('test_test') // false
```


### be.snakeCase(value) 

Check if string is in snake_case format**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.snakeCase('test_test') // truebe.snakeCase('testTest') // false
```


### be.kebabCase(value) 

Check if string is in kebab-case format**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.kebabCase('test-test') // truebe.kebabCase('testTest') // false
```


### be.similarity(string1, string2, threshold) 

Check similarity between two string**Interfaces**: `not`

**Parameters**

**string1**: `String`, string

**string2**: `String`, string target

**threshold**: `int | float`, 0 to 1

**Returns**: `Boolean`

**Example**:
```js
be.similarity('hello', 'hello', 1) // truebe.similarity('hello', 'hello world', 1) // false
```


### be.contains(string, value) 

Check if string contains a value**Interfaces**: `not`

**Parameters**

**string**: `String`, string

**value**: `String`, string target

**Returns**: `Boolean`

**Example**:
```js
be.contains('hello', 'hello world') // true
```


### be.lowerCase(value) 

Check if string is lower case**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.lowerCase('hello') // true
```


### be.upperCase(value) 

Check if string is upper case**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.upperCase('HELLO') // true
```


### be.word(value) 

Check if is a word**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.word('hello') // truebe.word('hello world') // false
```


### be.capitalized(value) 

Check if string is capitalized**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.capitalized('Hello World') // truebe.capitalized('hello world') // false
```


### be.emptyString(value) 

Check if string is empty**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.emptyString('') // true
```


### be.alphanumeric(value) 

Check if is alphanumeric string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.alphanumeric('hello123456') // true
```


### be.startWith(value, string, insensitive) 

Check if string start with a value**Interfaces**: `not`

**Parameters**

**value**: `String`, start string

**string**: `String`, string target

**insensitive**: `Boolean`, case sensitive

**Returns**: `Boolean`

**Example**:
```js
be.startWith('hello', 'hello world') // truebe.startWith('hello', 'HELLO world', true) // false
```


### be.char(value) 

Check if value is a single char**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.char('a') // truebe.char('ab') // false
```


### be.space(value) 

Check if string is a space**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.space(' ') // truebe.space('a') // false
```


### be.spaces(value) 

Check if exists spaces in string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, string

**Returns**: `Boolean`

**Example**:
```js
be.spaces('hello world') // truebe.spaces('helloworld') // false
```



* * *










