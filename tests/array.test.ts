import { describe, expect, it } from 'vitest';
import { arrayUtils } from '../src/index';

describe('array utils', () => {
  describe('unique', () => {
    // 应该移除重复的值
    it('should remove duplicate values', () => {
      expect(arrayUtils.unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
      expect(arrayUtils.unique(['a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });

    // 应该处理空数组
    it('should handle empty array', () => {
      expect(arrayUtils.unique([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    // 应该将数组拆分为指定大小的块
    it('should split array into chunks', () => {
      expect(arrayUtils.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
      expect(arrayUtils.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });

    // 如果 size <= 0 应该返回空数组
    it('should return empty array if size <= 0', () => {
      expect(arrayUtils.chunk([1, 2], 0)).toEqual([]);
      expect(arrayUtils.chunk([1, 2], -1)).toEqual([]);
    });
  });

  describe('compact', () => {
    // 应该移除所有假值
    it('should remove all falsey values', () => {
      expect(arrayUtils.compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([
        1, 2, 3,
      ]);
    });
  });

  describe('last', () => {
    // 应该返回数组的最后一个元素
    it('should return the last element', () => {
      expect(arrayUtils.last([1, 2, 3])).toBe(3);
    });

    // 如果数组为空应该返回 undefined
    it('should return undefined for empty array', () => {
      expect(arrayUtils.last([])).toBeUndefined();
    });
  });

  describe('first', () => {
    // 应该返回数组的第一个元素
    it('should return the first element', () => {
      expect(arrayUtils.first([1, 2, 3])).toBe(1);
    });

    // 如果数组为空应该返回 undefined
    it('should return undefined for empty array', () => {
      expect(arrayUtils.first([])).toBeUndefined();
    });
  });

  describe('shuffle', () => {
    // 应该打乱数组顺序
    it('should shuffle array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = arrayUtils.shuffle(arr);
      expect(shuffled).toHaveLength(arr.length);
      expect(shuffled.sort()).toEqual(arr.sort());
      // 注意：这里理论上有极小概率 shuffle 后顺序完全一致，但对于测试目的通常忽略
    });

    // 不应该修改原数组
    it('should not modify original array', () => {
      const arr = [1, 2, 3];
      const original = [...arr];
      arrayUtils.shuffle(arr);
      expect(arr).toEqual(original);
    });
  });
});
