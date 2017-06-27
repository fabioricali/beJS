# be

beJS has the following interfaces:- `all`, all checks must be satisfied- `any`, also just one check can be satisfied- `not`, return "logical not" of called method`all`, `any` can accept array or argumentsYou can access the methods directly from "be.boolean" or from the class eg "be.Types.boolean".Also the classes supports `all`, `any`, `not`Checks- [Arrays](arrays.md)- [Dates](dates.md)- [Envs](envs.md)- [Hashes](hashes.md)- [Mixed](mixed.md)- [Numbers](numbers.md)- [Objects](objects.md)- [Strings](strings.md)- [Types](types.md)- [Urls](urls.md)- [CreditCards](creditCards.md)- [PostalCodes](postalCodes.md)- [DOM](dom.md)



**Example:**
```js
// call a methodbe.boolean(true);// call interface "not"be.not.boolean(1);// call interface "all" and passing argumentsbe.all.boolean(true, false, true);// call interface "all" and passing arraybe.all.boolean([true, false, true]);// call interface "any" and passing argumentsbe.any.boolean(true, false, 1);
```

* * *

### be.getVersion() 

Get version of framework

**Returns**: `string`



* * *










