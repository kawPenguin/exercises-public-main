/**
 * [Object.prototype.isPrototypeOf()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) は、オブジェクトが別のオブジェクトのプロトタイプチェーンに存在するかどうかを判定できる。
このメソッドを使って、P149 冒頭のコードにおいて、` o` が `p` および `q` のプロトタイプチェーン上に存在すること、および、`p` が `q` のプロトタイプチェーン上に存在することを確認しなさい。

また同様に、`Object`, `Array`, `Date`, `Map` のプロトタイプチェーンの継承関係を確認するためのコードも書きなさい。
 */

let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;

// o が p のプロトタイプチェーン上に存在することを確認
console.log(o.isPrototypeOf(p)); // true
// p が q のプロトタイプチェーン上に存在することを確認


let q = Object.create(p);   
q.z = 3;
let f = q.toString();
q.x + q.y

// p が q のプロトタイプチェーン上に存在することを確認
console.log(p.isPrototypeOf(q)); // true
// o が q のプロトタイプチェーン上に存在することを確認
console.log(o.isPrototypeOf(q)); // true

// Object, Array, Date, Map のプロトタイプチェーンの継承関係を確認
console.log(Object.prototype.isPrototypeOf(Array.prototype)); // true
console.log(Object.prototype.isPrototypeOf(Date.prototype)); // true
console.log(Object.prototype.isPrototypeOf(Map.prototype)); // true
