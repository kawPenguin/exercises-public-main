import { createFibonacciIterator } from "./index.js";

describe('createFibonacciIterator', () => {
  test("フィボナッチ数列", () => {

    const fib = createFibonacciIterator();

    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(2);
    expect(fib.next().value).toBe(3);
    expect(fib.next().value).toBe(5);
    expect(fib.next().value).toBe(8);
    expect(fib.next().value).toBe(13);
  });
});