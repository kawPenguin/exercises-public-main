# 問題 4.8

古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。

# 回答

EMCAScript5以前は、undefinedは読み取り専用ではなかったため、任意の値に上書きすることができた。
そのため、他の箇所でundefinedが変更されている可能性がある場合、undefinedの比較が期待通りに動作しない可能性があった。
それと比較して、voidは常にundefinedを返すため、常にundefinedと同様という事が出来た。

EMCAScript5以降は、undefiedは読み取り専用となっており書き換えが出来なくなり、
void 0を利用する理由がなくなったため、現在は void 0を用いた書き方はしていない。