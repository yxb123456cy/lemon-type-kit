import { describe, expect, it } from "vitest";
import { phoneUtil } from "../src/index";

describe("phoneUtil", () => {
  describe("hideAfter", () => {
    it("should hide last 4 digits", () => {
      expect(phoneUtil.hideAfter("13812345678")).toBe("1381234****");
    });

    it("should return original value if length < 4", () => {
      expect(phoneUtil.hideAfter("123")).toBe("123");
    });
  });

  describe("hideBefore", () => {
    it("should hide first 7 digits", () => {
      expect(phoneUtil.hideBefore("13812345678")).toBe("*******5678");
    });

    it("should return original value if length < 7", () => {
      expect(phoneUtil.hideBefore("123456")).toBe("123456");
    });
  });

  describe("hideBetween", () => {
    it("should hide middle 4 digits", () => {
      expect(phoneUtil.hideBetween("13812345678")).toBe("138****5678");
    });

    it("should return original value if length < 7", () => {
      expect(phoneUtil.hideBetween("123456")).toBe("123456");
    });
  });

  describe("subAfter", () => {
    it("should return last 4 digits", () => {
      expect(phoneUtil.subAfter("13812345678")).toBe("5678");
    });
  });

  describe("subBefore", () => {
    it("should return first 3 digits", () => {
      expect(phoneUtil.subBefore("13812345678")).toBe("138");
    });
  });

  describe("subBetween", () => {
    it("should return middle 4 digits", () => {
      expect(phoneUtil.subBetween("13812345678")).toBe("1234");
    });

    it("should return empty string if length < 7", () => {
      expect(phoneUtil.subBetween("123456")).toBe("");
    });
  });

  describe("isMobile (China mainland)", () => {
    it("should validate mainland mobile numbers", () => {
      expect(phoneUtil.isMobile("13812345678")).toBe(true);
      expect(phoneUtil.isMobile("19900001111")).toBe(true);
    });

    it("should reject invalid mobile numbers", () => {
      expect(phoneUtil.isMobile("12812345678")).toBe(false);
      expect(phoneUtil.isMobile("1381234567")).toBe(false);
      expect(phoneUtil.isMobile("abc")).toBe(false);
    });
  });

  describe("isMobileHk", () => {
    it("should validate Hong Kong mobile numbers", () => {
      expect(phoneUtil.isMobileHk("91234567")).toBe(true);
      expect(phoneUtil.isMobileHk("61234567")).toBe(true);
    });

    it("should reject invalid HK numbers", () => {
      expect(phoneUtil.isMobileHk("81234567")).toBe(false);
    });
  });

  describe("isMobileMo", () => {
    it("should validate Macau mobile numbers", () => {
      expect(phoneUtil.isMobileMo("61234567")).toBe(true);
    });

    it("should reject invalid Macau numbers", () => {
      expect(phoneUtil.isMobileMo("71234567")).toBe(false);
    });
  });

  describe("isMobileTw", () => {
    it("should validate Taiwan mobile numbers", () => {
      expect(phoneUtil.isMobileTw("0912345678")).toBe(true);
    });

    it("should reject invalid Taiwan numbers", () => {
      expect(phoneUtil.isMobileTw("0812345678")).toBe(false);
    });
  });

  describe("isTel", () => {
    it("should validate mainland landline numbers", () => {
      expect(phoneUtil.isTel("010-88886666")).toBe(true);
      expect(phoneUtil.isTel("07558886666")).toBe(true);
    });

    it("should reject invalid landline numbers", () => {
      expect(phoneUtil.isTel("88886666")).toBe(false);
    });
  });

  describe("isTel400800", () => {
    it("should validate 400/800 numbers", () => {
      expect(phoneUtil.isTel400800("400-800-1234")).toBe(true);
      expect(phoneUtil.isTel400800("8001234567")).toBe(true);
    });

    it("should reject invalid service numbers", () => {
      expect(phoneUtil.isTel400800("900-800-1234")).toBe(false);
    });
  });

  describe("isPhone", () => {
    it("should validate any supported phone number", () => {
      expect(phoneUtil.isPhone("13812345678")).toBe(true);
      expect(phoneUtil.isPhone("010-88886666")).toBe(true);
      expect(phoneUtil.isPhone("400-800-1234")).toBe(true);
      expect(phoneUtil.isPhone("91234567")).toBe(true);
    });

    it("should reject unsupported phone numbers", () => {
      expect(phoneUtil.isPhone("123456")).toBe(false);
    });
  });

  describe("subTelBefore", () => {
    it("should extract area code", () => {
      expect(phoneUtil.subTelBefore("010-88886666")).toBe("010");
      expect(phoneUtil.subTelBefore("07558886666")).toBe("0755");
    });
  });

  describe("subTelAfter", () => {
    it("should extract phone number part", () => {
      expect(phoneUtil.subTelAfter("010-88886666")).toBe("88886666");
      expect(phoneUtil.subTelAfter("07558886666")).toBe("8886666");
    });
  });
});
