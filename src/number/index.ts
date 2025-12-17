/**
 * Converts a value to a number.
 * Returns NaN if the value cannot be converted or is an empty string.
 *
 * @param value - The value to convert
 * @returns The converted number or NaN
 * @example
 * toNumber(123) // 123
 * toNumber('123') // 123
 * toNumber('12.3') // 12.3
 * toNumber('') // NaN
 * toNumber(null) // 0 (Standard Number behavior)
 * toNumber(undefined) // NaN
 */
export function toNumber(value: unknown): number {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === '') {
      return NaN;
    }
    return Number(trimmed);
  }
  return Number(value);
}

/**
 * Clamps a number within the inclusive lower and upper bounds.
 *
 * @param num - The number to clamp
 * @param min - The lower bound
 * @param max - The upper bound
 * @returns The clamped number
 * @example
 * clamp(10, 0, 5) // 5
 * clamp(-5, 0, 5) // 0
 * clamp(3, 0, 5) // 3
 */
export function clamp(num: number, min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Generates a random integer between min and max (inclusive).
 *
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A random integer between min and max
 * @example
 * random(1, 5) // 1, 2, 3, 4, or 5
 */
export function random(min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}
