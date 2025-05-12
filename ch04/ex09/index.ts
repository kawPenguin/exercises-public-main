/**
 * 問題 4.9
 * typeof 演算子のオペランドに、`undefined`, `null`, `オブジェクト`, `NaN`, `数値`, `関数` を指定したときの返り値を予想しなさい。
 * その後実装しコンソール出力で確認しなさい。
 */

/**
 * 返り値の予測
 * "undefined" : undefined
 * "null" : object
 * "オブジェクト" : object
 * "NaN" : number
 * "数値" : number
 * "関数" : function
 */

function mockFunction() {
  return "mockFunction";
}

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof {}); // "object"
console.log(typeof NaN); // "number"
console.log(typeof 123); // "number"
console.log(typeof mockFunction); // "function"