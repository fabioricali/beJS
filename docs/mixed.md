# be

Various checks.



* * *

### be.email(value) 

Check if is valid email**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, email

**Returns**: `Boolean`

**Example**:
```js
be.email('fabio@rica.li') // truebe.not.email('fabiorica.li') // true
```


### be.hex(value) 

Check if is a hexadecimal**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, hex string

**Returns**: `Boolean`

**Example**:
```js
be.hex('fff') // true
```


### be.hexColor(value) 

Check if is a hexadecimal color**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, hex color string

**Returns**: `Boolean`

**Example**:
```js
be.hexColor('#ff0000') // true
```


### be.ipv4(value) 

Check if is a valid IPv4**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, ip string

**Returns**: `Boolean`

**Example**:
```js
be.ipv4('127.0.0.1') // true
```


### be.ipv6(value) 

Check if is a valid IPv6**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, ip string

**Returns**: `Boolean`

**Example**:
```js
be.ipv6('FF01:0:0:0:0:0:0:1') // true
```


### be.ip(value) 

Check if is a valid ip string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, ip string

**Returns**: `Boolean`

**Example**:
```js
be.ipv('127.0.0.1') // true
```


### be.base64(value) 

Check if is base64 encoded string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, base64 string

**Returns**: `Boolean`

**Example**:
```js
be.base64('aGVsbG8=') // true
```


### be.semVer(value) 

Check if is a valid semver string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `String`, version string

**Returns**: `Boolean`

**Example**:
```js
be.semVer('1.0.0') // true
```


### be.equal(value, other) 

Checks if equal**Interfaces**: `not`

**Parameters**

**value**: `Number | String | Boolean | RegExp`, first

**other**: `Number | String | Boolean | RegExp`, second

**Returns**: `Boolean`

**Example**:
```js
be.equal('hello', 'hello') // truebe.equal('hello', 'hellow') // falsebe.equal(true, 'true') // false
```



* * *










