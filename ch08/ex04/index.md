# 設問
以下の入れ子の関数とアロー関数のコード実行結果を予想してから実行し、結果を説明しなさい。

```js
const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest);
      },
      arrow: () => {
        console.log(this === obj, this === nest);
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
```

# 出力結果
false true
true false

# 説明
・nmは通常の関数なので、呼び出し時のthisは呼び出し元のオブジェクト(nest)となる。
　thisはnestではないため、objではないためfalse, trueの順になる

・arrowはアロー演算子であり、thisは定義時の外側のスコープのthisを継承している。
  今回、obj.om()泣いて定義されているため、obj関数のthisを継承している。
  よって、true, falseの順番になる。