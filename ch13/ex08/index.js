import fs from 'fs';
import { join } from 'path';

/**
 * ディレクトリ内の最初のファイルのサイズを取得します。
 */
export async function fetchFirstFileSize(path) {
  try {
    const files = await fs.readdir(path);
    if (files.length === 0) {
      return null;
    }
    const stats = await fs.stat(join(path, files[0]));
    return stats.size;
  } catch (err) {
    // エラーが発生した場合は、呼び出し元でキャッチできるように再スローします。
    throw err;
  }
}

/**
 * ディレクトリ内のすべてのファイルの合計サイズを取得
 */
export async function fetchSumOfFileSizes(path) {
  try {
    const files = await fs.readdir(path);
    
    let totalSize = 0;
    
    for (const file of files) {
      const stats = await fs.stat(join(path, file));
      totalSize += stats.size;
    }
    
    return totalSize;
  } catch (err) {
    // エラーは呼び出し元にスローする
    throw err;
  }
}
