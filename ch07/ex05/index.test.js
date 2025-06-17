import { pop, push, shift, sort, unshift } from "./index.js";

describe('非破壊的配列操作関数', () => {
  const arr = [1, 2, 3, 4, 5];

  it('pop', () => {
    expect(pop(arr)).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('push', () => {
    expect(push(arr, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(push(arr, 6, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('shift', () => {
    expect(shift(arr)).toEqual([2, 3, 4, 5]);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('unshift', () => {
    expect(unshift(arr, 0)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(unshift(arr, -1, 0)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('sort', () => {
    expect(sort(arr, (a, b) => b - a)).toEqual([5, 4, 3, 2, 1]);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});