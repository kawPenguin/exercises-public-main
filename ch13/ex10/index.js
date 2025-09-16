import { join } from "path";

export async function fetchSumOfFileSizes(path) {
  try {
    const files = await fs.readdir(path);

    // 各ファイルの stat 取得処理を Promise の配列として作成
    const statsPromises = files.map(file => {
      return fs.stat(join(path, file));
    });

    // Promise.all ですべての Promise が解決するのを待つ
    const statsArray = await Promise.all(statsPromises);

    // 各ファイルのサイズを合計する
    const total = statsArray.reduce((sum, stats) => sum + stats.size, 0);

    return total;
  } catch (err) {
    throw err;
  }
}
