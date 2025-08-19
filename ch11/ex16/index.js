export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retryCount = 0;

  const attempt = () => {
    // funcを呼び出し、結果を確認
    if (func()) {
      // 成功した場合：callbackをtrueで呼び出して終了
      callback(true);
      return;
    }

    // funcがfalseを返した場合（失敗した場合）
    if (retryCount < maxRetry) {
      // リトライ回数が上限に達していない場合、リトライを追加
      retryCount++;
      // 待ち時間を計算
      const delay = Math.pow(2, retryCount - 1) * 1000;
      
      setTimeout(attempt, delay);
    } else {
      // 最大リトライ回数に達した場合：callbackをfalseで呼び出して終了
      callback(false);
    }
  };

  setTimeout(attempt, 0);
}