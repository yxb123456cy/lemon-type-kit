// 使用 Map 作为内存缓存存储
// Key: 缓存键
// Value: 缓存值对象（包含数据和过期时间）
const store = new Map<string, { value: unknown; expire: number | null }>();

/**
 * @description 设置缓存
 * @param key - 缓存键
 * @param value - 缓存值
 * @param ttl - 过期时间（毫秒），如果不传或传 0/负数则表示永不过期
 * @returns void
 *
 * @example
 * // 设置不过期的缓存
 * set('name', 'lemon');
 *
 * // 设置 5秒后过期的缓存
 * set('token', 'xyz', 5000);
 */
function set(key: string, value: unknown, ttl: number = 0): void {
  // 计算过期时间戳
  // 如果 ttl 大于 0，则过期时间为 当前时间 + ttl
  // 否则 expire 为 null，表示永不过期
  const expire = ttl > 0 ? Date.now() + ttl : null;

  // 将数据存入 Map
  store.set(key, {
    value,
    expire,
  });
}

/**
 * @description 获取缓存
 * @param key - 缓存键
 * @returns 缓存值，如果不存在或已过期则返回 null
 */
function get(key: string): unknown | null {
  const data = store.get(key);

  // 如果没有数据，返回 null
  if (!data) {
    return null;
  }

  // 检查是否过期
  if (data.expire !== null && data.expire < Date.now()) {
    // 已过期，删除缓存并返回 null
    store.delete(key);
    return null;
  }

  return data.value;
}

/**
 * @description 移除缓存
 * @param key - 缓存键
 */
function remove(key: string): void {
  store.delete(key);
}

/**
 * @description 清空所有缓存
 */
function clear(): void {
  store.clear();
}
/**
 * @description 导出cacheUtils 缓存工具对象;
 */
export const cacheUtils = {
  set,
  get,
  remove,
  clear,
};
