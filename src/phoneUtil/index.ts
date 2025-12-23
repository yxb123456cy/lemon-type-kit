/**
 * Phone utility.
 * 手机号 / 电话工具集合
 */
export type CharSequence = string | number | null | undefined;

/**
 * @description Converts any CharSequence value to string safely.
 * 将任意 CharSequence 安全转换为字符串。
 * @author (轻叶)
 * @param value - Input value / 输入值
 * @returns String value / 字符串
 * @Date 2025-12-23
 */
function toStr(value?: CharSequence): string {
  return String(value ?? '');
}

/**
 * @description Masks the last 4 digits of a phone number with "*".
 * 隐藏手机号最后 4 位，使用 "*" 替换。
 * @author (轻叶)
 * @param phone - Phone number / 手机号
 * @returns Masked phone number / 脱敏后的手机号 (CharSequence)
 * @Date 2025-12-23
 * @example hideAfter('13812345678') // '1381234****'
 */
const hideAfter = (phone?: CharSequence): CharSequence => {
  const v = toStr(phone);
  if (v.length < 4) return v;
  return v.slice(0, -4) + '****';
};

/**
 * @description Masks the first 7 digits of a phone number with "*".
 * 隐藏手机号前 7 位，使用 "*" 替换。
 * @author (轻叶)
 * @param phone - Phone number / 手机号
 * @returns Masked phone number / 脱敏后的手机号 (CharSequence)
 * @Date 2025-12-23
 * @example hideBefore('13812345678') // '*******5678'
 */
const hideBefore = (phone?: CharSequence): CharSequence => {
  const v = toStr(phone);
  if (v.length < 7) return v;
  return '*******' + v.slice(7);
};

/**
 * @description Masks the middle 4 digits of a phone number with "*".
 * 隐藏手机号中间 4 位，使用 "*" 替换。
 * @author (轻叶)
 * @param phone - Phone number / 手机号
 * @returns Masked phone number / 脱敏后的手机号 (CharSequence)
 * @Date 2025-12-23
 * @example hideBetween('13812345678') // '138****5678'
 */
const hideBetween = (phone?: CharSequence): CharSequence => {
  const v = toStr(phone);
  if (v.length < 7) return v;
  return v.slice(0, 3) + '****' + v.slice(7);
};

/**
 * @description Returns the last 4 digits of a phone number.
 * 获取手机号后 4 位。
 * @author (轻叶)
 * @param phone - Phone number / 手机号
 * @returns Last 4 digits / 后 4 位 (CharSequence)
 * @Date 2025-12-23
 * @example subAfter('13812345678') // '5678'
 */
const subAfter = (phone?: CharSequence): CharSequence => {
  const v = toStr(phone);
  return v.slice(-4);
};

/**
 * @description Returns the first 3 digits of a phone number.
 * 获取手机号前 3 位。
 * @author (轻叶)
 * @param phone - Phone number / 手机号
 * @returns First 3 digits / 前 3 位 (CharSequence)
 * @Date 2025-12-23
 * @example subBefore('13812345678') // '138'
 */
const subBefore = (phone?: CharSequence): CharSequence => {
  const v = toStr(phone);
  return v.slice(0, 3);
};

/**
 * @description Returns the middle 4 digits of a phone number.
 * 获取手机号中间 4 位。
 * @author (轻叶)
 * @param phone - Phone number / 手机号
 * @returns Middle 4 digits / 中间 4 位 (CharSequence)
 * @Date 2025-12-23
 * @example subBetween('13812345678') // '1234'
 */
const subBetween = (phone?: CharSequence): CharSequence => {
  const v = toStr(phone);
  if (v.length < 7) return '';
  return v.slice(3, 7);
};

/**
 * @description Checks whether the value is a valid mainland China mobile number.
 * 验证是否为中国大陆手机号。
 * @author (轻叶)
 * @param value - Phone number / 手机号
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isMobile('13812345678') // true
 */
