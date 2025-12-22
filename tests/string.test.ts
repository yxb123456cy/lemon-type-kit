import { describe, expect, it } from 'vitest';
import { stringUtils } from '../src/index';

describe('string utils', () => {
  describe('camelCase', () => {
    // 应该将空格分隔的单词转换为驼峰命名
    it('should convert space separated words to camelCase', () => {
      expect(stringUtils.camelCase('Foo Bar')).toBe('fooBar');
      expect(stringUtils.camelCase('foo bar')).toBe('fooBar');
    });

    // 应该将短横线分隔的单词转换为驼峰命名
    it('should convert hyphen separated words to camelCase', () => {
      expect(stringUtils.camelCase('foo-bar')).toBe('fooBar');
      expect(stringUtils.camelCase('--foo-bar--')).toBe('fooBar');
    });

    // 应该将下划线分隔的单词转换为驼峰命名
    it('should convert underscore separated words to camelCase', () => {
      expect(stringUtils.camelCase('foo_bar')).toBe('fooBar');
      expect(stringUtils.camelCase('__FOO_BAR__')).toBe('fooBar');
    });

    // 应该处理混合分隔符
    it('should handle mixed separators', () => {
      expect(stringUtils.camelCase('foo-bar_baz')).toBe('fooBarBaz');
    });
  });

  describe('kebabCase', () => {
    // 应该将驼峰命名转换为短横线命名
    it('should convert camelCase to kebab-case', () => {
      expect(stringUtils.kebabCase('fooBar')).toBe('foo-bar');
      expect(stringUtils.kebabCase('fooBarBaz')).toBe('foo-bar-baz');
    });

    // 应该将空格分隔的单词转换为短横线命名
    it('should convert space separated words to kebab-case', () => {
      expect(stringUtils.kebabCase('Foo Bar')).toBe('foo-bar');
      expect(stringUtils.kebabCase('foo bar')).toBe('foo-bar');
    });

    // 应该将下划线分隔的单词转换为短横线命名
    it('should convert underscore separated words to kebab-case', () => {
      expect(stringUtils.kebabCase('foo_bar')).toBe('foo-bar');
      expect(stringUtils.kebabCase('__FOO_BAR__')).toBe('foo-bar');
    });
  });

  describe('capitalize', () => {
    // 应该将首字母大写并将其余部分小写
    it('should capitalize the first character and lowercase the rest', () => {
      expect(stringUtils.capitalize('fred')).toBe('Fred');
      expect(stringUtils.capitalize('FRED')).toBe('Fred');
      expect(stringUtils.capitalize('fred flintstone')).toBe('Fred flintstone');
    });

    // 应该处理空字符串
    it('should handle empty strings', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    // 应该处理单字符字符串
    it('should handle single character strings', () => {
      expect(stringUtils.capitalize('a')).toBe('A');
      expect(stringUtils.capitalize('A')).toBe('A');
    });
  });

  describe('pascalCase', () => {
    // 应该将字符串转换为帕斯卡命名法
    it('should convert string to pascal case', () => {
      expect(stringUtils.pascalCase('foo bar')).toBe('FooBar');
      expect(stringUtils.pascalCase('foo-bar')).toBe('FooBar');
      expect(stringUtils.pascalCase('foo_bar')).toBe('FooBar');
      expect(stringUtils.pascalCase('fooBar')).toBe('FooBar');
    });
  });

  describe('snakeCase', () => {
    // 应该将字符串转换为下划线命名法
    it('should convert string to snake case', () => {
      expect(stringUtils.snakeCase('fooBar')).toBe('foo_bar');
      expect(stringUtils.snakeCase('foo-bar')).toBe('foo_bar');
      expect(stringUtils.snakeCase('Foo Bar')).toBe('foo_bar');
    });
  });

  describe('upperFirst', () => {
    // 应该将首字母转换为大写
    it('should convert first character to upper case', () => {
      expect(stringUtils.upperFirst('fred')).toBe('Fred');
      expect(stringUtils.upperFirst('FRED')).toBe('FRED');
    });
  });

  describe('lowerFirst', () => {
    // 应该将首字母转换为小写
    it('should convert first character to lower case', () => {
      expect(stringUtils.lowerFirst('Fred')).toBe('fred');
      expect(stringUtils.lowerFirst('FRED')).toBe('fRED');
    });
  });

  describe('trimSlash', () => {
    // 应该移除开头和结尾的斜杠
    it('should remove leading and trailing slashes', () => {
      expect(stringUtils.trimSlash('/foo/bar/')).toBe('foo/bar');
      expect(stringUtils.trimSlash('//foo/bar//')).toBe('foo/bar');
      expect(stringUtils.trimSlash('foo/bar')).toBe('foo/bar');
    });
  });

  describe('truncate', () => {
    // 应该截断超过最大长度的字符串
    it('should truncate string if longer than length', () => {
      expect(stringUtils.truncate('hi-diddly-ho there, neighborino', 24)).toBe(
        'hi-diddly-ho there, n...',
      );
    });

    // 如果字符串不超过最大长度，则不应截断
    it('should not truncate if string is shorter than length', () => {
      expect(stringUtils.truncate('hello', 10)).toBe('hello');
    });

    // 应该支持自定义省略符
    it('should support custom omission', () => {
      expect(stringUtils.truncate('hello world', 8, '***')).toBe('hello***');
    });
  });

  describe('randomString', () => {
    // 应该生成指定长度的随机字符串
    it('should generate random string of given length', () => {
      expect(stringUtils.randomString(10)).toHaveLength(10);
      expect(stringUtils.randomString()).toHaveLength(16);
    });
  });

  describe('template', () => {
    // 应该替换字符串中的变量
    it('should replace variables in string', () => {
      expect(stringUtils.template('Hello {name}', { name: 'World' })).toBe('Hello World');
      expect(stringUtils.template('{a}-{b}', { a: 1, b: 2 })).toBe('1-2');
    });

    // 应该处理缺失的变量
    it('should handle missing variables', () => {
      expect(stringUtils.template('Hello {name}', {})).toBe('Hello ');
    });
  });

  describe('reverse', () => {
    // 应该反转字符串
    it('should reverse string', () => {
      expect(stringUtils.reverse('abc')).toBe('cba');
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });
  });

  describe('stripTags', () => {
    // 应该移除 HTML 标签
    it('should remove html tags', () => {
      expect(stringUtils.stripTags('<p>Hello</p>')).toBe('Hello');
      expect(stringUtils.stripTags('<div class="test">Hello<br>World</div>')).toBe(
        'HelloWorld',
      );
    });
  });

  describe('escapeHtml', () => {
    // 应该转义 HTML 字符
    it('should escape html characters', () => {
      expect(stringUtils.escapeHtml('<div>')).toBe('&lt;div&gt;');
      expect(stringUtils.escapeHtml('"foo" & \'bar\'')).toBe(
        '&quot;foo&quot; &amp; &#39;bar&#39;',
      );
    });
  });

  describe('unescapeHtml', () => {
    // 应该还原 HTML 字符
    it('should unescape html characters', () => {
      expect(stringUtils.unescapeHtml('&lt;div&gt;')).toBe('<div>');
      expect(stringUtils.unescapeHtml('&quot;foo&quot; &amp; &#39;bar&#39;')).toBe(
        '"foo" & \'bar\'',
      );
    });
  });
});
