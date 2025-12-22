import { describe, expect, it } from 'vitest';
import { getCurrentDate, getCurrentYear } from '../src/date/index';

describe('date utils', () => {
  describe('getCurrentYear', () => {
    it('should return current year as number', () => {
      const date = getCurrentYear();
      expect(date).toBeTypeOf('number');
    });
    it('should return current year as string', () => {
      const date = getCurrentYear(true);
      expect(date).toBeTypeOf('string');
    });
    it('should return value is current year', () => {
      const date = getCurrentYear();
      expect(date).toBe(2025);
    });
  });

  describe('getCurrentDate', () => {
    it('should return current date', () => {
      const date = getCurrentDate();
      expect(date).toBeInstanceOf(Date);
    });
  });
});
