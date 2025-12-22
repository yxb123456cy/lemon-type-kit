import { describe, expect, it } from 'vitest';
import { dateUtils } from '../src/index';

describe('date utils', () => {
  describe('getCurrentYear', () => {
    it('should return current year as number', () => {
      const date = dateUtils.getCurrentYear();
      expect(date).toBeTypeOf('number');
    });
    it('should return current year as string', () => {
      const date = dateUtils.getCurrentYear(true);
      expect(date).toBeTypeOf('string');
    });
    it('should return value is current year', () => {
      const date = dateUtils.getCurrentYear();
      expect(date).toBe(2025);
    });
  });

  describe('getCurrentDate', () => {
    it('should return current date', () => {
      const date = dateUtils.getCurrentDate();
      expect(date).toBeInstanceOf(Date);
    });
  });
});