const isMobile = (value?: CharSequence): boolean =>
  /^1[3-9]\d{9}$/.test(toStr(value));

/**
 * @description Checks whether the value is a valid Hong Kong mobile number.
 * 验证是否为中国香港手机号。
 * @author (轻叶)
 * @param value - Phone number / 手机号
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isMobileHk('51234567') // true
 */
const isMobileHk = (value?: CharSequence): boolean =>
  /^(5|6|9)\d{7}$/.test(toStr(value));

/**
 * @description Checks whether the value is a valid Macau mobile number.
 * 验证是否为中国澳门手机号。
 * @author (轻叶)
 * @param value - Phone number / 手机号
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isMobileMo('61234567') // true
 */
const isMobileMo = (value?: CharSequence): boolean =>
  /^6\d{7}$/.test(toStr(value));

/**
 * @description Checks whether the value is a valid Taiwan mobile number.
 * 验证是否为中国台湾手机号。
 * @author (轻叶)
 * @param value - Phone number / 手机号
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isMobileTw('0912345678') // true
 */
const isMobileTw = (value?: CharSequence): boolean =>
  /^09\d{8}$/.test(toStr(value));

/**
 * @description Checks whether the value is a valid mainland China landline number.
 * 验证是否为中国大陆座机号码。
 * @author (轻叶)
 * @param value - Telephone number / 座机号码
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isTel('010-12345678') // true
 */
const isTel = (value?: CharSequence): boolean =>
  /^0\d{2,3}-?\d{7,8}$/.test(toStr(value));

/**
 * @description Checks whether the value is a valid 400 or 800 service number.
 * 验证是否为 400 / 800 电话。
 * @author (轻叶)
 * @param value - Telephone number / 电话号码
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isTel400800('400-123-4567') // true
 */
const isTel400800 = (value?: CharSequence): boolean =>
  /^(400|800)-?\d{3}-?\d{4}$/.test(toStr(value));

/**
 * @description Checks whether the value is any supported phone number.
 * 验证是否为手机 / 座机 / 400 / 800 / 港澳台号码。
 * @author (轻叶)
 * @param value - Phone number / 电话号码
 * @returns True if valid / 是否合法 (boolean)
 * @Date 2025-12-23
 * @example isPhone('13812345678') // true
 */
const isPhone = (value?: CharSequence): boolean =>
  isMobile(value) ||
  isTel(value) ||
  isTel400800(value) ||
  isMobileHk(value) ||
  isMobileMo(value) ||
  isMobileTw(value);

/**
 * @description Extracts the number part of a landline phone number.
 * 获取固话号码中的号码部分。
 * @author (轻叶)
 * @param value - Landline number / 固话
 * @returns Phone number part / 号码 (CharSequence)
 * @Date 2025-12-23
 * @example subTelAfter('010-12345678') // '12345678'
 */
const subTelAfter = (value?: CharSequence): CharSequence => {
  const match = toStr(value).match(/^(0\d{2,3})-?(\d{7,8})$/);
  return match ? match[2] : '';
};

/**
 * @description Extracts the area code of a landline phone number.
 * 获取固话号码中的区号。
 * @author (轻叶)
 * @param value - Landline number / 固话
 * @returns Area code / 区号 (CharSequence)
 * @Date 2025-12-23
 * @example subTelBefore('010-12345678') // '010'
 */
const subTelBefore = (value?: CharSequence): CharSequence => {
  const match = toStr(value).match(/^(0\d{2,3})-?\d{7,8}$/);
  return match ? match[1] : '';
};

/**
 * Phone utility collection.
 * 手机号工具集合。
 */
export const phoneUtil = {
  hideAfter,
  hideBefore,
  hideBetween,

  subAfter,
  subBefore,
  subBetween,

  isMobile,
  isMobileHk,
  isMobileMo,
  isMobileTw,
  isPhone,

  isTel,
  isTel400800,

  subTelAfter,
  subTelBefore,
};
