# Number Utils

## toNumber

将值转换为数字。

**签名:**
```typescript
toNumber(value: unknown): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.toNumber('123'); // 123
```

## clamp

将数字限制在包含的下限和上限范围内。

**签名:**
```typescript
clamp(num: number, min: number, max: number): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.clamp(10, 0, 5); // 5
```

## random

生成 min 和 max 之间的随机整数（包含）。

**签名:**
```typescript
random(min: number, max: number): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.random(1, 5); // 3 (random)
```

## isEven

检查 n 是否为偶数。

**签名:**
```typescript
isEven(num: number): boolean
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.isEven(2); // true
```

## isOdd

检查 n 是否为奇数。

**签名:**
```typescript
isOdd(num: number): boolean
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.isOdd(3); // true
```

## isPositive

检查 n 是否为正数。

**签名:**
```typescript
isPositive(num: number): boolean
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.isPositive(1); // true
```

## isNegative

检查 n 是否为负数。

**签名:**
```typescript
isNegative(num: number): boolean
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.isNegative(-1); // true
```

## sum

计算数组中所有值的总和。

**签名:**
```typescript
sum(numbers: number[]): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.sum([1, 2, 3]); // 6
```

## average

计算数组中所有值的平均值。

**签名:**
```typescript
average(numbers: number[]): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.average([1, 2, 3]); // 2
```

## min

计算数组中的最小值。

**签名:**
```typescript
min(numbers: number[]): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.min([1, 2, 3]); // 1
```

## max

计算数组中的最大值。

**签名:**
```typescript
max(numbers: number[]): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.max([1, 2, 3]); // 3
```

## inRange

检查 n 是否在 min 和 max 之间（包含）。

**签名:**
```typescript
inRange(num: number, min: number, max: number): boolean
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.inRange(3, 2, 4); // true
```

## round

将数字四舍五入到指定的精度。

**签名:**
```typescript
round(num: number, precision: number = 0): number
```

**示例:**
```typescript
import { numberUtils } from '@lemondev/type-kit';

numberUtils.round(4.006, 2); // 4.01
```
