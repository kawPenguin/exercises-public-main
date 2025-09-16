export function retryWithExponentialBackoff(func, maxRetries) {
  return new Promise((resolve, reject) => {
    const attempt = async (retryCount) => {
      try {
        // 引数で受け取ったfuncを実行し、Promiseが解決されるのを待機
        const result = await func();
        
        resolve(result);
      } catch (error) {
        // funcが失敗（Promiseがreject)した場合

        if (retryCount < maxRetries) {
          // リトライ回数が上限に達していない
          const delay = Math.pow(2, retryCount) * 1000;
          
          // 計算した時間だけ待ってから、次の試行を行います。
          setTimeout(() => attempt(retryCount + 1), delay);
        } else {
          // 最大リトライ回数に達した場合
          // Promiseを最後に失敗したerrorで返す
          reject(error);
        }
      }
    };
    // 最初の試行
    attempt(0);
  });
}