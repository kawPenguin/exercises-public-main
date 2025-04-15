export function slice(input:string, start: number, end?: number):string {
  // 配列または文字列の長さを取得
  const length = input.length;

  let normalizedStart;

  if (Number.isNaN(start)) {
    normalizedStart = 0;  // NaNの場合は0として扱う
  } else {
    if (Math.floor(start) < 0) {
      normalizedStart = Math.max(length + Math.floor(start), 0);  // startの正規化（負の値の場合は末尾からのインデックスに変換）
    } else {
      normalizedStart = Math.min(Math.floor(start), length);  // 小数点の場合は整数に変換（Math.floor）
    }
  }
  
  // endの正規化
  let normalizedEnd;

  if (end === undefined) {
    normalizedEnd = length;  // - 未指定の場合は文字列の長さ
  } else if (Number.isNaN(end)) {
    normalizedEnd = 0;  // - NaNの場合は0
  } else if (Math.floor(end) < 0) {
    normalizedEnd = Math.max(length + Math.floor(end), 0);  // - 負の値の場合は末尾からに変換
  } else {
    normalizedEnd = Math.min(Math.floor(end), length);
  }
  
  // startがendより大きい場合は空の結果を返す
  if (normalizedStart >= normalizedEnd) {
    return "";
  }
  
  // 入力が文字列の場合
  return input.substring(normalizedStart, normalizedEnd);
  
}