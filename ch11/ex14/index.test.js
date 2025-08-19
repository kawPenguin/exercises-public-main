import { sortJapanese, toJapaneseDateString } from "./index.js";

describe('sortJapanese', () => {
  test('濁点、半濁点、大文字小文字を無視して正しくソートされること', () => {
    const inputArray = ['ぱんだ', 'はし', 'ばす', 'ハシゴ'];
    const expectedArray = ['はし', 'ハシゴ', 'ばす', 'ぱんだ'];
    expect(sortJapanese(inputArray)).toEqual(expectedArray);
  });
});

describe('toJapaneseDateString', () => {
  test('指定した日付が正しい和暦文字列に変換されること', () => {
    // 平成の始まりの日を指定
    const heiseiFirstDay = new Date('1989-01-08');
    const expectedString = '平成元年1月8日';
    expect(toJapaneseDateString(heiseiFirstDay)).toBe(expectedString);
  });
});