/**
 * オブジェクトリテラルで独自プロパティを持つオブジェクトを定義し、`Object.create` を使用してそのオブジェクトをプロトタイプとして持つ新しいオブジェクト生成しなさい。
[Object.getPrototypeOf()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
を利用して、生成したオブジェクトのプロトタイプが `Object.create` で渡したオブジェクトになっていることを確認しなさい。
 * 
 */


const baseObject = {
  customProperty: 'This is a custom property',
  customMethod() {
    return 'This is a custom method';
  }
};
const newObject = Object.create(baseObject);

console.log(newObject.customProperty); // This is a custom property
console.log(newObject.customMethod); // [Function: customMethod]
console.log(Object.getPrototypeOf(newObject) === baseObject); // true
 