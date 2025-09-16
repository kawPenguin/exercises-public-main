import fs from 'fs';

export async function* walk(rootPath) {
  try {
    // ルートパス直下のファイル/ディレクトリ名リストを非同期で取得
    const names = await fs.readdir(rootPath);

    for (const name of names) {
      const fullPath = path.join(rootPath, name);

      try {
        // ファイル/ディレクトリの情報を非同期で取得
        const stats = await fs.stat(fullPath);
        const isDirectory = stats.isDirectory();

        yield { path: fullPath, isDirectory };

        if (isDirectory) {
          yield* walk(fullPath);
        }
      } catch (err) {
        // エラーが発生時
        console.error(`Cannot access: ${fullPath}`, err);
      }
    }
  } catch (err) {
    // 権限エラーなどでディレクトリが読み取れない場合
    console.error(`Cannot read directory: ${rootPath}`, err);
  }
}