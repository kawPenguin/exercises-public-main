import { cache } from "./index.js";

describe('cache', () => {
  test('同じオブジェクトを渡した場合、元の関数は一度しか呼び出されないこと', () => {

    const originalFn = jest.fn(obj => `processed ${obj.id}`);

    // chacheで、jestモックをキャッシュ
    const cachedFn = cache(originalFn);

    const myObject = { id: 'A' };
    const result1 = cachedFn(myObject);

    // 1回目の呼び出し検証
    // originalが1回だけ呼び出されたことを確認
    expect(originalFn).toHaveBeenCalledTimes(1);
    expect(result1).toBe('processed A');

    // myObjectでCachedFnを呼び出す
    const result2 = cachedFn(myObject);

    // 2回目の呼び出しの検証
    expect(originalFn).toHaveBeenCalledTimes(1);
    expect(result2).toBe('processed A');
  });
});