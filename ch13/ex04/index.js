import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

export async function fetchFirstFileSize(path) {
  // readdir でディレクトリ内のファイルリストを配列として取得
  const files = await readdir(path);

  // ファイルがない場合は null を返す
  if (files.length === 0) {
    return null;
  }

  // 最初のファイルへのパスを生成し、stat で情報を取得
  const stats = await stat(join(path, files[0]));
  
  return stats.size;
}

export async function fetchSumOfFileSizes(path) {
  // ディレクトリ内のファイルリストを取得
  const files = await readdir(path);

  // 各ファイルに対して stat を呼び出す Promise の配列を作成
  const promises = files.map(file => stat(join(path, file)));

  // Promise.all ですべてのファイルの stat 取得を並列で実行
  const statsArray = await Promise.all(promises);

  // 取得した stat 情報からファイルサイズだけを取り出し、合計する
  const total = statsArray.reduce((sum, stats) => sum + stats.size, 0);

  return total;
}