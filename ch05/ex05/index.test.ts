import { filterEvenProperties } from "./index.ts";

describe('filterEvenProperties', () => {
  it('偶数・奇数の値を含む場合', () => {
    const inputObject = { x: 1, y: 2, z: 3, a: 4 };
    const expectedOutput = { y: 2, a: 4 };
    expect(filterEvenProperties(inputObject)).toEqual(expectedOutput);
  });

  it('奇数の値のみを含む場合', () => {
    const inputObject = { x: 1, z: 3, b: 5 };
    const expectedOutput = {};
    expect(filterEvenProperties(inputObject)).toEqual(expectedOutput);
  });

  it('偶数の値のみを含む場合', () => {
    const inputObject = { y: 2, a: 4, c: 6 };
    const expectedOutput = { y: 2, a: 4, c: 6 };
    expect(filterEvenProperties(inputObject)).toEqual(expectedOutput);
  });

  it('オブジェクトが値を持たない場合', () => {
    const inputObject = {};
    const expectedOutput = {};
    expect(filterEvenProperties(inputObject)).toEqual(expectedOutput);
  });
});