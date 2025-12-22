import { describe, expect, it } from 'vitest';
import {
  average,
  clamp,
  inRange,
  isEven,
  isNegative,
  isOdd,
  isPositive,
  max,
  min,
  random,
  round,
  sum,
  toNumber,
} from '../src/number/index';

describe('number utils', () => {
  describe('toNumber', () => {
    // 应该将数字转换为数字
    it('should convert number to number', () => {
      expect(toNumber(123)).toBe(123);
      expect(toNumber(0)).toBe(0);
      expect(toNumber(-1.5)).toBe(-1.5);
    });

    // 应该将字符串转换为数字
    it('should convert string to number', () => {
      expect(toNumber('123')).toBe(123);
      expect(toNumber('12.3')).toBe(12.3);
      expect(toNumber('  456  ')).toBe(456);
    });

    // 应该对无效输入返回 NaN
    it('should return NaN for invalid inputs', () => {
      expect(toNumber('abc')).toBeNaN();
      expect(toNumber('')).toBeNaN();
      expect(toNumber('  ')).toBeNaN();
      expect(toNumber(undefined)).toBeNaN();
      expect(toNumber({})).toBeNaN();
    });

    // 应该处理 null
    it('should handle null', () => {
      expect(toNumber(null)).toBe(0);
    });
  });

  describe('clamp', () => {
    // 应该将值限制在范围内
    it('should clamp value within range', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });

    // 应该处理浮点数
    it('should handle floating point numbers', () => {
      expect(clamp(10.5, 0, 5)).toBe(5);
      expect(clamp(2.5, 0, 5)).toBe(2.5);
    });

    // 如果 min > max 应该抛出错误
    it('should throw error if min > max', () => {
      expect(() => clamp(1, 5, 0)).toThrow();
    });
  });

  describe('random', () => {
    // 应该生成范围内的数字
    it('should generate number within range', () => {
      const min = 1;
      const max = 5;
      for (let i = 0; i < 100; i++) {
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    // 应该处理 min 等于 max 的情况
    it('should handle min equals max', () => {
      expect(random(5, 5)).toBe(5);
    });

    // 如果 min > max 应该抛出错误
    it('should throw error if min > max', () => {
      expect(() => random(10, 5)).toThrow();
    });
  });

  describe('isEven', () => {
    // 应该正确判断偶数
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    // 应该正确判断奇数
    it('should return false for odd numbers', () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });

  describe('isOdd', () => {
    // 应该正确判断奇数
    it('should return true for odd numbers', () => {
      expect(isOdd(3)).toBe(true);
      expect(isOdd(-1)).toBe(true);
    });

    // 应该正确判断偶数
    it('should return false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
    });
  });

  describe('isPositive', () => {
    // 应该正确判断正数
    it('should return true for positive numbers', () => {
      expect(isPositive(1)).toBe(true);
      expect(isPositive(0.5)).toBe(true);
    });

    // 应该正确判断非正数
    it('should return false for non-positive numbers', () => {
      expect(isPositive(0)).toBe(false);
      expect(isPositive(-1)).toBe(false);
    });
  });

  describe('isNegative', () => {
    // 应该正确判断负数
    it('should return true for negative numbers', () => {
      expect(isNegative(-1)).toBe(true);
      expect(isNegative(-0.5)).toBe(true);
    });

    // 应该正确判断非负数
    it('should return false for non-negative numbers', () => {
      expect(isNegative(0)).toBe(false);
      expect(isNegative(1)).toBe(false);
    });
  });

  describe('sum', () => {
    // 应该计算数组总和
    it('should calculate sum of array', () => {
      expect(sum([1, 2, 3])).toBe(6);
      expect(sum([-1, 1])).toBe(0);
      expect(sum([])).toBe(0);
    });
  });

  describe('average', () => {
    // 应该计算数组平均值
    it('should calculate average of array', () => {
      expect(average([1, 2, 3])).toBe(2);
      expect(average([2, 4])).toBe(3);
    });

    // 空数组应该返回 0
    it('should return 0 for empty array', () => {
      expect(average([])).toBe(0);
    });
  });

  describe('min', () => {
    // 应该返回数组最小值
    it('should return minimum value', () => {
      expect(min([1, 2, 3])).toBe(1);
      expect(min([3, 2, 1])).toBe(1);
    });

    // 空数组应该返回 Infinity
    it('should return Infinity for empty array', () => {
      expect(min([])).toBe(Infinity);
    });
  });

  describe('max', () => {
    // 应该返回数组最大值
    it('should return maximum value', () => {
      expect(max([1, 2, 3])).toBe(3);
      expect(max([3, 2, 1])).toBe(3);
    });

    // 空数组应该返回 -Infinity
    it('should return -Infinity for empty array', () => {
      expect(max([])).toBe(-Infinity);
    });
  });

  describe('inRange', () => {
    // 应该检查数字是否在范围内
    it('should check if number is in range', () => {
      expect(inRange(3, 2, 4)).toBe(true);
      expect(inRange(2, 2, 4)).toBe(true);
      expect(inRange(4, 2, 4)).toBe(true);
      expect(inRange(1, 2, 4)).toBe(false);
      expect(inRange(5, 2, 4)).toBe(false);
    });

    // 应该处理 min > max 的情况
    it('should handle min > max', () => {
      expect(inRange(3, 4, 2)).toBe(true);
    });
  });

  describe('round', () => {
    // 应该四舍五入到整数
    it('should round to integer', () => {
      expect(round(4.006)).toBe(4);
      expect(round(4.5)).toBe(5);
    });

    // 应该四舍五入到指定精度
    it('should round to precision', () => {
      expect(round(4.006, 2)).toBe(4.01);
      expect(round(4.004, 2)).toBe(4);
    });

    // 应该处理负精度
    it('should handle negative precision', () => {
      expect(round(4060, -2)).toBe(4100);
    });
  });
});
