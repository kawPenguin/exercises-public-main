const fs = require('fs');

export function* readLines(filePath) {
  const BUFFER_SIZE = 256 * 1024; // 256KBのバッファ
  const buffer = Buffer.alloc(BUFFER_SIZE);

  let fd;

  try {
    // ファイルを読み取りモードで開く
    fd = fs.openSync(filePath, 'r');

    let remainder = ''; 
    let bytesRead;

    // ファイルの終端に達するまでチャンクを読み込み続ける
    while ((bytesRead = fs.readSync(fd, buffer, 0, BUFFER_SIZE, null)) > 0) {
      // 読み込んだバッファと前回の残りを結合
      let chunk = remainder + buffer.toString('utf8', 0, bytesRead);
      let newlineIndex;

      // チャンク内に改行コードが含まれている限りループ
      while ((newlineIndex = chunk.indexOf('\n')) !== -1) {
        // 改行コードまでの部分を1行として切り出して yield する
        const line = chunk.slice(0, newlineIndex);
        yield line;
        
        // 処理済みの行をチャンクから削除
        chunk = chunk.slice(newlineIndex + 1);
      }
      
      // チャンクの残りを次回の読み込みに備えて保持
      remainder = chunk;
    }

    // ループ終了後、最後に残った部分があればそれが最終行
    if (remainder.length > 0) {
      yield remainder;
    }

  } finally {
    // どのような状態でも、closeSyncを行う
    if (fd !== undefined) {
      fs.closeSync(fd);
    }
  }
}