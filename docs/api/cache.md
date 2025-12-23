# Cache Utils

## set

设置缓存。

**签名:**
```typescript
set(key: string, value: unknown, ttl: number = 0): void
```

**示例:**
```typescript
import { cacheUtils } from '@lemondev/type-kit';

cacheUtils.set('token', 'xyz', 5000);
```

## get

获取缓存。

**签名:**
```typescript
get(key: string): unknown | null
```

**示例:**
```typescript
import { cacheUtils } from '@lemondev/type-kit';

cacheUtils.get('token'); // 'xyz'
```

## remove

移除缓存。

**签名:**
```typescript
remove(key: string): void
```

**示例:**
```typescript
import { cacheUtils } from '@lemondev/type-kit';

cacheUtils.remove('token');
```

## clear

清空所有缓存。

**签名:**
```typescript
clear(): void
```

**示例:**
```typescript
import { cacheUtils } from '@lemondev/type-kit';

cacheUtils.clear();
```
