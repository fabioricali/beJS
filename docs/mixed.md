# be

Various checks.



* * *

### be.email(value) 

Check if is valid email**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, email

**Returns**: `boolean`

**Example**:
```js
be.email('fabio@rica.li') // truebe.not.email('fabiorica.li') // true
```


### be.hex(value) 

Check if is a hexadecimal**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, hex string

**Returns**: `boolean`

**Example**:
```js
be.hex('fff') // true
```


### be.hexColor(value) 

Check if is a hexadecimal color**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, hex color string

**Returns**: `boolean`

**Example**:
```js
be.hexColor('#ff0000') // true
```


### be.ipv4(value) 

Check if is a valid IPv4**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, ip string

**Returns**: `boolean`

**Example**:
```js
be.ipv4('127.0.0.1') // true
```


### be.ipv6(value) 

Check if is a valid IPv6**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, ip string

**Returns**: `boolean`

**Example**:
```js
be.ipv6('FF01:0:0:0:0:0:0:1') // true
```


### be.ip(value) 

Check if is a valid ip string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, ip string

**Returns**: `boolean`

**Example**:
```js
be.ipv('127.0.0.1') // true
```


### be.base64(value) 

Check if is base64 encoded string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, base64 string

**Returns**: `boolean`

**Example**:
```js
be.base64('aGVsbG8=') // true
```


### be.semVer(value) 

Check if is a valid semver string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, version string

**Returns**: `boolean`

**Example**:
```js
be.semVer('1.0.0') // true
```


### be.equal(value, other) 

Checks if equal**Interfaces**: `not`

**Parameters**

**value**: `Number | String | Boolean | RegExp`, first

**other**: `Number | String | Boolean | RegExp`, second

**Returns**: `boolean`

**Example**:
```js
be.equal('hello', 'hello') // truebe.equal('hello', 'hellow') // falsebe.equal(true, 'true') // false
```


### be.fiscalCodeIT(value) 

Check if is an IT fiscal code**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, code string

**Returns**: `boolean`

**Example**:
```js
be.fiscalCodeIT('OLEFBA97C64F158X') // true
```


### be.macAddress(value) 

Check if is a valid MAC address**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, MAC string

**Returns**: `boolean`

**Example**:
```js
be.macAddress('3D:F2:C9:A6:B3:4F') // true
```



* * *










