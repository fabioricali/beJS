# be

Urls checks.



* * *

### be.url(value) 

Check if is valid string url**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, url

**Returns**: `boolean`

**Example**:
```js
be.url('http://www.google.com') // true;be.not.url('http://www.google.com') // false;be.any.url('http://www.google.com', 'http://') // true;be.all.url('http://www.google.com', 'http://') // false;
```


### be.httpUrl(value) 

Check if is a HTTP url**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, url

**Returns**: `boolean`

**Example**:
```js
be.httpUrl('http://www.google.com') // true;be.not.httpUrl('http://www.google.com') // false;be.any.httpUrl('http://www.google.com', 'http://') // true;be.all.httpUrl('http://www.google.com', 'http://') // false;
```


### be.httpsUrl(value) 

Check if is a HTTPS url**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, url

**Returns**: `boolean`

**Example**:
```js
be.httpsUrl('https://www.google.com') // true;be.not.httpsUrl('https://www.google.com') // false;be.any.httpsUrl('https://www.google.com', 'http://') // true;be.all.httpsUrl('https://www.google.com', 'http://') // false;
```


### be.urlEncoded(value) 

Check if url is encoded**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, url encoded

**Returns**: `boolean`

**Example**:
```js
be.urlEncoded('http://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8') // true
```


### be.ftpUrl(value) 

Check if is a FTP urls**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, url

**Returns**: `boolean`

**Example**:
```js
be.ftpUrl('ftp://ftp.google.com') // true;be.not.ftpUrl('ftp://ftp.google.com') // false;be.any.ftpUrl('ftp://ftp.google.com', 'http://') // true;be.all.ftpUrl('ftp://ftp.google.com', 'http://') // false;
```


### be.ftpsUrl(value) 

Check if is a FTPS urls**Interfaces**: `all`, `any`, `not`

**Parameters**

**value**: `string`, url

**Returns**: `boolean`

**Example**:
```js
be.ftpsUrl('ftps://ftp.google.com') // true;be.not.ftpsUrl('ftps://ftp.google.com') // false;be.any.ftpsUrl('ftps://ftp.google.com', 'http://') // true;be.all.ftpsUrl('ftps://ftp.google.com', 'http://') // false;
```



* * *










