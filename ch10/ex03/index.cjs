/**
 * 設問10-3
 * 任意の関数とクラスを作成し、
 * 「Nodeのモジュール」方式で別ファイルから利用するコードを実装しなさい。
 */

const sum = require("./sum.cjs");

console.log(sum(1, 2));