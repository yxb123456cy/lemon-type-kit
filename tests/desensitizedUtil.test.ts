import { describe, it, expect } from "vitest";
import { desensitizedUtil, DesensitizedType } from "../src/index";

describe("desensitizedUtil", () => {
  describe("hide", () => {
    // 应该隐藏指定范围的字符
    it("should hide characters in specified range", () => {
      expect(desensitizedUtil.hide("123456789", 3, 6)).toBe("123***789");
    });

    // 空字符串应返回空
    it("should return empty string for empty input", () => {
      expect(desensitizedUtil.hide("", 0, 0)).toBe("");
    });

    // 无效范围应返回原字符串
    it("should return original string for invalid range", () => {
      expect(desensitizedUtil.hide("123", 5, 6)).toBe("123");
      expect(desensitizedUtil.hide("123", 2, 1)).toBe("123");
    });
  });

  describe("userId", () => {
    // 应该只保留第一位
    it("should keep only first character", () => {
      expect(desensitizedUtil.userId("1234567890")).toBe("1*********");
    });

    // 单字符应返回原值
    it("should return original for single character", () => {
      expect(desensitizedUtil.userId("1")).toBe("1");
    });
  });

  describe("chineseName", () => {
    // 应该只显示姓氏
    it("should keep only first character", () => {
      expect(desensitizedUtil.chineseName("张三丰")).toBe("张**");
      expect(desensitizedUtil.chineseName("李四")).toBe("李*");
    });

    // 单字应返回原值
    it("should return original for single character", () => {
      expect(desensitizedUtil.chineseName("张")).toBe("张");
    });
  });

  describe("idCardNum", () => {
    // 应该保留前N位和后M位
    it("should keep first N and last M characters", () => {
      expect(desensitizedUtil.idCardNum("51343620000320711X", 1, 2)).toBe(
        "5***************1X"
      );
      expect(desensitizedUtil.idCardNum("51343620000320711X", 4, 4)).toBe(
        "5134**********711X"
      );
    });

    // 空字符串应返回空
    it("should return empty for empty input", () => {
      expect(desensitizedUtil.idCardNum("", 1, 2)).toBe("");
    });

    // 保留位数超过长度应返回原值
    it("should return original if keep length exceeds", () => {
      expect(desensitizedUtil.idCardNum("123", 2, 2)).toBe("123");
    });
  });

  describe("fixedPhone", () => {
    // 应该保留前4位和后2位
    it("should keep first 4 and last 2 characters", () => {
      expect(desensitizedUtil.fixedPhone("010-12345678")).toBe("010-****78");
    });

    // 短号码应返回原值
    it("should return original for short phone", () => {
      expect(desensitizedUtil.fixedPhone("12345")).toBe("12345");
    });
  });

  describe("mobilePhone", () => {
    // 应该保留前3位和后4位
    it("should keep first 3 and last 4 characters", () => {
      expect(desensitizedUtil.mobilePhone("18049531999")).toBe("180****1999");
    });

    // 非11位应返回原值
    it("should return original for non-11-digit phone", () => {
      expect(desensitizedUtil.mobilePhone("1234567890")).toBe("1234567890");
      expect(desensitizedUtil.mobilePhone("123456789012")).toBe("123456789012");
    });
  });

  describe("address", () => {
    // 应该隐藏后8位详细地址
    it("should hide last 8 characters by default", () => {
      expect(
        desensitizedUtil.address("北京市朝阳区某某街道某某小区1号楼")
      ).toBe("北京市朝阳区某某街********");
    });

    // 应该支持自定义敏感长度
    it("should support custom sensitive size", () => {
      expect(desensitizedUtil.address("北京市朝阳区某某小区", 4)).toBe(
        "北京市朝阳区****"
      );
    });

    // 短地址应返回原值
    it("should return original for short address", () => {
      expect(desensitizedUtil.address("北京", 8)).toBe("北京");
    });
  });

  describe("email", () => {
    // 应该保留首字符和@后部分
    it("should keep first character and domain", () => {
      expect(desensitizedUtil.email("test@example.com")).toBe(
        "t***@example.com"
      );
      expect(desensitizedUtil.email("abcdef@qq.com")).toBe("a*****@qq.com");
    });

    // 无@应返回原值
    it("should return original for invalid email", () => {
      expect(desensitizedUtil.email("invalid")).toBe("invalid");
    });

    // 前缀只有一位应返回原值
    it("should return original if prefix is single char", () => {
      expect(desensitizedUtil.email("a@test.com")).toBe("a@test.com");
    });
  });

  describe("password", () => {
    // 应该全部替换为*
    it("should replace all characters with *", () => {
      expect(desensitizedUtil.password("1234567890")).toBe("**********");
      expect(desensitizedUtil.password("abc")).toBe("***");
    });

    // 空密码应返回空
    it("should return empty for empty password", () => {
      expect(desensitizedUtil.password("")).toBe("");
    });
  });

  describe("carLicense", () => {
    // 普通车牌应保留前2位和后2位
    it("should keep first 2 and last 2 characters for normal plate", () => {
      expect(desensitizedUtil.carLicense("京A12345")).toBe("京A***45");
    });

    // 新能源车牌应保留前2位和后2位
    it("should keep first 2 and last 2 characters for new energy plate", () => {
      expect(desensitizedUtil.carLicense("京AD12345")).toBe("京A****45");
    });

    // 短车牌应返回原值
    it("should return original for short plate", () => {
      expect(desensitizedUtil.carLicense("京A123")).toBe("京A123");
    });
  });

  describe("bankCard", () => {
    // 应该保留前4位和后4位
    it("should keep first 4 and last 4 characters", () => {
      expect(desensitizedUtil.bankCard("6222021234567890123")).toBe(
        "6222***********0123"
      );
      expect(desensitizedUtil.bankCard("6228480012345678")).toBe(
        "6228********5678"
      );
    });

    // 短卡号应返回原值
    it("should return original for short card number", () => {
      expect(desensitizedUtil.bankCard("12345678")).toBe("12345678");
    });
  });

  describe("desensitized", () => {
    // 应该根据类型自动脱敏
    it("should desensitize based on type", () => {
      expect(
        desensitizedUtil.desensitized(
          "18049531999",
          DesensitizedType.MOBILE_PHONE
        )
      ).toBe("180****1999");
      expect(
        desensitizedUtil.desensitized("1234567890", DesensitizedType.PASSWORD)
      ).toBe("**********");
      expect(
        desensitizedUtil.desensitized("张三丰", DesensitizedType.CHINESE_NAME)
      ).toBe("张**");
    });

    // 空值应返回空
    it("should return empty for empty input", () => {
      expect(
        desensitizedUtil.desensitized("", DesensitizedType.MOBILE_PHONE)
      ).toBe("");
    });
  });

  describe("DesensitizedType enum", () => {
    // 应该暴露脱敏类型枚举
    it("should expose DesensitizedType enum", () => {
      expect(DesensitizedType.USER_ID).toBe("USER_ID");
      expect(DesensitizedType.CHINESE_NAME).toBe("CHINESE_NAME");
      expect(DesensitizedType.ID_CARD).toBe("ID_CARD");
      expect(DesensitizedType.FIXED_PHONE).toBe("FIXED_PHONE");
      expect(DesensitizedType.MOBILE_PHONE).toBe("MOBILE_PHONE");
      expect(DesensitizedType.ADDRESS).toBe("ADDRESS");
      expect(DesensitizedType.EMAIL).toBe("EMAIL");
      expect(DesensitizedType.PASSWORD).toBe("PASSWORD");
      expect(DesensitizedType.CAR_LICENSE).toBe("CAR_LICENSE");
      expect(DesensitizedType.BANK_CARD).toBe("BANK_CARD");
    });
  });
});
