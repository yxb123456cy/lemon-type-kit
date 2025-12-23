# Phone Utils

## hideAfter

隐藏手机号最后 4 位，使用 "*" 替换。

**签名:**
```typescript
hideAfter(phone?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.hideAfter('13812345678'); // '1381234****'
```

## hideBefore

隐藏手机号前 7 位，使用 "*" 替换。

**签名:**
```typescript
hideBefore(phone?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.hideBefore('13812345678'); // '*******5678'
```

## hideBetween

隐藏手机号中间 4 位，使用 "*" 替换。

**签名:**
```typescript
hideBetween(phone?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.hideBetween('13812345678'); // '138****5678'
```

## subAfter

获取手机号后 4 位。

**签名:**
```typescript
subAfter(phone?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.subAfter('13812345678'); // '5678'
```

## subBefore

获取手机号前 3 位。

**签名:**
```typescript
subBefore(phone?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.subBefore('13812345678'); // '138'
```

## subBetween

获取手机号中间 4 位。

**签名:**
```typescript
subBetween(phone?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.subBetween('13812345678'); // '1234'
```

## isMobile

验证是否为中国大陆手机号。

**签名:**
```typescript
isMobile(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isMobile('13812345678'); // true
```

## isMobileHk

验证是否为中国香港手机号。

**签名:**
```typescript
isMobileHk(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isMobileHk('51234567'); // true
```

## isMobileMo

验证是否为中国澳门手机号。

**签名:**
```typescript
isMobileMo(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isMobileMo('61234567'); // true
```

## isMobileTw

验证是否为中国台湾手机号。

**签名:**
```typescript
isMobileTw(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isMobileTw('0912345678'); // true
```

## isTel

验证是否为中国大陆座机号码。

**签名:**
```typescript
isTel(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isTel('010-12345678'); // true
```

## isTel400800

验证是否为 400 / 800 电话。

**签名:**
```typescript
isTel400800(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isTel400800('400-123-4567'); // true
```

## isPhone

验证是否为手机 / 座机 / 400 / 800 / 港澳台号码。

**签名:**
```typescript
isPhone(value?: CharSequence): boolean
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.isPhone('13812345678'); // true
```

## subTelAfter

获取固话号码中的号码部分。

**签名:**
```typescript
subTelAfter(value?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.subTelAfter('010-12345678'); // '12345678'
```

## subTelBefore

获取固话号码中的区号。

**签名:**
```typescript
subTelBefore(value?: CharSequence): CharSequence
```

**示例:**
```typescript
import { phoneUtil } from '@lemondev/type-kit';

phoneUtil.subTelBefore('010-12345678'); // '010'
```
