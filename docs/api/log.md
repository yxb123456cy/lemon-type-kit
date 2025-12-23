# Log Utils

## debug

在控制台输出调试日志（红色文字）。

**签名:**
```typescript
debug(message: string, ...args: unknown[]): void
```

**示例:**
```typescript
import { log } from '@lemondev/type-kit';

log.debug('User {} logged in', 'Alice');
```

## info

在控制台输出信息日志。

**签名:**
```typescript
info(message: string, ...args: unknown[]): void
```

**示例:**
```typescript
import { log } from '@lemondev/type-kit';

log.info('Server started on port {}', 8080);
```

## warn

在控制台输出警告日志。

**签名:**
```typescript
warn(message: string, ...args: unknown[]): void
```

**示例:**
```typescript
import { log } from '@lemondev/type-kit';

log.warn('Disk usage is at {}%', 90);
```

## error

在控制台输出错误日志。

**签名:**
```typescript
error(message: string, ...args: unknown[]): void
```

**示例:**
```typescript
import { log } from '@lemondev/type-kit';

log.error('Failed to connect to DB: {}', 'Timeout');
```
