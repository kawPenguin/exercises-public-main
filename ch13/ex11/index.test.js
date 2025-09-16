import { describe, it, jest } from "@jest/globals";
import { retryWithExponentialBackoff } from "./index.js";

jest.useFakeTimers();

describe('retryWithExponentialBackoff', () => {
  it('指定回数内で成功した場合、解決済みのPromiseを返すこと', async () => {
    let attemptCount = 0;
    const expectedResult = '成功しました';

    // 3回目の呼び出しで成功するモック関数を作成します
    const mockFunc = jest.fn(() => {
      attemptCount++;
      if (attemptCount < 3) {
        // 1回目と2回目は失敗させる
        return Promise.reject(new Error('一時的なエラー'));
      }
      // 3回目に成功させ、Promiseをresolve
      return Promise.resolve(expectedResult);
    });

    // テスト対象の関数を実行
    const promise = retryWithExponentialBackoff(mockFunc, 5);

    // リトライ処理を完了させる
    await jest.runAllTimersAsync();

    // 1. Promiseが最終的に"成功しました"という値で解決
    await expect(promise).resolves.toBe(expectedResult);
    
    // 2. モック関数がちょうど3回呼び出されたことを確認
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });
});