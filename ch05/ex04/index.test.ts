import { fibonacciDoWhile, fibonacciFor, fibonacciWhile } from "./index.ts";

describe('フィボナッチ数列', () => {
  const expectedFibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  it('fibonacciWhile は最初の10個のフィボナッチ数列を正しく生成する', () => {
    expect(fibonacciWhile()).toEqual(expectedFibonacciSequence);
  });

  it('fibonacciDoWhile は最初の10個のフィボナッチ数列を正しく生成する', () => {
    expect(fibonacciDoWhile()).toEqual(expectedFibonacciSequence);
  });

  it('fibonacciFor は最初の10個のフィボナッチ数列を正しく生成する', () => {
    expect(fibonacciFor()).toEqual(expectedFibonacciSequence);
  });
});