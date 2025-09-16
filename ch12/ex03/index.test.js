import { resettableCounter } from "./index.js";
import { describe, it} from "@jest/globals";

describe('resettableCounter', () => {
  it('カウンタが正しく動作すること', () => {
    // ジェネレータオブジェクトを初期化
    const counter = resettableCounter();

    // カウンタが正しくインクリメントされること
    expect(counter.next().value).toBe(0);
    expect(counter.next().value).toBe(1);
    expect(counter.next().value).toBe(2);

    // throw()を呼び出してカウンターをリセット
    expect(counter.throw('カウンターをリセット').value).toBe(0);
  });
});