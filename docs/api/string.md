# String Utils

## camelCase

将字符串转换为驼峰命名法。

**签名:**
```typescript
camelCase(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.camelCase('Foo Bar'); // 'fooBar'
```

## kebabCase

将字符串转换为短横线命名法。

**签名:**
```typescript
kebabCase(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.kebabCase('fooBar'); // 'foo-bar'
```

## capitalize

将字符串的首字母转换为大写。

**签名:**
```typescript
capitalize(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.capitalize('fred'); // 'Fred'
```

## pascalCase

将字符串转换为帕斯卡命名法（大驼峰）。

**签名:**
```typescript
pascalCase(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.pascalCase('foo bar'); // 'FooBar'
```

## snakeCase

将字符串转换为下划线命名法。

**签名:**
```typescript
snakeCase(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.snakeCase('fooBar'); // 'foo_bar'
```

## upperFirst

将字符串的首字母转换为大写（不改变其余字符）。

**签名:**
```typescript
upperFirst(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.upperFirst('fred'); // 'Fred'
```

## lowerFirst

将字符串的首字母转换为小写（不改变其余字符）。

**签名:**
```typescript
lowerFirst(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.lowerFirst('Fred'); // 'fred'
```

## trimSlash

移除字符串开头和结尾的斜杠。

**签名:**
```typescript
trimSlash(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.trimSlash('/foo/bar/'); // 'foo/bar'
```

## truncate

如果字符串长度超过指定的最大长度，则截断字符串。

**签名:**
```typescript
truncate(str: string, length: number, omission: string = '...'): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.truncate('hi-diddly-ho there, neighborino', 24); // 'hi-diddly-ho there, n...'
```

## randomString

生成指定长度的随机字母数字字符串。

**签名:**
```typescript
randomString(length: number = 16): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.randomString(10); // 'x8k...'
```

## template

使用对象中的值替换字符串中的变量。

**签名:**
```typescript
template(str: string, data: Record<string, unknown>): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.template('Hello {name}', { name: 'World' }); // 'Hello World'
```

## reverse

反转字符串。

**签名:**
```typescript
reverse(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.reverse('abc'); // 'cba'
```

## stripTags

移除字符串中的所有 HTML 标签。

**签名:**
```typescript
stripTags(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.stripTags('<p>Hello</p>'); // 'Hello'
```

## escapeHtml

转义字符串中的 HTML 字符。

**签名:**
```typescript
escapeHtml(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.escapeHtml('<div>'); // '&lt;div&gt;'
```

## unescapeHtml

还原字符串中的 HTML 字符。

**签名:**
```typescript
unescapeHtml(str: string): string
```

**示例:**
```typescript
import { stringUtils } from '@lemondev/type-kit';

stringUtils.unescapeHtml('&lt;div&gt;'); // '<div>'
```
