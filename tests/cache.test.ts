import { describe, expect, it, vi } from 'vitest';
import { cacheUtils } from '../src/index';

describe('cache utils', () => {
  // 每次测试前清空缓存
  it('should clear cache before tests', () => {
    cacheUtils.clear();
    expect(cacheUtils.get('any')).toBeNull();
  });

  describe('set & get', () => {
    it('should set and get value', () => {
      cacheUtils.set('key1', 'value1');
      expect(cacheUtils.get('key1')).toBe('value1');
    });

    it('should return null for non-existent key', () => {
      expect(cacheUtils.get('non-existent')).toBeNull();
    });

    it('should overwrite existing key', () => {
      cacheUtils.set('key1', 'value1');
      cacheUtils.set('key1', 'value2');
      expect(cacheUtils.get('key1')).toBe('value2');
    });

    it('should handle various value types', () => {
      cacheUtils.set('num', 123);
      cacheUtils.set('bool', true);
      cacheUtils.set('obj', { a: 1 });

      expect(cacheUtils.get('num')).toBe(123);
      expect(cacheUtils.get('bool')).toBe(true);
      expect(cacheUtils.get('obj')).toEqual({ a: 1 });
    });
  });

  describe('expiry', () => {
    it('should expire after ttl', async () => {
      // 使用 fake timers
      vi.useFakeTimers();

      cacheUtils.set('expireKey', 'expireValue', 100); // 100ms ttl

      // 立即获取应该存在
      expect(cacheUtils.get('expireKey')).toBe('expireValue');

      // 快进 50ms
      vi.advanceTimersByTime(50);
      expect(cacheUtils.get('expireKey')).toBe('expireValue');

      // 再快进 51ms (总共 101ms)
      vi.advanceTimersByTime(51);
      expect(cacheUtils.get('expireKey')).toBeNull();

      vi.useRealTimers();
    });

    it('should not expire if ttl is 0 or negative', () => {
      vi.useFakeTimers();

      cacheUtils.set('permanent1', 'val1', 0);
      cacheUtils.set('permanent2', 'val2', -1);

      vi.advanceTimersByTime(1000 * 60 * 60); // 1 hour

      expect(cacheUtils.get('permanent1')).toBe('val1');
      expect(cacheUtils.get('permanent2')).toBe('val2');

      vi.useRealTimers();
    });
  });

  describe('remove', () => {
    it('should remove key', () => {
      cacheUtils.set('key1', 'val1');
      cacheUtils.remove('key1');
      expect(cacheUtils.get('key1')).toBeNull();
    });
  });

  describe('clear', () => {
    it('should clear all keys', () => {
      cacheUtils.set('key1', 'val1');
      cacheUtils.set('key2', 'val2');

      cacheUtils.clear();

      expect(cacheUtils.get('key1')).toBeNull();
      expect(cacheUtils.get('key2')).toBeNull();
    });
  });
});
