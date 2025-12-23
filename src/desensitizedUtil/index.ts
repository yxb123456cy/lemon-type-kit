/**
 * @description 脱敏类型枚举
 * @author (轻叶)
 * @Date 2025-12-23
 */
export enum DesensitizedType {
  USER_ID = 'USER_ID',
  CHINESE_NAME = 'CHINESE_NAME',
  ID_CARD = 'ID_CARD',
  FIXED_PHONE = 'FIXED_PHONE',
  MOBILE_PHONE = 'MOBILE_PHONE',
  ADDRESS = 'ADDRESS',
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
  CAR_LICENSE = 'CAR_LICENSE',
  BANK_CARD = 'BANK_CARD',
}

/**
 * @description 使用指定字符替换字符串中指定位置的字符
 * @author (轻叶)
 * @param str - 原始字符串
 * @param startInclude - 开始位置（包含）
 * @param endExclude - 结束位置（不包含）
 * @param replacedChar - 替换字符，默认为 '*'
 * @returns 脱敏后的字符串
 * @Date 2025-12-23
 * @example hide('123456789', 3, 6) // '123***789'
 */
function hide(
  str: string,
  startInclude: number,
  endExclude: number,
  replacedChar = '*',
): string {
  if (!str || str.length === 0) return '';
  const len = str.length;
  if (startInclude < 0 || endExclude > len || startInclude > endExclude) {
    return str;
  }
  const before = str.substring(0, startInclude);
  const after = str.substring(endExclude);
  const maskLen = endExclude - startInclude;
  return before + replacedChar.repeat(maskLen) + after;
}

/**
 * @description 用户ID脱敏，仅保留第一位
 * @author (轻叶)
 * @param userId - 用户ID
 * @returns 脱敏后的用户ID
 * @Date 2025-12-23
 * @example userId('1234567890') // '1*********'
 */
function userId(userId: string): string {
  if (!userId || userId.length <= 1) return userId || '';
  return hide(userId, 1, userId.length);
}

/**
 * @description 中文姓名脱敏，只显示第一个字，其他用*代替
 * @author (轻叶)
 * @param fullName - 中文姓名
 * @returns 脱敏后的姓名
 * @Date 2025-12-23
 * @example chineseName('张三丰') // '张**'
 */
function chineseName(fullName: string): string {
  if (!fullName || fullName.length <= 1) return fullName || '';
  return hide(fullName, 1, fullName.length);
}

/**
 * @description 身份证号脱敏，保留前N位和后M位
 * @author (轻叶)
 * @param idCard - 身份证号
 * @param front - 保留前几位
 * @param end - 保留后几位
 * @returns 脱敏后的身份证号
 * @Date 2025-12-23
 * @example idCardNum('51343620000320711X', 1, 2) // '5***************1X'
 */
function idCardNum(idCard: string, front: number, end: number): string {
  if (!idCard || idCard.length === 0) return '';
  if (front + end >= idCard.length) return idCard;
  return hide(idCard, front, idCard.length - end);
}

/**
 * @description 座机号脱敏，保留前4位和后2位
 * @author (轻叶)
 * @param phone - 座机号
 * @returns 脱敏后的座机号
 * @Date 2025-12-23
 * @example fixedPhone('010-12345678') // '010-****78'
 */
function fixedPhone(phone: string): string {
  if (!phone || phone.length <= 6) return phone || '';
  const before = phone.substring(0, 4);
  const after = phone.substring(phone.length - 2);
  return before + '****' + after;
}

/**
 * @description 手机号脱敏，保留前3位和后4位
 * @author (轻叶)
 * @param phone - 手机号
 * @returns 脱敏后的手机号
 * @Date 2025-12-23
 * @example mobilePhone('18049531999') // '180****1999'
 */
function mobilePhone(phone: string): string {
  if (!phone || phone.length !== 11) return phone || '';
  return hide(phone, 3, 7);
}

