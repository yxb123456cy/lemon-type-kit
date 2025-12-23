# 快速开始

本指南将帮助你快速在项目中集成和使用 Lemon Type Kit。

## 安装

你可以使用 npm, yarn 或 pnpm 进行安装：

### npm

```bash
npm install @lemondev/type-kit
```

### yarn

```bash
yarn add @lemondev/type-kit
```

### pnpm

```bash
pnpm add @lemondev/type-kit
```

## 使用示例

安装完成后，你可以直接导入并使用其中的工具函数。

### 使用模块对象

```typescript
import { arrayUtils, stringUtils } from '@lemondev/type-kit';

// 数组去重
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = arrayUtils.unique(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// 字符串驼峰转换
const str = 'hello-world';
const camelStr = stringUtils.camelCase(str);
console.log(camelStr); // 'helloWorld'
```

### 按需导入 (Tree Shaking)

如果你只需要特定的功能，也可以尝试只导入该模块（取决于导出方式，目前主要推荐通过工具对象使用，未来版本将增强直接导出的支持）。

目前推荐的使用方式是通过工具对象：

```typescript
import { numberUtils } from '@lemondev/type-kit';

const randomNum = numberUtils.random(1, 100);
console.log(`Random Number: ${randomNum}`);
```
