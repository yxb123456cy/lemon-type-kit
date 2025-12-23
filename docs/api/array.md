# Array Utils

## unique

创建一个去重的数组版本。

**签名:**
```typescript
unique<T>(array: T[]): T[]
```

**示例:**
```typescript
import { arrayUtils } from '@lemondev/type-kit';

arrayUtils.unique([1, 2, 2, 3]); // [1, 2, 3]
```

## chunk

将数组拆分为指定长度的块。

**签名:**
```typescript
chunk<T>(array: T[], size: number): T[][]
```

**示例:**
```typescript
import { arrayUtils } from '@lemondev/type-kit';

arrayUtils.chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
```

## compact

创建一个移除了所有假值的数组。

**签名:**
```typescript
compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[]
```

**示例:**
```typescript
import { arrayUtils } from '@lemondev/type-kit';

arrayUtils.compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
```

## last

获取数组的最后一个元素。

**签名:**
```typescript
last<T>(array: T[]): T | undefined
```

**示例:**
```typescript
import { arrayUtils } from '@lemondev/type-kit';

arrayUtils.last([1, 2, 3]); // 3
```

## first

获取数组的第一个元素。

**签名:**
```typescript
first<T>(array: T[]): T | undefined
```

**示例:**
```typescript
import { arrayUtils } from '@lemondev/type-kit';

arrayUtils.first([1, 2, 3]); // 1
```

## shuffle

随机打乱数组的顺序。

**签名:**
```typescript
shuffle<T>(array: T[]): T[]
```

**示例:**
```typescript
import { arrayUtils } from '@lemondev/type-kit';

arrayUtils.shuffle([1, 2, 3, 4]); // [4, 1, 3, 2] (random)
```
