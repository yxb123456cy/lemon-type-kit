import { describe, expect, it } from 'vitest';
import { clamp, random, toNumber } from '../index';

describe('number utils', () => {
  describe('toNumber', () => {
    it('should convert number to number', () => {
      expect(toNumber(123)).toBe(123);
      expect(toNumber(0)).toBe(0);
      expect(toNumber(-1.5)).toBe(-1.5);
    });

    it('should convert string to number', () => {
      expect(toNumber('123')).toBe(123);
      expect(toNumber('12.3')).toBe(12.3);
      expect(toNumber('  456  ')).toBe(456);
    });

    it('should return NaN for invalid inputs', () => {
      expect(toNumber('abc')).toBeNaN();
      expect(toNumber('')).toBeNaN();
      expect(toNumber('  ')).toBeNaN();
      expect(toNumber(undefined)).toBeNaN();
      expect(toNumber({})).toBeNaN();
    });

    it('should handle null', () => {
      expect(toNumber(null)).toBe(0);
    });
  });

  describe('clamp', () => {
    it('should clamp value within range', () => {
      expect(clamp(10, 0, 5)).toBe(5);
      expect(clamp(-5, 0, 5)).toBe(0);
      expect(clamp(3, 0, 5)).toBe(3);
    });

    it('should handle floating point numbers', () => {
      expect(clamp(10.5, 0, 5)).toBe(5);
      expect(clamp(2.5, 0, 5)).toBe(2.5);
    });

    it('should throw error if min > max', () => {
      expect(() => clamp(1, 5, 0)).toThrow();
    });
  });

  describe('random', () => {
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

    it('should handle min equals max', () => {
      expect(random(5, 5)).toBe(5);
    });

    it('should throw error if min > max', () => {
      expect(() => random(10, 5)).toThrow();
    });
  });
});
