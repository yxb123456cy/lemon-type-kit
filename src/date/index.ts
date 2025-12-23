/**
 * @description 获取当前年份
 * @author (轻叶)
 * @param returnString - 是否返回字符串类型（默认false）
 * @returns 当前年份 (number | string)
 * @Date 2025-12-23
 * @example getCurrentYear() // 2025
 */
function getCurrentYear(returnString: boolean = false): string | number {
  const year = new Date().getFullYear();
  return returnString ? year.toString() : year;
}

/**
 * @description 获取当前日期的Date对象
 * @author (轻叶)
 * @returns 当前日期的Date实例 (Date)
 * @Date 2025-12-23
 * @example getCurrentDate() // Date object
 */
function getCurrentDate(): Date {
  return new Date();
}

export const dateUtils = {
  getCurrentYear,
  getCurrentDate,
};
