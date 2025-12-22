/**
 * Log level enum.
 * 日志级别枚举。
 */
export enum Level {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

/**
 * A function that logs formatted messages.
 * 日志输出函数类型定义。
 *
 * @param message - Log message template / 日志模板字符串
 * @param args - Values to replace `{}` placeholders / 替换 `{}` 占位符的参数
 */
type LogFn = (message: string, ...args: unknown[]) => void;

/**
 * Formats a template string by replacing `{}` placeholders with given arguments.
 * 使用给定参数替换模板字符串中的 `{}` 占位符。
 *
 * @param template - Template string containing `{}` placeholders / 含有 `{}` 占位符的模板字符串
 * @param args - Values to replace placeholders / 用于替换占位符的参数
 * @returns The formatted message / 格式化后的字符串
 */
function formatMessage(template: string, args: unknown[]): string {
  let result = template;
  for (const arg of args) {
    result = result.replace('{}', String(arg));
  }
  return result;
}

/**
 * Creates a logger method that writes messages to console.
 * 创建一个输出到控制台的日志方法。
 *
 * @param level - Log level label / 日志级别标签
 * @param method - Console method name, e.g. `debug`/`info`/`warn`/`error` / 控制台方法名
 * @param style - Optional CSS style string for browser console / 可选的控制台样式字符串
 * @returns A log function / 日志函数
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
 * Logs a debug message to the console.
 * 在控制台输出调试日志（红色文字）。
 *
 * @param message - Log message template / 日志模板字符串
 * @param args - Values to replace `{}` placeholders / 替换 `{}` 占位符的参数
 */
const debug: LogFn = createLoggerMethod(Level.DEBUG, 'debug', 'color: red;');

/**
 * Logs an info message to the console.
 * 在控制台输出信息日志。
 */
const info: LogFn = createLoggerMethod(Level.INFO, 'info');

/**
 * Logs a warning message to the console.
 * 在控制台输出警告日志。
 */
const warn: LogFn = createLoggerMethod(Level.WARN, 'warn');

/**
 * Logs an error message to the console.
 * 在控制台输出错误日志。
 */
const error: LogFn = createLoggerMethod(Level.ERROR, 'error');

/**
 * Log utility collection.
 * 日志工具集合。
 */
export const log = {
  debug,
  info,
  warn,
  error,
  Level,
};
