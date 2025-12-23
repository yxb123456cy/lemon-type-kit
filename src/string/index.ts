/**
 * @description 将字符串转换为驼峰命名法
 * @author (轻叶)
 * @param str - 需要转换的字符串
 * @returns 转换后的驼峰字符串 (string)
 * @Date 2025-12-23
 * @example camelCase('Foo Bar') // 'fooBar'
 */
function camelCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .split('-')
    .map((part, index) => {
      const lower = part.toLowerCase();
      if (index === 0) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

/**
 * @description 将字符串转换为短横线命名法
 * @author (轻叶)
 * @param str - 需要转换的字符串
 * @returns 转换后的短横线字符串 (string)
 * @Date 2025-12-23
 * @example kebabCase('fooBar') // 'foo-bar'
 */
function kebabCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase();
}

/**
 * @description 将字符串的首字母转换为大写
 * @author (轻叶)
 * @param str - 需要首字母大写的字符串
 * @returns 首字母大写后的字符串 (string)
 * @Date 2025-12-23
 * @example capitalize('fred') // 'Fred'
 */
function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * @description 将字符串转换为帕斯卡命名法（大驼峰）
 * @author (轻叶)
 * @param str - 需要转换的字符串
 * @returns 转换后的帕斯卡字符串 (string)
 * @Date 2025-12-23
 * @example pascalCase('foo bar') // 'FooBar'
 */
function pascalCase(str: string): string {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * @description 将字符串转换为下划线命名法
 * @author (轻叶)
 * @param str - 需要转换的字符串
 * @returns 转换后的下划线字符串 (string)
 * @Date 2025-12-23
 * @example snakeCase('fooBar') // 'foo_bar'
 */
function snakeCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .toLowerCase();
}

/**
 * @description 将字符串的首字母转换为大写（不改变其余字符）
 * @author (轻叶)
 * @param str - 需要转换的字符串
 * @returns 转换后的字符串 (string)
 * @Date 2025-12-23
 * @example upperFirst('fred') // 'Fred'
 */
function upperFirst(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @description 将字符串的首字母转换为小写（不改变其余字符）
 * @author (轻叶)
 * @param str - 需要转换的字符串
 * @returns 转换后的字符串 (string)
 * @Date 2025-12-23
 * @example lowerFirst('Fred') // 'fred'
 */
function lowerFirst(str: string): string {
  if (!str) return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * @description 移除字符串开头和结尾的斜杠
 * @author (轻叶)
 * @param str - 需要处理的字符串
 * @returns 处理后的字符串 (string)
 * @Date 2025-12-23
 * @example trimSlash('/foo/bar/') // 'foo/bar'
 */
function trimSlash(str: string): string {
  return str.replace(/^\/+|\/+$/g, '');
}

/**
 * @description 如果字符串长度超过指定的最大长度，则截断字符串
 * @author (轻叶)
 * @param str - 需要截断的字符串
 * @param length - 最大长度
 * @param omission - 省略符，默认为 '...'
 * @returns 截断后的字符串 (string)
 * @Date 2025-12-23
 * @example truncate('hi-diddly-ho there, neighborino', 24) // 'hi-diddly-ho there, n...'
 */
function truncate(str: string, length: number, omission = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - omission.length) + omission;
}

/**
 * @description 生成指定长度的随机字母数字字符串
 * @author (轻叶)
 * @param length - 字符串长度，默认为 16
 * @returns 随机字符串 (string)
 * @Date 2025-12-23
 * @example randomString(10) // 'x8k...'
 */
function randomString(length = 16): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * @description 使用对象中的值替换字符串中的变量
 * @author (轻叶)
 * @param str - 模板字符串
 * @param data - 数据对象
 * @returns 替换后的字符串 (string)
 * @Date 2025-12-23
 * @example template('Hello {name}', { name: 'World' }) // 'Hello World'
 */
function template(str: string, data: Record<string, unknown>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return data[key] !== undefined ? String(data[key]) : '';
  });
}

/**
 * @description 反转字符串
 * @author (轻叶)
 * @param str - 需要反转的字符串
 * @returns 反转后的字符串 (string)
 * @Date 2025-12-23
 * @example reverse('abc') // 'cba'
 */
function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * @description 移除字符串中的所有 HTML 标签
 * @author (轻叶)
 * @param str - 需要处理的字符串
 * @returns 移除标签后的字符串 (string)
 * @Date 2025-12-23
 * @example stripTags('<p>Hello</p>') // 'Hello'
 */
function stripTags(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

/**
 * @description 转义字符串中的 HTML 字符
 * @author (轻叶)
 * @param str - 需要转义的字符串
 * @returns 转义后的字符串 (string)
 * @Date 2025-12-23
 * @example escapeHtml('<div>') // '&lt;div&gt;'
 */
function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return str.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * @description 还原字符串中的 HTML 字符
 * @author (轻叶)
 * @param str - 需要还原的字符串
 * @returns 还原后的字符串 (string)
 * @Date 2025-12-23
 * @example unescapeHtml('&lt;div&gt;') // '<div>'
 */
function unescapeHtml(str: string): string {
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };
  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (m) => map[m]);
}

export const stringUtils = {
  camelCase,
  kebabCase,
  capitalize,
  pascalCase,
  snakeCase,
  upperFirst,
  lowerFirst,
  trimSlash,
  truncate,
  randomString,
  template,
  reverse,
  stripTags,
  escapeHtml,
  unescapeHtml,
};
