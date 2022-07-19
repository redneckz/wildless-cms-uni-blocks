export function diff<T>(minuend: T[], subtrahend: T[]): T[] {
  return minuend.filter((m) => subtrahend.every((s) => m !== s));
}
