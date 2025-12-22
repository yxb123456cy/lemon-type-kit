/**
 * Creates a duplicate-free version of an array.
 * 创建一个去重的数组版本。
 *
 * @param array - The array to inspect / 需要处理的数组
 * @returns The new duplicate free array / 去重后的新数组
 * @example
 * unique([1, 2, 2, 3]) // [1, 2, 3]
 */
function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Creates an array of elements split into groups the length of `size`.
 * 将数组拆分为指定长度的块。
 *
 * @param array - The array to process / 需要处理的数组
 * @param size - The length of each chunk / 每个块的长度
 * @returns The new array of chunks / 拆分后的块数组
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
 * chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
 */
function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Creates an array with all falsey values removed.
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 * 创建一个移除了所有假值的数组。
 * 假值包括 `false`, `null`, `0`, `""`, `undefined`, 和 `NaN`。
 *
 * @param array - The array to compact / 需要处理的数组
 * @returns The new array of filtered values / 过滤后的新数组
 * @example
 * compact([0, 1, false, 2, '', 3]) // [1, 2, 3]
 */
function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[] {
  return array.filter((item): item is T => Boolean(item));
}

/**
 * Gets the last element of array.
 * 获取数组的最后一个元素。
 *
 * @param array - The array to query / 需要查询的数组
 * @returns The last element of array / 数组的最后一个元素
 * @example
 * last([1, 2, 3]) // 3
 */
function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

/**
 * Gets the first element of array.
 * 获取数组的第一个元素。
 *
 * @param array - The array to query / 需要查询的数组
 * @returns The first element of array / 数组的第一个元素
 * @example
 * first([1, 2, 3]) // 1
 */
function first<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * Randomizes the order of values of an array.
 * 随机打乱数组的顺序。
 *
 * @param array - The array to shuffle / 需要打乱的数组
 * @returns The new shuffled array / 打乱后的新数组
 * @example
 * shuffle([1, 2, 3, 4]) // [4, 1, 3, 2]
 */
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const arrayUtils = {
  unique,
  chunk,
  compact,
  last,
  first,
  shuffle,
};
