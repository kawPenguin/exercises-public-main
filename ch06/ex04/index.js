/**
 * [Object.defineProperty()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使うと、writable 属性/enumerable 属性/configurable 属性を設定してオブジェクトのプロパティを定義できる。
このメソッドを使って明示的に各属性を設定したプロパティを定義し、プロパティの変更、削除、`hasOwnProperty` と `propertyIsEnumerable` の結果に対してどのように影響するか確認するコードを書きなさい。
 */

let obj = {};
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.prop); // 42
obj.prop = 100; 
console.log(obj.prop); // 100
console.log(obj.hasOwnProperty('prop')); // true
console.log(obj.propertyIsEnumerable('prop')); // true
delete obj.prop; 
console.log(obj.hasOwnProperty('prop')); // false
console.log(obj.propertyIsEnumerable('prop')); // false
console.log(obj.prop); // undefined

Object.defineProperty(obj, 'prop2', {
  value: 42,
  writable: false, 
  enumerable: true,
  configurable: true
});
console.log(obj.prop2); // 42
//obj.prop2 = 100; // writable が false なので変更不可
console.log(obj.prop2); // 42
console.log(obj.hasOwnProperty('prop2')); // true
console.log(obj.propertyIsEnumerable('prop2')); // true
delete obj.prop2; 
console.log(obj.hasOwnProperty('prop2')); // false
console.log(obj.propertyIsEnumerable('prop2')); // false
console.log(obj.prop2); // undefined

Object.defineProperty(obj, 'prop3', {
  value: 42,
  writable: true,
  enumerable: false, // enumerable が false なので列挙不可
  configurable: true
});
console.log(obj.prop3); // 42
console.log(obj.hasOwnProperty('prop3')); // true
console.log(obj.propertyIsEnumerable('prop3')); // false
obj.prop3 = 100; // writable が true なので変更可能
console.log(obj.prop3); // 100
delete obj.prop3; 
console.log(obj.hasOwnProperty('prop3')); // false
console.log(obj.propertyIsEnumerable('prop3')); // false
console.log(obj.prop3); // undefined

Object.defineProperty(obj, 'prop4', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: false 
});
console.log(obj.prop4); // 42
console.log(obj.hasOwnProperty('prop4')); // true
console.log(obj.propertyIsEnumerable('prop4')); // true
obj.prop4 = 100; // writable が true なので変更可能
console.log(obj.prop4); // 100
delete obj.prop4; // Cannot delete property 'prop4' of #<Object>

console.log(obj.hasOwnProperty('prop4')); // true
console.log(obj.propertyIsEnumerable('prop4')); // true
console.log(obj.prop4); // 100
