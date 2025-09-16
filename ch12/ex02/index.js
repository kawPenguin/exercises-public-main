export function createFibonacciIterator() {
  let x = 0;
  let y = 1;

  // イテレータプロトコルに準拠したオブジェクトを返す
  return {
    next: function() {
      // 現在のフィボナッチ数を計算（次の値）
      const nextValue = y;

      // 次のイテレーションのために状態を更新
      [x, y] = [y, x + y];

      // イテレータの結果オブジェクトを返す
      return {
        value: nextValue,
        done: false
      };
    }
  };
}