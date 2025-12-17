# 🍋 Lemon-type-kit

> **Lemon-type-kit** 是 Lemon 研发效能平台的基础 TypeScript 类型与函数工具集合，定位为：
>
> - **零业务依赖**
> - **Type-first 设计**
> - **前后端 / 多子应用共享**
> - **可作为独立 npm 包发布**

---

## 一、整体目录结构

```txt
lemon-type-kit
├─ core/            # 核心运行时工具（零依赖）
├─ type/            # 纯类型工具（无 runtime）
├─ object/
├─ array/
├─ string/
├─ number/
├─ date/
├─ function/
├─ async/
├─ collection/
├─ validation/
├─ env/
├─ browser/
├─ storage/
├─ network/
├─ business/        # 预留（默认不导出）
└─ index.ts
```

---

## 二、type —— 类型工具（核心模块）

> 仅包含 `type` / `interface` / `enum`

### 1️⃣ 基础类型

```ts
type Nullable<T> = T | null | undefined
type NonUndefined<T> = T extends undefined ? never : T
type Primitive = string | number | boolean | bigint | symbol | null | undefined
type ValueOf<T> = T[keyof T]
```

### 2️⃣ 对象类型

```ts
type DeepPartial<T>
type DeepReadonly<T>
type Mutable<T>
type PickByType<T, U>
type OmitByType<T, U>
type Merge<A, B>
```

### 3️⃣ 函数与 Promise

```ts
type Fn<R = any> = (...args: any[]) => R
type AsyncFn<R = any> = (...args: any[]) => Promise<R>
type Awaited<T>
```

---

## 三、core —— 核心基础函数

> 不依赖 DOM，不区分 Node / Browser

```ts
isNil(value): value is null | undefined
isDef<T>(value: T): value is NonNullable<T>
noop(): void
identity<T>(value: T): T
assert(condition: boolean, message?: string): asserts condition
sleep(ms: number): Promise<void>
once<T extends Fn>(fn: T): T
```

---

## 四、object —— 对象工具

```ts
get<T, D>(obj: T, path: string, defaultValue?: D): D
set<T>(obj: T, path: string, value: any): T
cloneDeep<T>(obj: T): T
merge<T, U>(target: T, source: U): T & U
pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

---

## 五、array —— 数组工具

```ts
unique<T>(array: T[]): T[]
chunk<T>(array: T[], size: number): T[][]
flatten<T>(array: T[]): T[]
groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]>
sortBy<T>(array: T[], key: keyof T): T[]
difference<T>(a: T[], b: T[]): T[]
```

---

## 六、string —— 字符串工具

```ts
camelCase(str: string): string
kebabCase(str: string): string
capitalize(str: string): string
trimSlash(str: string): string
randomString(length?: number): string
template(str: string, data: Record<string, any>): string
```

---

## 七、number —— 数值工具

```ts
toNumber(value: unknown): number
clamp(num: number, min: number, max: number): number
random(min: number, max: number): number
formatNumber(num: number, locale?: string): string
```

---

## 八、date —— 日期工具

```ts
formatDate(date: Date | string | number, format?: string): string
isSameDay(a: Date, b: Date): boolean
addDays(date: Date, days: number): Date
diffDays(a: Date, b: Date): number
```

---

## 九、function —— 函数增强

```ts
debounce<T extends Fn>(fn: T, wait: number): T
throttle<T extends Fn>(fn: T, wait: number): T
memoize<T extends Fn>(fn: T): T
compose(...fns: Fn[]): Fn
pipe(...fns: Fn[]): Fn
```

---

## 十、async —— 异步工具

```ts
retry<T>(fn: () => Promise<T>, times: number): Promise<T>
withTimeout<T>(promise: Promise<T>, ms: number): Promise<T>
parallelLimit<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]>
```

---

## 十一、collection —— 集合工具

```ts
toMap<T, K extends keyof T>(array: T[], key: K): Map<T[K], T>
indexBy<T, K extends keyof T>(array: T[], key: K): Record<string, T>
```

---

## 十二、validation —— 校验工具

```ts
isEmail(value: string): boolean
isPhone(value: string): boolean
isURL(value: string): boolean
isEmpty(value: unknown): boolean
```

---

## 十三、env —— 环境判断

```ts
isBrowser(): boolean
isNode(): boolean
isDev(): boolean
isProd(): boolean
```

---

## 十四、browser —— 浏览器工具（仅 Browser）

```ts
copyText(text: string): Promise<void>
downloadFile(blob: Blob, filename: string): void
getQueryParam(key: string): string | null
setTitle(title: string): void
```

---

## 十五、storage —— 存储封装

```ts
createStorage<T>(storage: Storage): {
  get(key: string): T | null
  set(key: string, value: T, expire?: number): void
  remove(key: string): void
  clear(): void
}
```

---

## 十六、network —— 网络辅助

```ts
serializeParams(params: Record<string, any>): string
parseURLParams(url?: string): Record<string, string>
createAbortableFetch(): { fetch: typeof fetch; abort: () => void }
```

---

## 十七、导出规范（index.ts）

```ts
export * from './type'
export * from './core'
export * from './object'
export * from './array'
export * from './string'
export * from './number'
export * from './date'
export * from './function'
export * from './async'
export * from './collection'
export * from './validation'
export * from './env'
```

---

## ✅ 设计说明

- `type` 模块 **最优先维护**
- browser / storage / network 可按需拆包
- business 默认不导出，避免污染通用库
- 所有函数 **必须具备 TS 类型签名**

---

> 📦 推荐包名：`@lemon/type-kit`
>
> 🧠 目标：**成为 Lemon 平台所有子应用的类型与基础能力中枢**

