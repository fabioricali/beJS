# be

beJS has the following interfaces:

- `all`, all checks must be satisfied
- `any`, also just one check can be satisfied
- `not`, return &quot;logical not&quot; of called method

`all`, `any` can accept array or arguments

You can access the methods directly from &quot;be.boolean&quot; or from the class eg &quot;be.Types.boolean&quot;.
Also the classes supports `all`, `any`, `not`

Checks

- [Arrays](arrays.md)
- [Dates](dates.md)
- [Envs](envs.md)
- [Hashes](hashes.md)
- [Mixed](mixed.md)
- [Numbers](numbers.md)
- [Objects](objects.md)
- [Strings](strings.md)
- [Types](types.md)
- [Urls](urls.md)





**Example:**
```js
// call a method
be.boolean(true);

// call interface "not"
be.not.boolean(1);

// call interface "all" and passing arguments
be.all.boolean(true, false, true);

// call interface "all" and passing array
be.all.boolean([true, false, true]);

// call interface "any" and passing arguments
be.any.boolean(true, false, 1);
```

* * *


* * *










