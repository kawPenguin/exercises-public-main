import { retryWithExponentialBackoff } from "./index.js";

describe('retryWithExponentialBackoff', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // 各テストの後にタイマーを元の状態に戻す
  afterEach(() => {
    jest.useRealTimers();
  });

  it('2回リトライした後に成功し、コールバックがtrueで呼ばれる', () => {
    // 最初の2回はfalseを返し、3回目にtrueを返すモック関数
    const mockFunc = jest.fn()
      .mockReturnValueOnce(false) // 1回目の呼び出し (失敗)
      .mockReturnValueOnce(false) // 2回目の呼び出し (失敗)
      .mockReturnValue(true);     // 3回目の呼び出し (成功)

    // 最終結果を受け取るためのモックコールバック関数
    const mockCallback = jest.fn();
    const maxRetry = 3;

    // テスト対象の関数を実行
    retryWithExponentialBackoff(mockFunc, maxRetry, mockCallback);

    // setTimeout(attempt, 0) を実行
    jest.runOnlyPendingTimers();
    expect(mockFunc).toHaveBeenCalledTimes(1); // 1回目の呼び出しを確認
    expect(mockCallback).not.toHaveBeenCalled(); // コールバックはまだ呼ばれない

    // 待ち時間 (2^(1-1) * 1000 = 1000ms) を進める
    jest.advanceTimersByTime(1000);
    expect(mockFunc).toHaveBeenCalledTimes(2); // 2回目の呼び出しを確認
    expect(mockCallback).not.toHaveBeenCalled();

    // 待ち時間 (2^(2-1) * 1000 = 2000ms) を進める
    jest.advanceTimersByTime(2000);
    expect(mockFunc).toHaveBeenCalledTimes(3); // 3回目の呼び出しを確認

    // 3回目で成功したため、コールバックが呼ばれるはず
    expect(mockCallback).toHaveBeenCalledTimes(1); // コールバックが1回だけ呼ばれたか
    expect(mockCallback).toHaveBeenCalledWith(true); // コールバックの引数がtrueだったか
  });
});