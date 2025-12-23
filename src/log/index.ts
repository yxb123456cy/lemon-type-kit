/**
 * @description 日志级别枚举
 * @author (轻叶)
 * @Date 2025-12-23
 */
export enum Level {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

/**
 * @description 日志输出函数类型定义
 * @author (轻叶)
 * @param message - 日志模板字符串
 * @param args - 替换 `{}` 占位符的参数
 * @returns void
 * @Date 2025-12-23
 */
type LogFn = (message: string, ...args: unknown[]) => void;

/**
 * @description 使用给定参数替换模板字符串中的 `{}` 占位符
 * @author (轻叶)
 * @param template - 含有 `{}` 占位符的模板字符串
 * @param args - 用于替换占位符的参数
 * @returns 格式化后的字符串 (string)
 * @Date 2025-12-23
 * @example formatMessage('Hello {}', ['World']) // 'Hello World'
 */
function formatMessage(template: string, args: unknown[]): string {
  let result = template;
  for (const arg of args) {
    result = result.replace('{}', String(arg));
  }
  return result;
}

/**
 * @description 创建一个输出到控制台的日志方法
 * @author (轻叶)
 * @param level - 日志级别标签
 * @param method - 控制台方法名
 * @param style - 可选的控制台样式字符串
 * @returns 日志函数 (LogFn)
 * @Date 2025-12-23
 * @example createLoggerMethod(Level.INFO, 'info')
 */
function createLoggerMethod(
  level: Level,
  method: 'debug' | 'info' | 'warn' | 'error',
  style?: string,
): LogFn {
  return (message, ...args) => {
    if (typeof console === 'undefined') return;
    const formatted = formatMessage(message, args);
    const consoleMethod = (console as any)[method] || console.log;
    const prefix = `[${level}] `;
    if (style) {
      consoleMethod(`%c${prefix}${formatted}`, style);
    } else {
      consoleMethod(prefix + formatted);
    }
  };
}

/**
 * @description 在控制台输出调试日志（红色文字）
 * @author (轻叶)
 * @param message - 日志模板字符串
 * @param args - 替换 `{}` 占位符的参数
 * @returns void
 * @Date 2025-12-23
 * @example debug('User {} logged in', 'Alice')
 */
const debug: LogFn = createLoggerMethod(Level.DEBUG, 'debug', 'color: red;');

/**
 * @description 在控制台输出信息日志
 * @author (轻叶)
 * @param message - 日志模板字符串
 * @param args - 替换 `{}` 占位符的参数
 * @returns void
 * @Date 2025-12-23
 * @example info('Server started on port {}', 8080)
 */
const info: LogFn = createLoggerMethod(Level.INFO, 'info');

/**
 * @description 在控制台输出警告日志
 * @author (轻叶)
 * @param message - 日志模板字符串
 * @param args - 替换 `{}` 占位符的参数
 * @returns void
 * @Date 2025-12-23
 * @example warn('Disk usage is at {}%', 90)
 */
const warn: LogFn = createLoggerMethod(Level.WARN, 'warn');

/**
 * @description 在控制台输出错误日志
 * @author (轻叶)
 * @param message - 日志模板字符串
 * @param args - 替换 `{}` 占位符的参数
 * @returns void
 * @Date 2025-12-23
 * @example error('Failed to connect to DB: {}', 'Timeout')
 */
const error: LogFn = createLoggerMethod(Level.ERROR, 'error');

export const log = {
  debug,
  info,
  warn,
  error,
  Level,
};
