/**
 * 問題 4.4
 * 
 * 与えられた数値を 32 ビット整数表現形式で表現した場合に 1 であるビットの数を返す関数 `bitCount` を書きなさい。
 * 例として `bitCount(0b111)` は 3 を返し、`bitCount(0b1111111111111111111111111111111)` は `31` を返しなさい。
 */

/**
 * 与えられた数値を 32 ビット整数表現形式で表現した場合に 1 であるビットの数を返す
 * @param n 数値
 */
export function bitCount(n: number): number {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) {
      count++;
    }
    n >>>= 1; // 符号なし右シフト
  }
  return count;
}