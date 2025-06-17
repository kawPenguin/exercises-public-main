/**
 * `Object.assign()`と等価な関数 `assign()` を作成しなさい。
与えられたテストを全てパスすること。
 */

export function assign(target, ...sources) {
  if (target == null) throw new TypeError('Cannot convert undefined or null to object');
  const to = Object(target);
  for (const source of sources) {
    if (source == null) continue;
    // 通常のプロパティ
    for (const key of Object.keys(source)) {
      to[key] = source[key];
    }
    // シンボルプロパティ
    for (const sym of Object.getOwnPropertySymbols(source)) {
      to[sym] = source[sym];
    }
  }
  return to;
}