import path from "path";
import fs from 'fs';

export function* walk(rootPath) {
  // ルートパス直下のファイル/ディレクトリ名リストを取得
  const names = fs.readdirSync(rootPath);

  for (const name of names) {
    const fullPath = path.join(rootPath, name);

    try {
      // ファイル/ディレクトリの情報を取得
      const stats = fs.statSync(fullPath);
      const isDirectory = stats.isDirectory();

      // パスとディレクトリかどうかの情報を持つオブジェクトをyield
      yield { path: fullPath, isDirectory };

      // ディレクトリの場合は、その中を再帰的に探索
      if (isDirectory) {
        yield* walk(fullPath);
      }
    } catch (err) {
      // errになったときは、consoleにエラーを表示
      console.error(`Cannot access: ${fullPath}`);
    }
  }
}