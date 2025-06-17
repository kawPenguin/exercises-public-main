import { describe } from "node:test";
import { addMatrices, multiplyMatrices } from "./index.ts";

describe("行列の加算", () => {
    it("2x2の行列の加算", () => {
    const a = [
      [1, 2],
      [3, 4],
    ];
    const b = [
      [5, 6],
      [7, 8],
    ];
    const expected = [
      [6, 8],
      [10, 12],
    ];
    expect(addMatrices(a, b)).toEqual(expected);
  });

  it("3x3の行列の加算", () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const b = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    const expected = [
      [10, 10, 10],
      [10, 10, 10],
      [10, 10, 10],
    ];
    expect(addMatrices(a, b)).toEqual(expected);
  });
});

describe("行列の乗算", () => {
    it("2x2の行列の乗算", () => {
        const a = [
        [1, 2],
        [3, 4],
        ];
        const b = [
        [5, 6],
        [7, 8],
        ];
        const expected = [
        [19, 22],
        [43, 50],
        ];
        expect(multiplyMatrices(a, b)).toEqual(expected);
    });
    
    it("3x2と2x3の行列の乗算", () => {
        const a = [
        [1, 2],
        [3, 4],
        [5, 6],
        ];
        const b = [
        [7, 8, 9],
        [10, 11, 12],
        ];
        const expected = [
        [27, 30, 33],
        [61, 68, 75],
        [95, 106, 117],
        ];
        expect(multiplyMatrices(a, b)).toEqual(expected);
    });
});