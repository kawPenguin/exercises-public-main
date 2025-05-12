import { bitCount } from "./index.ts";

describe('bitCount', () => {
  test('0b111 の場合、3を返す', () => {
    expect(bitCount(0b111)).toBe(3);
  });

  test('0b1111111111111111111111111111111 の場合、31を返す', () => {
    expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
  });

  test('0 の場合、0を返す', () => {
    expect(bitCount(0)).toBe(0);
  });

  test('-1 の場合、32を返す', () => {
    expect(bitCount(-1)).toBe(32);
  });

　test('-2の場合、31を返す', () => {
    expect(bitCount(-2)).toBe(31); 
  });

  test('正の偶数の場合', () => {
    expect(bitCount(10)).toBe(2); // 10 は 0b1010
  });

  test('大きな正の奇数の場合', () => {
    expect(bitCount(2147483647)).toBe(31); // 2^31 - 1
  });

});