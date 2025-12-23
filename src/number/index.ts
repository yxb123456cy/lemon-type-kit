/**
 * @description 将值转换为数字
 * @author (轻叶)
 * @param value - 需要转换的值
 * @returns 转换后的数字或 NaN (number)
 * @Date 2025-12-23
 * @example toNumber('123') // 123
 */
function toNumber(value: unknown): number {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === '') {
      return NaN;
    }
    return Number(trimmed);
  }
  return Number(value);
}

/**
 * @description 将数字限制在包含的下限和上限范围内
 * @author (轻叶)
 * @param num - 需要限制的数字
 * @param min - 下限
 * @param max - 上限
 * @returns 限制后的数字 (number)
 * @Date 2025-12-23
 * @example clamp(10, 0, 5) // 5
 */
function clamp(num: number, min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * @description 生成 min 和 max 之间的随机整数（包含）
 * @author (轻叶)
 * @param min - 最小值
 * @param max - 最大值
 * @returns min 和 max 之间的随机整数 (number)
 * @Date 2025-12-23
 * @example random(1, 5) // 3
 */
function random(min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

/**
 * @description 检查 n 是否为偶数
 * @author (轻叶)
 * @param num - 需要检查的数字
 * @returns 如果是偶数返回 true，否则返回 false (boolean)
 * @Date 2025-12-23
 * @example isEven(2) // true
 */
function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * @description 检查 n 是否为奇数
 * @author (轻叶)
 * @param num - 需要检查的数字
 * @returns 如果是奇数返回 true，否则返回 false (boolean)
 * @Date 2025-12-23
 * @example isOdd(3) // true
 */
function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * @description 检查 n 是否为正数
 * @author (轻叶)
 * @param num - 需要检查的数字
 * @returns 如果是正数返回 true，否则返回 false (boolean)
 * @Date 2025-12-23
 * @example isPositive(1) // true
 */
function isPositive(num: number): boolean {
  return num > 0;
}

/**
 * @description 检查 n 是否为负数
 * @author (轻叶)
 * @param num - 需要检查的数字
 * @returns 如果是负数返回 true，否则返回 false (boolean)
 * @Date 2025-12-23
 * @example isNegative(-1) // true
 */
function isNegative(num: number): boolean {
  return num < 0;
}

/**
 * @description 计算数组中所有值的总和
 * @author (轻叶)
 * @param numbers - 数字数组
 * @returns 总和 (number)
 * @Date 2025-12-23
 * @example sum([1, 2, 3]) // 6
 */
function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

/**
 * @description 计算数组中所有值的平均值
 * @author (轻叶)
 * @param numbers - 数字数组
 * @returns 平均值 (number)
 * @Date 2025-12-23
 * @example average([1, 2, 3]) // 2
 */
function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

/**
 * @description 计算数组中的最小值
 * @author (轻叶)
 * @param numbers - 数字数组
 * @returns 最小值 (number)
 * @Date 2025-12-23
 * @example min([1, 2, 3]) // 1
 */
function min(numbers: number[]): number {
  if (numbers.length === 0) return Number.POSITIVE_INFINITY;
  return Math.min(...numbers);
}

/**
 * @description 计算数组中的最大值
 * @author (轻叶)
 * @param numbers - 数字数组
 * @returns 最大值 (number)
 * @Date 2025-12-23
 * @example max([1, 2, 3]) // 3
 */
function max(numbers: number[]): number {
  if (numbers.length === 0) return Number.NEGATIVE_INFINITY;
  return Math.max(...numbers);
}

/**
 * @description 检查 n 是否在 min 和 max 之间（包含）
 * @author (轻叶)
 * @param num - 需要检查的数字
 * @param min - 下限
 * @param max - 上限
 * @returns 如果在范围内返回 true，否则返回 false (boolean)
 * @Date 2025-12-23
 * @example inRange(3, 2, 4) // true
 */
function inRange(num: number, min: number, max: number): boolean {
  const start = Math.min(min, max);
  const end = Math.max(min, max);
  return num >= start && num <= end;
}

/**
 * @description 将数字四舍五入到指定的精度
 * @author (轻叶)
 * @param num - 需要四舍五入的数字
 * @param precision - 精度，默认为 0
 * @returns 四舍五入后的数字 (number)
 * @Date 2025-12-23
 * @example round(4.006, 2) // 4.01
 */
function round(num: number, precision = 0): number {
  const multiplier = 10 ** precision;
  return Math.round(num * multiplier) / multiplier;
}

export const numberUtils = {
  toNumber,
  clamp,
  random,
  isEven,
  isOdd,
  isPositive,
  isNegative,
  sum,
  average,
  min,
  max,
  inRange,
  round,
};
