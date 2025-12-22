/**
 * 获取当前年份
 * @param returnString 是否返回字符串类型（默认false）
 * @returns 当前年份（数字/字符串）
 */
function getCurrentYear(returnString: boolean = false): string | number {
  const year = new Date().getFullYear();
  return returnString ? year.toString() : year;
}
/**
 * 获取当前日期的Date对象
 * @returns 当前日期的Date实例
 */
function getCurrentDate(): Date {
  return new Date();
}

export const dateUtils = {
  getCurrentYear,
  getCurrentDate,
};
