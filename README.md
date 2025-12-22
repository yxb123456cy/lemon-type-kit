# 🍋 @lemondev/type-kit

> **@lemondev/type-kit** 是一个通用的 TypeScript 工具函数库，目标是成为 TypeScript 界的 **Hutool**。
>
> 专注于为前端与 Node.js 项目提供 **强类型、可复用、可组合的基础能力**。

---

## 🚀 项目定位

*   🧩 **全能工具箱**：涵盖数组、字符串、数字、日期等常用操作
*   💪 **Type-first**：所有函数具备完善的 TypeScript 类型定义
*   🌲 **Tree-shaking**：支持按需引入，体积轻量
*   🌍 **跨平台**：同时支持 Browser 与 Node.js 环境

---

## 📦 安装

```bash
# pnpm
pnpm install @lemondev/type-kit -D

# npm
npm install @lemondev/type-kit -D

# yarn
yarn add @lemondev/type-kit -D
```

---

## � 核心模块

目前包含以下核心模块，更多功能持续扩充中：

### 🛠️ Array Utils (数组工具)

```ts
import { arrayUtils } from '@lemondev/type-kit';

// 去重
arrayUtils.unique([1, 2, 2, 3]); // [1, 2, 3]

// 分块
arrayUtils.chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]

// 移除假值
arrayUtils.compact([0, 1, false, 2, '']); // [1, 2]

// 获取首尾元素
arrayUtils.first([1, 2, 3]); // 1
arrayUtils.last([1, 2, 3]); // 3

// 打乱数组
arrayUtils.shuffle([1, 2, 3, 4]);
```

### � String Utils (字符串工具)

```ts
import { stringUtils } from '@lemondev/type-kit';

// 命名转换
stringUtils.camelCase('foo-bar'); // 'fooBar'
stringUtils.kebabCase('fooBar'); // 'foo-bar'
stringUtils.pascalCase('foo bar'); // 'FooBar'
stringUtils.snakeCase('fooBar'); // 'foo_bar'

// 大小写转换
stringUtils.capitalize('fred'); // 'Fred'
stringUtils.upperFirst('fred'); // 'Fred'

// 截断与修剪
stringUtils.truncate('hi-diddly-ho there', 10); // 'hi-diddl...'
stringUtils.trimSlash('/foo/bar/'); // 'foo/bar'

// 随机字符串
stringUtils.randomString(16); // 'x8k...'

// 模板替换
stringUtils.template('Hello {name}', { name: 'World' }); // 'Hello World'

// HTML 转义
stringUtils.escapeHtml('<div>'); // '&lt;div&gt;'
```

### 🔢 Number Utils (数值工具)

```ts
import { numberUtils } from '@lemondev/type-kit';

// 类型转换
numberUtils.toNumber('12.3'); // 12.3

// 范围限制
numberUtils.clamp(10, 0, 5); // 5

// 随机数
numberUtils.random(1, 5); // 1~5 之间的整数

// 数值检查
numberUtils.isEven(2); // true
numberUtils.isOdd(3); // true
numberUtils.inRange(3, 2, 4); // true

// 统计计算
numberUtils.sum([1, 2, 3]); // 6
numberUtils.average([1, 2, 3]); // 2
numberUtils.min([1, 2, 3]); // 1
numberUtils.max([1, 2, 3]); // 3
numberUtils.round(4.006, 2); // 4.01
```

### � Date Utils (日期工具)

```ts
import { dateUtils } from '@lemondev/type-kit';

// 获取当前年份
dateUtils.getCurrentYear(); // 2025

// 获取当前日期对象
dateUtils.getCurrentDate(); // Date object
```

---

## 🛠️ 开发指南

欢迎参与项目贡献！请遵循以下指南以确保开发流程顺畅。

### 1. 环境准备

*   **Node.js**: 推荐使用 **Node.jsv22 LTS** 版本
*   **Package Manager**: 推荐使用 **pnpm**
*   **IDE**: 推荐使用 VS Code
    *   请安装 **[Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)** 插件以获得最佳的 Lint 和 Format 体验

### 2. 贡献流程

1.  **拉取代码**: Fork 并 Clone 本仓库
2.  **创建分支**: 建议基于 `master` 分支创建一个新的功能分支
    ```bash
    git checkout -b feat/your-feature-name
    ```
3.  **开发与测试**: 进行代码编写，并确保通过测试
4.  **提交更改**:
    *   先添加需要提交的文件：
        ```bash
        git add .
        ```
    *   推荐使用交互式命令进行提交（**不推荐直接使用 `git commit`**）：
        ```bash
        pnpm commit
        ```
        > 按照提示选择提交类型（如 `feat`, `fix` 等）并填写描述。
        > *   `feat`: 新功能
        > *   `fix`: 修复 Bug
        > *   `docs`: 文档变更
        > *   `refactor`: 代码重构（不改变逻辑）
        > *   `chore`: 构建/工具链变动
5.  **推送分支**:
    ```bash
    git push origin feat/your-feature-name
    ```
6.  **提交 PR**: 在 GitHub或Gitee 上发起 Pull Request

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request，共同打造 TypeScript 界的 Hutool！

---

## 📄 License

MIT License
