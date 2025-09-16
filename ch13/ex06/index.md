# 設問13-6
## 問題
jQuery Deferred について調べ [`Promise`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) との関係性について説明しなさい。

## 回答
jQuery.Deferredは、非同期処理結果を表示するためのオブジェクトであり、
Promiseの先駆けとなった存在である。
jQuery.Deferred は、非同期処理の状態（未完了、成功、失敗）を管理し、
その状態に応じてあらかじめ登録しておいたコールバック関数を実行するための仕組みである。
Ajax 通信など、jQuery の非同期処理で広く利用されていた。
新規でコードを書く場合には、Promiseを用いるべきである。