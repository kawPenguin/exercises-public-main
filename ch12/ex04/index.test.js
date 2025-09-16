import { primes } from "./index.js";
import { describe, it} from "@jest/globals";

describe('primes', () => {
  /**
   * 最初の数個の素数が正しい順序で生成されるかをテスト
   */
  it("エラトステネスの篩に則って実装した素数", () => {
    // ジェネレータのインスタンスを作成
    const primeGenerator = primes();

    // 最初の6つの素数を順番に検証
    expect(primeGenerator.next().value).toBe(2);
    expect(primeGenerator.next().value).toBe(3);
    expect(primeGenerator.next().value).toBe(5);
    expect(primeGenerator.next().value).toBe(7);
    expect(primeGenerator.next().value).toBe(11);
    expect(primeGenerator.next().value).toBe(13);
  });
});