export function* resettableCounter() {
  let count = 0;
  while (true) {
    try {
      yield count;
      // 次の呼び出しのためにカウントをインクリメント
      count++;
    } catch (e) {
      // counter.throw()が呼び出されると、このcatchブロックが実行される
      console.log("カウンターをリセット");
      // カウンターをリセット
      count = 0;
    }
  }
}