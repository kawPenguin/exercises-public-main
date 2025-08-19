/**
 * 設問11-3
 * 引数として与えられる 符号なし 32 ビット整数の配列(Uint32Array) を受け取り、変換して符号なし 32 ビット整数の配列(Uint32Array) を返す次の二つの関数を実装しなさい。
 * - リトルエンディアンのバイト列として引数のデータを読み込み、ビッグエンディアンのバイト列に変換して返す関数
 * - ビッグエンディアンのバイト列として引数のデータを読み込み、リトルエンディアンのバイト列に変換して返す関数
 */

function swapEndianness(inputArray) {
  // 結果を格納するための新しいUint32Arrayを同じ長さで作成
  const outputArray = new Uint32Array(inputArray.length);

  for (let i = 0; i < inputArray.length; i++) {
    const value = inputArray[i];

    // ビット演算を使用してバイト順序を入れ替える
    const swap =
      ((value & 0x000000ff) << 24) | // 第1バイト->第4バイト
      ((value & 0x0000ff00) << 8)  | // 第2バイト->第3バイト
      ((value & 0x00ff0000) >>> 8) | // 第3バイト->第2バイト
      ((value & 0xff000000) >>> 24); // 第4バイト->第1バイト
    
    outputArray[i] = swap;
  }

  return outputArray;
}

// リトルエンディアンのバイト列として引数のデータを読み込み、ビッグエンディアンのバイト列に変換して返す関数
export function littleToBig(littleEndianArray) {
  return swapEndianness(littleEndianArray);
}

// ビッグエンディアンのバイト列として引数のデータを読み込み、リトルエンディアンのバイト列に変換して返す関数
export function bigToLittle(bigEndianArray) {
  return swapEndianness(bigEndianArray);
}
