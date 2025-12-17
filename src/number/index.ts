/**
 * Converts a value to a number.
 * 将值转换为数字。
 * Returns NaN if the value cannot be converted or is an empty string.
 * 如果值无法转换或是空字符串，则返回 NaN。
 *
 * @param value - The value to convert / 需要转换的值
 * @returns The converted number or NaN / 转换后的数字或 NaN
 * @example
 * toNumber(123) // 123
 * toNumber('123') // 123
 * toNumber('12.3') // 12.3
 * toNumber('') // NaN
 * toNumber(null) // 0 (Standard Number behavior)
 * toNumber(undefined) // NaN
 */
export function toNumber(value: unknown): number {
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
 * Clamps a number within the inclusive lower and upper bounds.
 * 将数字限制在包含的下限和上限范围内。
 *
 * @param num - The number to clamp / 需要限制的数字
 * @param min - The lower bound / 下限
 * @param max - The upper bound / 上限
 * @returns The clamped number / 限制后的数字
 * @example
 * clamp(10, 0, 5) // 5
 * clamp(-5, 0, 5) // 0
 * clamp(3, 0, 5) // 3
 */
export function clamp(num: number, min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Generates a random integer between min and max (inclusive).
 * 生成 min 和 max 之间的随机整数（包含）。
 *
 * @param min - The minimum value / 最小值
 * @param max - The maximum value / 最大值
 * @returns A random integer between min and max / min 和 max 之间的随机整数
 * @example
 * random(1, 5) // 1, 2, 3, 4, or 5
 */
export function random(min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

/**
 * Checks if `n` is even.
 * 检查 `n` 是否为偶数。
 *
 * @param num - The number to check / 需要检查的数字
 * @returns Returns `true` if `n` is even, else `false` / 如果是偶数返回 true，否则返回 false
 * @example
 * isEven(2) // true
 * isEven(3) // false
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Checks if `n` is odd.
 * 检查 `n` 是否为奇数。
 *
 * @param num - The number to check / 需要检查的数字
 * @returns Returns `true` if `n` is odd, else `false` / 如果是奇数返回 true，否则返回 false
 * @example
 * isOdd(2) // false
 * isOdd(3) // true
 */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * Checks if `n` is positive.
 * 检查 `n` 是否为正数。
 *
 * @param num - The number to check / 需要检查的数字
 * @returns Returns `true` if `n` is positive, else `false` / 如果是正数返回 true，否则返回 false
 * @example
 * isPositive(1) // true
 * isPositive(-1) // false
 * isPositive(0) // false
 */
export function isPositive(num: number): boolean {
  return num > 0;
}

/**
 * Checks if `n` is negative.
 * 检查 `n` 是否为负数。
 *
 * @param num - The number to check / 需要检查的数字
 * @returns Returns `true` if `n` is negative, else `false` / 如果是负数返回 true，否则返回 false
 * @example
 * isNegative(-1) // true
 * isNegative(1) // false
 * isNegative(0) // false
 */
export function isNegative(num: number): boolean {
  return num < 0;
}

/**
 * Computes the sum of the values in `array`.
 * 计算数组中所有值的总和。
 *
 * @param numbers - The array to iterate over / 数字数组
 * @returns The sum / 总和
 * @example
 * sum([1, 2, 3]) // 6
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

/**
 * Computes the mean of the values in `array`.
 * 计算数组中所有值的平均值。
 *
 * @param numbers - The array to iterate over / 数字数组
 * @returns The mean / 平均值
 * @example
 * average([1, 2, 3]) // 2
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

/**
 * Computes the minimum value of `array`.
 * 计算数组中的最小值。
 *
 * @param numbers - The array to iterate over / 数字数组
 * @returns The minimum value / 最小值
 * @example
 * min([1, 2, 3]) // 1
 */
export function min(numbers: number[]): number {
  if (numbers.length === 0) return Number.POSITIVE_INFINITY;
  return Math.min(...numbers);
}

/**
 * Computes the maximum value of `array`.
 * 计算数组中的最大值。
 *
 * @param numbers - The array to iterate over / 数字数组
 * @returns The maximum value / 最大值
 * @example
 * max([1, 2, 3]) // 3
 */
export function max(numbers: number[]): number {
  if (numbers.length === 0) return Number.NEGATIVE_INFINITY;
  return Math.max(...numbers);
}

/**
 * Checks if `n` is between `min` and `max` (inclusive).
 * 检查 `n` 是否在 `min` 和 `max` 之间（包含）。
 *
 * @param num - The number to check / 需要检查的数字
 * @param min - The lower bound / 下限
 * @param max - The upper bound / 上限
 * @returns Returns `true` if `n` is between `min` and `max`, else `false` / 如果在范围内返回 true，否则返回 false
 * @example
 * inRange(3, 2, 4) // true
 * inRange(4, 8, 2) // true
 * inRange(2, 2, 4) // true
 */
export function inRange(num: number, min: number, max: number): boolean {
  const start = Math.min(min, max);
  const end = Math.max(min, max);
  return num >= start && num <= end;
}

/**
 * Rounds `number` to `precision`.
 * 将数字四舍五入到指定的精度。
 *
 * @param num - The number to round / 需要四舍五入的数字
 * @param precision - The precision to round to / 精度，默认为 0
 * @returns The rounded number / 四舍五入后的数字
 * @example
 * round(4.006) // 4
 * round(4.006, 2) // 4.01
 * round(4060, -2) // 4100
 */
export function round(num: number, precision = 0): number {
  const multiplier = 10 ** precision;
  return Math.round(num * multiplier) / multiplier;
}
