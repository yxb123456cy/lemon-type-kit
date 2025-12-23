/**
 * @description 创建一个去重的数组版本
 * @author (轻叶)
 * @param array - 需要处理的数组
 * @returns 去重后的新数组 (T[])
 * @Date 2025-12-23
 * @example unique([1, 2, 2, 3]) // [1, 2, 3]
 */
function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * @description 将数组拆分为指定长度的块
 * @author (轻叶)
 * @param array - 需要处理的数组
 * @param size - 每个块的长度
 * @returns 拆分后的块数组 (T[][])
 * @Date 2025-12-23
 * @example chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
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
 * @description 创建一个移除了所有假值的数组
 * @author (轻叶)
 * @param array - 需要处理的数组
 * @returns 过滤后的新数组 (T[])
 * @Date 2025-12-23
 * @example compact([0, 1, false, 2, '', 3]) // [1, 2, 3]
 */
function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[] {
  return array.filter((item): item is T => Boolean(item));
}

/**
 * @description 获取数组的最后一个元素
 * @author (轻叶)
 * @param array - 需要查询的数组
 * @returns 数组的最后一个元素 (T | undefined)
 * @Date 2025-12-23
 * @example last([1, 2, 3]) // 3
 */
function last<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

/**
 * @description 获取数组的第一个元素
 * @author (轻叶)
 * @param array - 需要查询的数组
 * @returns 数组的第一个元素 (T | undefined)
 * @Date 2025-12-23
 * @example first([1, 2, 3]) // 1
 */
function first<T>(array: T[]): T | undefined {
  return array[0];
}

/**
 * @description 随机打乱数组的顺序
 * @author (轻叶)
 * @param array - 需要打乱的数组
 * @returns 打乱后的新数组 (T[])
 * @Date 2025-12-23
 * @example shuffle([1, 2, 3, 4]) // [4, 1, 3, 2]
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
