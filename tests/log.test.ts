import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { log, Level } from "../src/index";

describe("log utils", () => {
  let consoleDebugSpy: any;
  let consoleInfoSpy: any;
  let consoleWarnSpy: any;
  let consoleErrorSpy: any;

  beforeEach(() => {
    consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("debug", () => {
    // 应该输出 DEBUG 级别日志
    it("should log debug message", () => {
      log.debug("hello");

      expect(consoleDebugSpy).toHaveBeenCalledTimes(1);
      expect(consoleDebugSpy.mock.calls[0][0]).toContain("[DEBUG]");
      expect(consoleDebugSpy.mock.calls[0][0]).toContain("hello");
    });

    // 应该支持 {} 占位符
    it("should format message with placeholders", () => {
      log.debug("hello {}", "world");

      const output = consoleDebugSpy.mock.calls[0][0];
      expect(output).toContain("hello world");
    });
  });

  describe("info", () => {
    // 应该输出 INFO 级别日志
    it("should log info message", () => {
      log.info("info message");

      expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
      expect(consoleInfoSpy.mock.calls[0][0]).toContain("[INFO]");
      expect(consoleInfoSpy.mock.calls[0][0]).toContain("info message");
    });
  });

  describe("warn", () => {
    // 应该输出 WARN 级别日志
    it("should log warn message", () => {
      log.warn("warn message");

      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      expect(consoleWarnSpy.mock.calls[0][0]).toContain("[WARN]");
      expect(consoleWarnSpy.mock.calls[0][0]).toContain("warn message");
    });
  });

  describe("error", () => {
    // 应该输出 ERROR 级别日志
    it("should log error message", () => {
      log.error("error message");

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy.mock.calls[0][0]).toContain("[ERROR]");
      expect(consoleErrorSpy.mock.calls[0][0]).toContain("error message");
    });
  });

  describe("formatting", () => {
    // 应该按顺序替换多个占位符
    it("should replace multiple placeholders", () => {
      log.info("a {} b {}", 1, 2);

      const output = consoleInfoSpy.mock.calls[0][0];
      expect(output).toContain("a 1 b 2");
    });

    // 多余参数应被忽略
    it("should ignore extra arguments", () => {
      log.info("hello {}", "world", "extra");

      const output = consoleInfoSpy.mock.calls[0][0];
      expect(output).toContain("hello world");
    });
  });

  describe("Level enum", () => {
    // 应该暴露 Level 枚举
    it("should expose Level enum", () => {
      expect(Level.DEBUG).toBe("DEBUG");
      expect(Level.INFO).toBe("INFO");
      expect(Level.WARN).toBe("WARN");
      expect(Level.ERROR).toBe("ERROR");
    });
  });
});
