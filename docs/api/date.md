# Date Utils

## getCurrentYear

获取当前年份。

**签名:**
```typescript
getCurrentYear(returnString: boolean = false): string | number
```

**示例:**
```typescript
import { dateUtils } from '@lemondev/type-kit';

dateUtils.getCurrentYear(); // 2025 (number)
dateUtils.getCurrentYear(true); // "2025" (string)
```

## getCurrentDate

获取当前日期的Date对象。

**签名:**
```typescript
getCurrentDate(): Date
```

**示例:**
```typescript
import { dateUtils } from '@lemondev/type-kit';

dateUtils.getCurrentDate(); // Date object
```
