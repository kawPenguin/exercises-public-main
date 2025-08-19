// utils.jsから'add'関数をインポートし、そのまま再エクスポート
export { add2 as add } from './utils.js';

// utils.jsのデフォルトエクスポートを、'Person'という名前で名前付きエクスポートとして再エクスポート
export { default as Person } from './utils.js';