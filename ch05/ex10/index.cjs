/**
 * 問題 5.10
 * 
 * 書籍では `with` 文に関して「できるだけ使わないようにしたほうがよい」と記述されているが、
 * `with` 文は使うべきではない (参考: [MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/with))。
 * `with` 文は最適化が難しくなるだけでなく混乱を招く可能性がある。
 * このことを理解するために以下の 4 ブロックを実行し、
 * `console.log` の出力および `with` 文を使わずに同じ処理を書く場合にどのような文になるかを書きなさい。
 * 
 */

{
  let a = 1;
  let b = 2;
  let obj = { a: 3, b: 4 };
  // with (obj) {
  //   a = b;
  // }
  obj.a = obj.b;
  console.log({ a, b, obj });
  // console.log の出力: { a: 1, b: 2, obj: { a: 4, b: 4 }}
  // with 文を使わずに同じ処理を書く場合: obj.a = obj.b
}
{
  let a = 1;
  let b = 2;
  let obj = { b: 4 };
  // with (obj) {
  //   a = b;
  // }
  a = obj.b;
  console.log({ a, b, obj });
}
{
  let a = 1;
  let b = 2;
  let obj = { a: 3 };
  // with (obj) {
  //   a = b;
  // }
  obj.a = b;
  console.log({ a, b, obj });
}
{
  let a = 1;
  let b = 2;
  let obj = {};
  // with (obj) {
  //   a = b;
  // }
  a = b;
  console.log({ a, b, obj });
}