/**
 * @description 地址脱敏，只显示到地区，不显示详细地址，敏感信息长度默认设为8
 * @author (轻叶)
 * @param address - 地址
 * @param sensitiveSize - 敏感信息长度，默认为8
 * @returns 脱敏后的地址
 * @Date 2025-12-23
 * @example address('北京市朝阳区某某街道某某小区1号楼') // '北京市朝阳区某某街道********'
 */
function address(address: string, sensitiveSize = 8): string {
  if (!address || address.length <= sensitiveSize) return address || '';
  const len = address.length;
  return hide(address, len - sensitiveSize, len);
}

/**
 * @description 电子邮件脱敏，邮箱前缀仅显示第一个字符，@及后面的地址显示
 * @author (轻叶)
 * @param email - 邮箱地址
 * @returns 脱敏后的邮箱
 * @Date 2025-12-23
 * @example email('test@example.com') // 't***@example.com'
 */
function email(email: string): string {
  if (!email || !email.includes('@')) return email || '';
  const atIndex = email.indexOf('@');
  if (atIndex <= 1) return email;
  return hide(email, 1, atIndex);
}

/**
 * @description 密码脱敏，全部字符替换为*
 * @author (轻叶)
 * @param password - 密码
 * @returns 脱敏后的密码
 * @Date 2025-12-23
 * @example password('1234567890') // '**********'
 */
function password(password: string): string {
  if (!password) return '';
  return '*'.repeat(password.length);
}

/**
 * @description 中国大陆车牌脱敏，普通车牌保留前2位和后2位，新能源车牌保留前2位和后2位
 * @author (轻叶)
 * @param carLicense - 车牌号
 * @returns 脱敏后的车牌号
 * @Date 2025-12-23
 * @example carLicense('京A12345') // '京A***45'
 * @example carLicense('京AD12345') // '京A****45'
 */
function carLicense(carLicense: string): string {
  if (!carLicense || carLicense.length < 7) return carLicense || '';
  return hide(carLicense, 2, carLicense.length - 2);
}

/**
 * @description 银行卡号脱敏，保留前4位和后4位
 * @author (轻叶)
 * @param bankCard - 银行卡号
 * @returns 脱敏后的银行卡号
 * @Date 2025-12-23
 * @example bankCard('6222021234567890123') // '6222***********0123'
 */
function bankCard(bankCard: string): string {
  if (!bankCard || bankCard.length <= 8) return bankCard || '';
  return hide(bankCard, 4, bankCard.length - 4);
}

/**
 * @description 根据脱敏类型自动脱敏
 * @author (轻叶)
 * @param str - 原始字符串
 * @param type - 脱敏类型
 * @returns 脱敏后的字符串
 * @Date 2025-12-23
 * @example desensitized('18049531999', DesensitizedType.MOBILE_PHONE) // '180****1999'
 */
function desensitized(str: string, type: DesensitizedType): string {
  if (!str) return '';
  switch (type) {
    case DesensitizedType.USER_ID:
      return userId(str);
    case DesensitizedType.CHINESE_NAME:
      return chineseName(str);
    case DesensitizedType.ID_CARD:
      return idCardNum(str, 1, 2);
    case DesensitizedType.FIXED_PHONE:
      return fixedPhone(str);
    case DesensitizedType.MOBILE_PHONE:
      return mobilePhone(str);
    case DesensitizedType.ADDRESS:
      return address(str);
    case DesensitizedType.EMAIL:
      return email(str);
    case DesensitizedType.PASSWORD:
      return password(str);
    case DesensitizedType.CAR_LICENSE:
      return carLicense(str);
    case DesensitizedType.BANK_CARD:
      return bankCard(str);
    default:
      return str;
  }
}

export const desensitizedUtil = {
  hide,
  userId,
  chineseName,
  idCardNum,
  fixedPhone,
  mobilePhone,
  address,
  email,
  password,
  carLicense,
  bankCard,
  desensitized,
  DesensitizedType,
};
