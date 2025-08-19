class FileSizeError extends Error {

  constructor(filepath, fileSize, sizeLimit) {
    // 親クラス(Error)のコンストラクタを呼び出し、エラーメッセージを設定
    super(
      `ファイルのサイズが大きすぎます 🐘\n` +
      `  - ファイル: ${filepath}\n` +
      `  - 現在のサイズ: ${(fileSize / 1024).toFixed(2)} KB\n` +
      `  - 許容サイズ: ${(sizeLimit / 1024).toFixed(2)} KB`
    );


    // カスタムプロパティとして詳細情報を保持
    this.filepath = filepath;
    this.fileSize = fileSize;
    this.sizeLimit = sizeLimit;
  }
}