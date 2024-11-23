# 工具函数

## 字符串工具

### isString

> 判断是否为字符串。

```ts
import { isString } from '@mylib/utils';

isString('hello'); // true
isString(123); // false
```

## 数组工具

### isArray

> 判断是否为数组。

```ts
import { isArray } from '@mylib/utils';

isArray([1, 2, 3]); // true
isArray('hello'); // false
```
