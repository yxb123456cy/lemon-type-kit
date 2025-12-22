/**
 * Converts a string to camel case.
 * 将字符串转换为驼峰命名法。
 *
 * @param str - The string to convert / 需要转换的字符串
 * @returns The camel cased string / 转换后的驼峰字符串
 * @example
 * camelCase('Foo Bar') // 'fooBar'
 * camelCase('--foo-bar--') // 'fooBar'
 * camelCase('__FOO_BAR__') // 'fooBar'
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
 * Converts a string to kebab case.
 * 将字符串转换为短横线命名法。
 *
 * @param str - The string to convert / 需要转换的字符串
 * @returns The kebab cased string / 转换后的短横线字符串
 * @example
 * kebabCase('fooBar') // 'foo-bar'
 * kebabCase('Foo Bar') // 'foo-bar'
 * kebabCase('__FOO_BAR__') // 'foo-bar'
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
 * Capitalizes the first character of string.
 * 将字符串的首字母转换为大写。
 *
 * @param str - The string to capitalize / 需要首字母大写的字符串
 * @returns The capitalized string / 首字母大写后的字符串
 * @example
 * capitalize('fred') // 'Fred'
 * capitalize('FRED') // 'Fred'
 */
function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to pascal case.
 * 将字符串转换为帕斯卡命名法（大驼峰）。
 *
 * @param str - The string to convert / 需要转换的字符串
 * @returns The pascal cased string / 转换后的帕斯卡字符串
 * @example
 * pascalCase('foo bar') // 'FooBar'
 * pascalCase('foo-bar') // 'FooBar'
 */
function pascalCase(str: string): string {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * Converts a string to snake case.
 * 将字符串转换为下划线命名法。
 *
 * @param str - The string to convert / 需要转换的字符串
 * @returns The snake cased string / 转换后的下划线字符串
 * @example
 * snakeCase('fooBar') // 'foo_bar'
 * snakeCase('foo-bar') // 'foo_bar'
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
 * Converts the first character of string to upper case.
 * 将字符串的首字母转换为大写（不改变其余字符）。
 *
 * @param str - The string to convert / 需要转换的字符串
 * @returns The converted string / 转换后的字符串
 * @example
 * upperFirst('fred') // 'Fred'
 * upperFirst('FRED') // 'FRED'
 */
function upperFirst(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts the first character of string to lower case.
 * 将字符串的首字母转换为小写（不改变其余字符）。
 *
 * @param str - The string to convert / 需要转换的字符串
 * @returns The converted string / 转换后的字符串
 * @example
 * lowerFirst('Fred') // 'fred'
 * lowerFirst('FRED') // 'fRED'
 */
function lowerFirst(str: string): string {
  if (!str) return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Removes leading and trailing slashes from a string.
 * 移除字符串开头和结尾的斜杠。
 *
 * @param str - The string to trim / 需要处理的字符串
 * @returns The trimmed string / 处理后的字符串
 * @example
 * trimSlash('/foo/bar/') // 'foo/bar'
 */
function trimSlash(str: string): string {
  return str.replace(/^\/+|\/+$/g, '');
}

/**
 * Truncates string if it's longer than the given maximum string length.
 * 如果字符串长度超过指定的最大长度，则截断字符串。
 *
 * @param str - The string to truncate / 需要截断的字符串
 * @param length - The maximum string length / 最大长度
 * @param omission - The string to indicate text is omitted / 省略符，默认为 '...'
 * @returns The truncated string / 截断后的字符串
 * @example
 * truncate('hi-diddly-ho there, neighborino', 24) // 'hi-diddly-ho there, n...'
 */
function truncate(str: string, length: number, omission = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - omission.length) + omission;
}

/**
 * Generates a random alphanumeric string of the given length.
 * 生成指定长度的随机字母数字字符串。
 *
 * @param length - The length of the string / 字符串长度，默认为 16
 * @returns The random string / 随机字符串
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
 * Replaces variables in a string with values from an object.
 * 使用对象中的值替换字符串中的变量。
 *
 * @param str - The template string / 模板字符串
 * @param data - The data object / 数据对象
 * @returns The result string / 替换后的字符串
 * @example
 * template('Hello {name}', { name: 'World' }) // 'Hello World'
 */
function template(str: string, data: Record<string, unknown>): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return data[key] !== undefined ? String(data[key]) : '';
  });
}

/**
 * Reverses a string.
 * 反转字符串。
 *
 * @param str - The string to reverse / 需要反转的字符串
 * @returns The reversed string / 反转后的字符串
 * @example
 * reverse('abc') // 'cba'
 */
function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Removes all HTML tags from a string.
 * 移除字符串中的所有 HTML 标签。
 *
 * @param str - The string to strip / 需要处理的字符串
 * @returns The string without HTML tags / 移除标签后的字符串
 * @example
 * stripTags('<p>Hello</p>') // 'Hello'
 */
function stripTags(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Escapes HTML characters in a string.
 * 转义字符串中的 HTML 字符。
 *
 * @param str - The string to escape / 需要转义的字符串
 * @returns The escaped string / 转义后的字符串
 * @example
 * escapeHtml('<div>') // '&lt;div&gt;'
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
 * Unescapes HTML characters in a string.
 * 还原字符串中的 HTML 字符。
 *
 * @param str - The string to unescape / 需要还原的字符串
 * @returns The unescaped string / 还原后的字符串
 * @example
 * unescapeHtml('&lt;div&gt;') // '<div>'
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
