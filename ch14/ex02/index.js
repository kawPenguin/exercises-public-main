/**
 * 設問 14-2
 * `index.js`を完成させ、以下の要件を満たすクラスを作成しなさい。
 * `index.test.js`のテストが通ることを確認すること。
 * - `MyArray`は`Array`を継承し、`map()`, `slice()`の結果として`MyArrayLike`のオブジェクトを返す。（結果の型を変更するには`Symbol.species`を指定する）
 * - `MyArrayLike`は配列のようなクラスで`Array`を継承しない
 */

export class MyArrayLike {
  constructor(arrayLength) {
    this.length = arrayLength;
    // console.log("コンストラクタ実行");
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {return MyArrayLike;}
}

// const myArray = new MyArray([10, 20, 30]);
// const result = myArray.map(x => x * 2);
// console.log(result);

// コンストラクタ実行
// MyArrayLike { '0': 20, '1': 40, '2': 60, length: 3 }