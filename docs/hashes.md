# be

Hashes checks.



* * *

### be.md5(value) 

Check if is a valid MD5 hash string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, hash string

**Returns**: `boolean`

**Example**:
```js
be.md5('00236a2ae558018ed13b5222ef1bd977') // truebe.not.md5('00236a2ae558018ed13b5222ef1bd977') // false
```


### be.sha1(value) 

Check if is a valid SHA1 hash string**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, hash string

**Returns**: `boolean`

**Example**:
```js
be.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // truebe.not.sha1('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d') // false
```



* * *










