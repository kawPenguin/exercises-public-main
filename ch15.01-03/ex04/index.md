## 設問15.01-03 - 4
## 問題
グローバルオブジェクトを参照する方法を、ブラウザ内、node 内、ブラウザ node 問わずの３種記しなさい。<br>
また、ブラウザと node のグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを 10 程度記しなさい。<br>
最後に、グローバルオブジェクトに undefined が定義されていることを確認し、過去の ES 仕様でどのような問題が発生していたかを記しなさい。<br>

## 回答
### グローバルオブジェクトの参照方法

ブラウザ内：window
Node内：global
ブラウザ・Node問わず：globalThis

### ブラウザ独自のもの
window : ウィンドウオブジェクト
document : DOM
alert(), confirm() : ダイアログ
localStrage : ストレージAPI
history : 履歴操作
navigator : ブラウザ情報
screen : スクリーン情報
requestAnimationFrame() : アニメーション

### 過去のES仕様でどのような問題が発生していたか
従来のundefinedは書き換えが可能であった。
そのため、あるところでundefinedをtrueと置き換えられると、
他の個所でundefinedと思って利用している箇所のコードが壊れる問題があった。

```js

// undefined を上書き
undefined = true;

// 他の開発者のコードが壊れる
function check(value) {
  if (value === undefined) {  // 常にfalseになる
    return "undefined";
  }
}
```