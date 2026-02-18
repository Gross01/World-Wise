export function safeObjectValues<T extends object>(
  obj: T | null | undefined
): Array<T[keyof T]> {
  if (!obj) return [];

  return Object.values(obj);
}